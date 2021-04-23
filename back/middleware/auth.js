const jwt = require('jsonwebtoken');
const authConfig = require("./../config/auth.config");

const auth = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).send("Access denied.");
    }

    try {
        const verified = jwt.verify(token, authConfig.TOKEN_SECRET);
        req.currentUser = verified
        next();
    }
    catch {
        res.status(400).send('Invalid token');
    }
}

module.exports = auth;