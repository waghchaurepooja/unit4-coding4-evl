require('dotenv').config()

// const { verify } = require('crypto')
const jwt=require("jsonwebtoken")

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err) return reject(err)

            return resolve(decoded)
        })
    })
        
    
}

const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
    {
        return res.status(400).send("authorization token not found or incorrect")
    }
    if(!req.headers.authorization.startsWith("Beares"))
    {
        return res.status(400).send("authorization token not found or incorrect")
    }
    const token=req.headers.authorization.trim().split("")[1]
    let decoded;
    try {
        decoded=await verifyToken(token)
    } catch (err) {
        console.log(err)
        return res.status(400).send("authorization token not found or incorrect")
    }

    req.User=decoded.User
    return next()
}

module.exports=authenticate