const mongoose = require('mongoose');
require('../nodemodules_mocked/dotenv').config();


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Database connection successful! 😇");
    } catch (error) {
        console.log(error);
    }
}

mongoose.connection.on('disconnected', () => console.log("Database Connected! 😇"));
mongoose.connection.on('connected', () => console.log("Database disconnected! 😢"));


module.exports.connection = dbConnection;