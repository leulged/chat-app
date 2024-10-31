import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protectRoute =  async (req, res, next) =>{
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error: "Unauthorized: no token provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unauthorized: invalid token provided"})       
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            res.status(404).json({error: "user not found"})
        }
        req.user = user;
        next();
    }catch(error) {
        console.log("Error in protected route");
        res.status(401).json({error: "Unauthorized: Invalid token"})
    }
}
export default protectRoute