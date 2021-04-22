const express = require('express');
const auth = require('../middleware/auth');
const {addCar, getCar, getAllCars, deleteCar, updateCar} = require('../controllers/cars.controller');

const router = express.Router();

router.post("/create", auth, addCar);
router.get("/:carId", getCar);
router.get("", getAllCars);
router.delete("/delete/:carId", auth, deleteCar);
router.patch("/update/:carId", auth, updateCar);

module.exports = router