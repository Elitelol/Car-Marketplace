const User = require("../models/user.model");
const Car = require("../models/car.model");

const addCar = async (req, res) => {
    const {username} = req.params;
    const {make, model, price, picture} = req.body;

    try{
        const user = await User.findOne({username});
        const newCar = await Car.create({make, model, price, picture});

        user.cars.push(newCar);
        await user.save();

        res.status(201).json({message: "Car created"});
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }

}

const getUserCars = async(req, res) => {
    const {username} = req.params;

    try{
        const user = await User.find({username}).populate("cars");
        
        res.status(201).json(user[0]["cars"]);
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getCar = async (req, res) => {
    const {username, carId} = req.params;
}

module.exports = {addCar, getUserCars, getCar};