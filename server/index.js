import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import RouterIndex from './Routers/index.js'

dotenv.config()

const app = express()


app.use(express.json())
RouterIndex.for((key,router)=>{
    app.use('/'+key,router);
})


app.listen(5000, ()=>{
    mongoose.connect(process.env.DATABASE_STRING)
        .then(()=> console.log('Connection Succesfull'))
        .catch((error)=> console.log(error))
})