import bcrypt from 'bcryptjs'
import UserModel from "../Models/User.js";

export default new class {
    async signup(req,res){
        try{
            const { fullName, phoneNumber, username, password, email} = req.body;
            if(!fullName || !phoneNumber || !username || !password || !email)
                return res.status(400).json({
                    status:false,
                    code:100,
                    message:'User information does is not defined'
                })
            const userEmailExists= await UserModel.findOne({email})
            const userPhoneExists= await UserModel.findOne({phoneNumber})
            const userUsernameExists= await UserModel.findOne({username})
            if(userEmailExists || userPhoneExists || userEmailExists || userUsernameExists)
                return res.status(400).json({
                    status:false,
                    code:100,
                    message:'User information Phone or Email or Username is already'
                })
            const hashedPassword = await bcrypt.hash(password,10);

            const userCreated = await UserModel.create({
                fullName,
                phoneNumber,
                username,
                email,
                password:hashedPassword
            })

            return res.status(201).json({
                status:true,
                user:userCreated
            });


        }catch (error){
            console.log('Router: Usersignup Error:'+error);
            return res.status(400).json({
                status:false,
                code:100,
                message:error
            })
        }

    }
    async signin (req,res){
        try {
            const {username, password}=req.body;
            const user = await UserModel.findOne({username});
            if(!user)
                return res.status(400).json({status:false,message:'User does not exist'})

            const isPasswordCorrect= await bcrypt.compare(password,user.password)
            if(!isPasswordCorrect)
                return res.status(400).json({status:false,message:'Wrong password'})

            return res.status(200).json({status:true,message:'Authentication successful',user})
        }catch (error){
            console.log('Router: Usersignin Error:'+error);
            return res.status(400).json({status:false,message:error})
        }
    }

    async userList(req,res){
        const {username}=req.query;

        const users = await UserModel.findOne({ username});
        return res.status(200).json({status:true,users});
    }

}

