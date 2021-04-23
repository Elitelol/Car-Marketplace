const User = require("../models/user.model");
const Car = require("../models/car.model");
const { mongoose } = require("mongoose");

const addCar = async (req, res) => {
    const username = req.currentUser.username;
    const {make, model, price, year, description, picture} = req.body;

    try{
        if(!make || !model || !price ){
            res.status(400).json({message: "Required car fields missing"});
        }

        const user = await User.findOne({username});
        const newCar = await Car.create({make, model, price, year, description, picture, ownerUsername: username, owner: user._id});
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
        const cars = await Car.find({ownerUsername: username});
        
        res.status(200).json(cars);
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getCar = async (req, res) => {
    const {carId} = req.params;

    try{
        const car = await Car.findById(carId);

        if(car){
           return res.status(200).json(car);       
        }

        res.status(400).json("Car doesn't exist");
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getUserCar = async (req, res) => {
    const {username, carId} = req.params;

    try{
        const car = await Car.find({ownerUsername: username, _id: carId});

        if(car){
            return res.status(200).json(car);       
        }

        res.status(400).json("Car doesn't exist");
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const getAllCars = async (req, res) => {
    try{
        const cars = await Car.find();
        
        res.status(200).send(cars);   
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server" + err});
    }
}

const deleteCar = async (req, res) => {
    try{
        const {carId} = req.params
        const car = await Car.findById(carId);

        if(!car){
            return res.status(404).json({message: "Car doesn't exist"});
        }

        if(req.currentUser.username !== car.ownerUsername){
            return res.status(403).json({message: "Unauthorized"});
        }

        await Car.findByIdAndDelete(carId);

        return res.status(200).json({message: "Car deleted."});
    }
    catch(err){
        res.status(500).json({message: "Something wrong with server"});
    }
}

const updateCar = async (req, res) => {
    let {make, model, price, year, description, picture} = req.body;
    const {carId} = req.params

    try{
        const car = await Car.findById(carId);

        if(!car){
            return res.status(404).json({message: "Car doesn't exist"});
        }

        if(req.currentUser.username !== car.ownerUsername){
            return res.status(403).json({message: "Unauthorized"});
        }

        if(!make) make = car.make;
        if(!model) model = car.model;
        if(!price) price = car.price;
        if(!year) year = car.year;
        if(!description) description = car.description;
        if(!picture) picture = car.picture;

        const updatedCar = {make, model, price, year, description, picture};

        await Car.findByIdAndUpdate(carId, updatedCar, {new: true}); 

        return res.status(200).json({message: "Car updated."});
    }
    catch(error){
        res.status(500).json({message: "Something wrong with server"});
    }
}

module.exports = {
     addCar,
     getUserCars, 
     getCar,
     getUserCar,
     getAllCars,
     deleteCar,
     updateCar
};