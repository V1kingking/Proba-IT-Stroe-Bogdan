// imports
const express = require("express");
const mongoose = require ("mongoose");
const morgan = require ("morgan");
const cors = require ("cors");

require ("dotenv").config();

// app
const app = express();



//database

mongoose.connect("mongodb://127.0.0.1:27017/proba-it")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(morgan("dev"));
app.use(cors({
    origin: true,
    credentials: true
}))

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`serverul ruleaza pe portul ${port}`)
})

const BauturaSchema =mongoose.Schema({
    nume: String,
    grad_alcoolemie: Number,
})

const BauturaModel = mongoose.model("bautura", BauturaSchema);

const vodca = new BauturaModel({
    name: "Vodca",
    grad_alcoolemie: 40});

const Whiskey = new BauturaModel({
    name: "Whiskey",
    grad_alcoolemie: 40});

app.post("/bautura", async (req, res) => {
    const bautura = vodca;
    await bautura.save()
})
