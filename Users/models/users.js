const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Users = Schema({
   first: {
       type: String,
   },
   second:{
       type:String,
   },
   third:{
       type:String,
   },
    title:{
        type: String,
    },
    subtitle:{
        type:String,
    },
    image:{
        type: String,
    },
    content:{
        type:String,
    },
    
})

module.exports = mongoose.model("Users", Users)