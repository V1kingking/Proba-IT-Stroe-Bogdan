const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema =mongoose.Schema({
    name: String,
    email: {
        String,
         //   unique: true
    },
    password: String
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel