const mongoose =require("mongoose")

const todoSchema=new mongoose.Schema({
    
    title:{type:String,required:true},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
   
},
{
    timeStamps:true,
    versionKey:false
})


module.exports=mongoose.model("user",todoSchema)