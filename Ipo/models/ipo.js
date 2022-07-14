const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Ipos = Schema({
   name: {
       type: String,
   },
   startDate:{
       type:String,
   },
   endDate:{
       type:String,
   },
    priceRange:{
        type: String,
    },
    quantity:{
        type:String,
    },
    allotment:{
        type: String,
    },
    refund:{
        type:String,
    },
    demat:{
        type:String,
    },
    listing:{
        type:String,
    },
    qibs:{
        type:String,
    },
    niis:{
        type:String,
    },
    riis:{
        type:String,
    },
    total:{
        type:String,
    },

    
})

module.exports = mongoose.model("Ipos", Ipos)