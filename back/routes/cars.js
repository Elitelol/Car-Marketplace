const express = require('express');
const auth = require('../middleware/auth');
const {addCar, getUserCars, getCar, getAllCars} = require('../controllers/cars');

const router = express.Router();

router.post("/create", auth, addCar);
router.get("/:username", auth, getUserCars);
router.get("/:username/:carId", auth, getCar);
router.get("", auth, getAllCars);

module.exports = router