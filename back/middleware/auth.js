const jwt = require('jsonwebtoken');

const test = "ab";

const auth = (req, res, next) => {
    const token = req.header("auth-token");

    if(!token){
        return res.status(401).send("Access denied.");
    }

    try{
        const verified = jwt.verify(token, test);
        req.username = verified.username;
        next();
    }
    catch{
        res.status(400).send('Invalid token');
    }
}

module.exports = auth;