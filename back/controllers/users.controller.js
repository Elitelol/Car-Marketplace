const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Car = require("../models/car.model");

const test = "ab";

const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Username doesn't exist" });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const token = jwt.sign({ username: user.username }, test, {
      expiresIn: "1h",
    });
    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(500).json({ message: "Something wrong with server." });
  }
};

const signUp = async (req, res) => {
  const { name, username, password, passwordRepeated } = req.body;

  try {
    if (!name || !username || !password || !passwordRepeated) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username is taken." });
    }
    if (password !== passwordRepeated) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ username: newUser.username }, test, {
      expiresIn: "1h",
    });
    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(500).json({ message: "Something wrong with server." });
    console.log("Error: ", error);
  }
};

const getUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.find({ username })
    .select("-password")
    .select("-cars");

  if (!user) {
    res.status(404).json({ message: "User dosen't exist" });
  }

  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (username !== req.currentUser.username) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const user = await User.find({ username }).populate("cars");
    const userCars = user[0]["cars"];

    for (i = 0; i < userCars.length; i++) {
      const id = userCars[i]._id;
      await Car.findByIdAndDelete(id);
    }

    await User.findByIdAndDelete(user[0]._id);

    res.status(200).json({ message: "Account deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something wrong with server" + " " + error });
  }
};

const getUsers = async (req, res) => {
  try{
    const users = await User.find().select("-cars").select("-password");
    res.send(200).json(users);
  }
  catch(error){
    res.status(500).json({message: "Something wrong with server " + error});
  }
}

const updateUser = async (req, res) => {
  const toUpdate = {name, password, repeatedPassword, picture} = req.body;
  const {username} = req.params;

  try{
    const newPassword;

    if(req.currentUser.username != username){
      return res.status(403).json({message: "Unauthorized"});
    }

    if(password.length > 0 && password === passwordRepeated){
      newPassword = await bcrypt.hash(password, 10);
    }
    else if(password !== passwordRepeated){
      return res.status(400).json({message: "Passwords dont't match"});
    }
    else{
      newPassword = await User.find({username: req.currentUser.username}).password;
    }

    const updated = {name, newPassword, picture};

    await User.findOneAndUpdate(username, updated);

    res.status(200).json({message: "Profile updated"});
  }
  catch(error){
    res.status(500).json({message: "Something wrong with server " + error});
  }
}

module.exports = {
  signIn,
  signUp,
  getUser,
  deleteUser,
  getUsers,
  updateUser
};
