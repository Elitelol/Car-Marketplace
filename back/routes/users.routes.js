const express = require('express');
const { signIn, signUp, getUser, deleteUser } = require('../controllers/users.controller');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:username', auth, getUser);
router.delete('/delete/:username', auth, deleteUser);
router.post('/signIn', signIn);
router.post('/signUp', signUp);

module.exports = router;
