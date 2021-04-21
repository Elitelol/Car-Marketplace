const express = require('express');
const auth = require('../middleware/auth');
const {addCar, getUserCars, getCar, getAllCars} = require('../controllers/cars');

const router = express.Router();

router.post("/:username/create", addCar);
router.get("/:username", getUserCars);
router.get("/:username/:carId", getCar);
router.get("", getAllCars);

module.exports = router