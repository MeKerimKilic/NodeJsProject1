import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import RouterIndex from './Routers/index.js'
import MiddlewareIndex from './Middlewares/index.js'
import cors from 'cors';
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


Object.keys(MiddlewareIndex.Globals).forEach(function(key) {
    app.use('/*',MiddlewareIndex.Globals[key] )
});
Object.keys(RouterIndex).forEach(function(key) {

    if(Object.keys(MiddlewareIndex.Routers).find(element => element === key))
        app.use('/' + key,MiddlewareIndex.Routers[key],RouterIndex[key]);
    else
        app.use('/' + key , RouterIndex[key]);
});

app.listen(process.env.PORT, ()=>{
    mongoose.connect(process.env.DATABASE_STRING)
        .then(()=> console.log('Connection Succesfull'))
        .catch((error)=> console.log(error))
})