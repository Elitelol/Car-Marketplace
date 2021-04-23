const express = require('express');
const { signIn, signUp, getUser, deleteUser, getUsers, updateUser } = require('../controllers/users.controller');
const { getUserCars, getUserCar } = require('../controllers/cars.controller');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:username', getUser);
router.get("/all", getUsers);
router.delete('/delete/:username', auth, deleteUser);
router.patch("/update/:username", auth, updateUser);
router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.get("/cars/:username", getUserCars);
router.get("/cars/:username/:carId", getUserCar);

module.exports = router;
