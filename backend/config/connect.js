const mongoose = require("mongoose");
require('dotenv').config();

exports.connectToMongoDB = () =>{
    mongoose.connect(process.env.dbUrl)
    .then(() => {
        console.log("Database Connection successful");
    }).catch((err) => {
        console.log('Error in DB Connection : ');
        console.log(err);
    });
};

