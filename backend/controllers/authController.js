const User = require("../models/User");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// Inregistrare utilizator
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //Verificare date
    if (!name) {
      return res.json({ error: "Introduceti un nume" });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Parola este necesara si trebuie sa aibe cel putin 6 caractere",
      });
    }
    if (!email) {
      return res.json({ error: "Introduceti o adresa de email" });
    }
    const exista = await User.findOne({ email });
    if (exista) {
      return res.json({ error: "Email deja folosit" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (name || email || password) return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Logare Utilizator
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Verificare date

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Acest utilizator nu este exista" });
    }
    jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
    res.cookie("token", token).json(user);
      }
    );
    if (user.password !== password) {
      return res.json({ error: "Parola este gresita" });
    }
    if (password != user.password) {
      res.json("Passwords do not match");
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
