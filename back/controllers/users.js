const User = require("../models/user.model");

const signIn = (req, res) => {
    const {email, password } = req.body;
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

        const newUser = await User.create({name, email, password});

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