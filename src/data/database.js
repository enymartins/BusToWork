require('dotenv').config()
const mongoose = require('mongoose');

const varEnviroment = process.env.DATABASE_URL_DEV || process.env.DATABASE_URL_PROD
const connect = () => {
    mongoose.connect(varEnviroment, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('Database connected!'))
        .catch((error) => {
            console.log("Algo deu errado!")
            console.error(error)
        })
}

module.exports = { connect }