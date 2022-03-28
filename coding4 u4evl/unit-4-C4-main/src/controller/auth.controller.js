const User=require("../models/user.moddel")
const jwt=require("jsonwebtoken")
require('dotenv').config()


const generateToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)
}




const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email})

        if(user)
        {
            return res.status(400).send("email already exits")
        }

        user =await User.create(req.body)
        const token=generateToken(user)
        return res.status(200).send({user,token})
    } catch (err) {
        return res.status(500).send({message:message.err})
    }
}




const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})

        if(!user)
        {
            return res.status(400).send("wrong email or password")
        }

        let match=User.checkPassword(req.body.password)
        if(!match)
        {
            return res.status(400).send("wrong email or password")
        }
    
        const token=generateToken(user)
        return res.status(200).send({user,token})
    } catch (err) {
        return res.status(500).send({message:message.err})
    }
}

module.exports={register,login,generateToken}
