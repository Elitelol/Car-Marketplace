const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    picture: String,
    posted: {
        type: Date,
        default: new Date()
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("Car", carSchema);

module.exports = carSchema;