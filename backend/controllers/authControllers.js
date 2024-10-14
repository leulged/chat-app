import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
export const signup = async (req , res) => {
    try{
        const {fullName , username , password , confirmPassword , gender} = req.body;
        if(password != confirmPassword){
            return res.status(400).json({error: "passwords don't match"})
        }
         
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error: "Username already exists "})
        }
        // Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        //
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })    
    if(newUser){
        await newUser.save();  
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.username,
            profilePic: newUser.profilePic
        })

    }
    else{
        res.status(400).json({error: "invalid user data"})
    }
    } catch (error){
        console.log("Error in signup controller", error.message)
        res.status(500).json({error: "internal server error"})
    }
};
export const login = (req , res) => {   
    console.log("loginuser");
};
export const logout = (req , res) => {
    console.log("logoutuser");
};
