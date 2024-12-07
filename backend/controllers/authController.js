const User = require('../models/User')

const test = (req,res) => {
    res.json('test is working')
}

const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        //Verificare date
        if(!name) {
            return res.json({error: 'Introduceti un nume'})
        }
        if(!password || password.length <6){
            return res.json({error: 'Parola este necesara si trebuie sa aibe cel putin 6 caractere'})
        }
        if(!email) {
            return res.json({error: 'Introduceti o adresa de email'})
        }
        const exista = await User.findOne({email});
        if(exista){
            return res.json({error: 'Email deja folosit'})
        }

        const user = await User.create({
            name,email,password
        })

        if(name || email || password)
            return res.json(user)
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}