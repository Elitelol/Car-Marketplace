const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const DB_CONNECTION = 'mongodb+srv://cargoesvroom:cargoesvroom123@cluster0.kryum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("CAR GOES VROOOOOM");
});

mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));