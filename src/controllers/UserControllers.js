import User from "../models/UserModels.js";

export const getAllUser = async(req, res) =>{
    try {
        const user = User.findAll()
        if(user){
            return res.status(401).json({msg: 'list of all users', data : user})
        }
        else{
            return res.status(404).json({msg : 'np'})
        }
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
export const createUser = async(req,res )=> {
    try {
        const newUser = await User.create(req.body)
        return res.status(201).json({message : "User created!", data : newUser})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}