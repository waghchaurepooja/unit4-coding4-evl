const express=require("express")

const router=express.Router
const Todo=require("../models/todo.model")
const authenticate=require("../middleware/authenticate")

router.post("",authenticate,async(req,res)=>{
   req.body.user_Id=req.USERID
   
    try {

        const todo=await Todo.create(req.body)
        return res.status(200).send(todo)
        
    } catch (error) {
        return res.status(500).send({message:message.err})
    }
})

router.get("",async(req,res)=>{
   
    
     try {
 
         const todos=await Todo.find().lean().exec()
         return res.status(200).send(todos)
         
     } catch (error) {
         return res.status(500).send({message:message.err})
     }
 })

 router.get("/:id",async(req,res)=>{
   
    
     try {
 
         const todo=await Todo.findById(req.params.id).lean().exec()
         return res.status(200).send(todo)
         
     } catch (error) {
         return res.status(401).send({message:message.err})
     }
 })


 router.patch("/:id",async(req,res)=>{
   
    
    try {

        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(todo)
        
    } catch (error) {
        return res.status(401).send({message:message.err})
    }
})

router.delete("/:id",async(req,res)=>{
   
    
    try {

        const todo=await Todo.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(todo)
        
    } catch (error) {
        return res.status(401).send({message:message.err})
    }
})

module.exports=router