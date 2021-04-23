const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true },
    picture: String,
    joined: {
        type: Date,
        default: new Date()
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;