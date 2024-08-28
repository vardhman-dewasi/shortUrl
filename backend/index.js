//import 
const express = require("express");
const app = express();
const {connectToMongoDB} = require("./config/connect");
const urlRoute = require("./routes/url");
require("dotenv").config();
const cors =require("cors");

const PORT = process.env.PORT;
//middleware parser
app.use(cors());
app.use(express.json());

//mounting of route
app.use("/url", urlRoute);

//starting server
 app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))

 //connect to mongoDB
 connectToMongoDB();

