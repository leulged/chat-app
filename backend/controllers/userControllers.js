import User from "../models/userModel.js";
export const getUserForSideBar = async(req, res) =>{
    try{
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")// this part use for to not see loged user
        res.status(200).json(filteredUsers)
    }catch(error) {
        console.error("Error in GetUserForSidebar", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}