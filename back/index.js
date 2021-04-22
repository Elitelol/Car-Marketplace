const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users.routes');
const carRoutes = require('./routes/cars.routes');
const app = express();
const dbConfig = require("./config/db.config");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/cars", carRoutes);

app.get("/", (req, res) => {
    res.send("CAR GOES VROOOOOM");
});

mongoose
    .connect(`mongodb://db:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    })
    .catch(err => {
        console.error("Connection error", err.message);
        process.exit();
    });
