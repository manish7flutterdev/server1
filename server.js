const { Router } = require("express")
const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const Mongoose = require("mongoose")
const  cors = require('cors')

app.use(cors())


///////////////////// MONGODB Connection //////////////////////////////////////////////////////////////////


Mongoose.connect("mongodb+srv://booksdatabase:books123@cluster0.ml6pb.mongodb.net/booksdata?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
})

 const connection = Mongoose.connection
 connection.once("open", ()=>{
     console.log("Database connected")
 })

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////// User Route /////////////////////////////////////////////////////////////////

app.use(express.json())
const userRoute = require("./Users/routes/users_routes")
app.use("/users",userRoute)

////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////// Ipo Route /////////////////////////////////////////////////////////////////

app.use(express.json())
const ipoRoute = require("./Ipo/routes/ipo_routes")
app.use("/ipo",ipoRoute)

////////////////////////////////////////////////////////////////////////////////////////////////////////


app.route("/").get((req,res)=>{
    res.json("Books App Server")
})


app.listen(PORT,"0.0.0.0",()=>{
    console.log("Server Started",PORT)
})