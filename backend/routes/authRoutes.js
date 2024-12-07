const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require ('../controllers/authController')

// middleware
router.use(
    cors({
        credentials: true,
        origin: true
    })
);

router.get('/',test)
router.post("/register", registerUser)

module.exports = router