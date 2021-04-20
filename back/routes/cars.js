const express = require('express');
const auth = require('../middleware/auth');
const test = require('../controllers/cars');

const router = express.Router();

router.get("/", auth, test);

module.exports = router