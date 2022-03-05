import express from "express";
import bcrypt from "bcryptjs";
import User from "../Models/User.js";

const router = express.Router();

router.post('/signup',async (req,res)=>{
    try{
        console.log(req.body);
        const { fullName, phoneNumber, username, password, email} = req.body;
        const userEmailExists= await User.finOne({email})
        const userPhoneExists= await User.finOne({phoneNumber})
        const userUsernameExists= await User.finOne({username})
        if(userEmailExists || userPhoneExists || userEmailExists || userUsernameExists)
            return res.status(400).json({
                status:false,
                code:100,
                message:'User informatrion Phone or Email or Username is already'
            })
        const hashedPassword = bcrypt.hash(password,10);

        const userCreated = User.create({
            fullName,
            phoneNumber,
            username,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            status:true,
            userCreated
        });


    }catch (error){
        console.log('Router: Usersignup Error:'+error);
        return res.status(400).json({
            status:false,
            code:100,
            message:error
        })
    }

})

router.post('/signin', async (req,res)=>{
    try {
        const {username, password}=req.body;
        const user = await User.findOne({username});
        if(!user)
            return res.status(400).json({status:false,message:'User does not exist'})
        const isPasswordCorrect= await bcrypt(password,user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({status:false,message:'Wrong password'})

        return res.status(200).json({status:true,message:'Authentication successful'})
    }catch (error){
        console.log('Router: Usersignin Error:'+error);
        return res.status(400).json({status:false,message:error})
    }
})