import User from "../models/UserModels.js";

export const getAllUser = async(req, res) =>{
    try {
        const user = User.findAll()
        if(!user){
            return res.status(401).json({msg: 'No users found'})
        }
        return user
    } catch (error) {
        
    }
}