import mongoose from "mongoose";


export default mongoose.model('User',mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    phoneNumber:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    userType:{
        type: String,
        enum:['USER','ADMIN'],
        default:'USER'
    }

}))