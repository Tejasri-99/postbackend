const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=1998;
console.log(Register)
app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://Tejasri:ammu1234@cluster0.uys7hqq.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	res.send("hi i am mongodb")
})
app.post("/register",(req,res)=>{
	/*const {username,password}=req.body*/
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is started at port 1998"))