const express=require("express")
const app=express()
app.use(express.json())
const connect=require("./configs/db")

const {register,login,generateToken}=require("./controller/auth.controller")
const todoController=require("./controller/todo.controller")
const userController=require("./controller/user.controller")


app.use("/user",userController)

app.post("/register",register)
app.post("/login",login)

app.use("/todo",todoController)


app.listen(5000,async()=>{
    try {
        await connect()
        console.log("listening to port 5000")
    } catch (err) {
        console.log(err)
        
    }
})