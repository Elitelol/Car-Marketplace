const express = require('express');
const auth = require('../middleware/auth');
const {addCar, getUserCars, getCar, getAllCars, deleteCar, updateCar} = require('../controllers/cars.controller');

const router = express.Router();

router.post("/create", auth, addCar);
router.get("/:username", auth, getUserCars);
router.get("/:username/:carId", auth, getCar);
router.get("", auth, getAllCars);
router.delete("/delete", auth, deleteCar);
router.patch("/update", auth, updateCar);

module.exports = router