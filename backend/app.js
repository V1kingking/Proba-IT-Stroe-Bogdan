// imports
const express = require("express");
const mongoose = require ("mongoose");
const morgan = require ("morgan");
const cors = require ("cors");
require ("dotenv").config();
const app = express();
//database

mongoose.connect("mongodb://127.0.0.1:27017/proba-it")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(morgan("dev"));

// middleware
app.use(express.json())

app.use('/', require('./routes/authRoutes'))


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`serverul ruleaza pe portul ${port}`)
})

