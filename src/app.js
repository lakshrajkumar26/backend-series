import express from "express"
import cors from"cors"
import cookieParser from "cookie-parser"


const app=express();

//  mera backend h toh kha kha h frntend se inputaccept krne de rha hu 
//example orgin:https://example.com
app.use(cors  ({
       origin: process.env.CORS_ORIGIN,
       credentials:true
}))

//setting for data in backend kisi se bhi aaega like
// kuch log url se bhejnge ,json se ,kuch log form se 

//means m json ko accept krra hu 
app.use(express.json   ({
    limit:"16kb"       
}))  


//in case of url  diff places hv diff url so first need to encode
//extended se obj ke aandr obj allowed
app.use(express.urlencoded({
    limit:"16kb",
    extended:true
}))
//kuch files save rkhna chata public assest img favicon etc
app.use(express.static("public"))


//mere server se user ka browser ka cookies access aur set CRUD operation 
app.use(cookieParser)

export default connectDB