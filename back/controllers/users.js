const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const test = "ab";

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
        
        const token = jwt.sign({email: user.email}, test, { expiresIn: "1h" });
        res.header('auth-token', token).send(token);
        
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

        const token = jwt.sign({email: newUser.email}, test, { expiresIn: "1h" });
        res.header('auth-token', token).send(token);
    }
    catch(error){
        res.status(500).json({message: "Something wrong with server."});
    }

};

module.exports = {
    signIn,
    signUp
}