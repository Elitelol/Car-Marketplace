const User = require("../models/user.model");
const Car = require("../models/car.model");

const addCar = async (req, res) => {
    const {username} = req.params;
    const {make, model, price, picture} = req.body;

    try{
        const user = await User.findOne({username});
        const newCar = await Car.create({make, model, price, picture, ownerUsername: username, owner: user._id});

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
        
        res.status(200).json(user[0]["cars"]);
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getCar = async (req, res) => {
    const {username, carId} = req.params;

    try{
        const user = await User.find({username}).populate("cars");
        const cars = user[0]["cars"];

        for(i = 0; i < cars.length; i++){
            const car = cars[i];

            if(car._id == carId){
               return res.status(200).json(car);       
            }
        }

    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getAllCars = async (req, res) => {
    try{
        const allUsers = await User.find().populate("cars");
        const cars = [];

        for(i = 0; i < allUsers.length; i++){
            const currentCars = allUsers[i]["cars"];

            for(j = 0; j < currentCars.length; j++){
                cars.push(currentCars[j]);
            }
        }
        
        res.status(200).send(cars);   
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server" + err});
    }
}

module.exports = {
     addCar,
     getUserCars, 
     getCar,
     getAllCars
};