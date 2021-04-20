const User = require("../models/user.model");
const bcrypt = require('bcrypt');

const signIn = async (req, res) => {
    const {email, password } = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "Email doesn't exist"});
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);

        if(!passwordCorrect){
            return res.status(400).json({message: "Invalid password."});
        }

        res.status(200).json(user.email);
    }
    catch(error){
        res.status(500).json({message: "Something wrong with server."});
    }
};

const signUp = async (req, res) => {
    const {name, email, password, passwordRepeated} = req.body;

    try{
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "Email is taken."});
        }
        if(password !== passwordRepeated){
            return res.status(400).json({message: "Passwords don't match."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({name, email, password: hashedPassword});

        res.status(201).json({newUser});
    }
    catch(error){
        res.status(500).json({message: "Something wrong with server."});
    }

};

module.exports = {
    signIn,
    signUp
}