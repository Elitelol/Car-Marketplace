const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    year: Date,
    description: String,
    picture: String,
    posted: {
        type: Date,
        default: new Date()
    },
    ownerUsername: {type: String, required: true},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;