// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() =>{
  app.listen(proess.env.PORT ||8000,() =>{
    console.log(`Server is running as Port ${process.env.PORT}`);
  }) 
})

.catch((err)=>{
    console.log("MONGO db connection failed",err)
})