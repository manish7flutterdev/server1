const express = require("express")
const { findOne } = require("../models/ipo")
const Ipos = require("../models/ipo")

const router = express.Router()

router.route("/").get((req,res)=>{
    Ipos.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})



router.route("/id/:_id").get((req,res)=>{
       Ipos.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})


router.route("/register").post((req,res)=>{
    Ipos.findOne({name:req.body.name},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
        if(result===null)
        {
            const ipo = new Ipos({
                name: req.body.name,
                startDate:req.body.startDate,
                endDate:req.body.endDate,
                priceRange:req.body.priceRange,
                quantity: req.body.quantity,
                allotment:req.body.allotment,
                refund: req.body.refund,
                demat: req.body.demat,
                listing: req.body.listing,
                qibs: req.body.qibs,
                niis: req.body.niis,
                riis: req.body.riis,
                total: req.body.total,
            })
            ipo
             .save()
             .then(()=>{
              //  console.log(` ${req.body.iponame} ipo registered`)
                res.status(200).json({msg:"success"})
               })
             .catch((err)=>{
                res.status(403).json({msg:err})
               })
        }  
        else
        {
            res.json("This IPO already exists")
        }
   })
})



router.route("/update/:_id").patch((req,res)=>{
    Ipos.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            name: req.body.name,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            priceRange:req.body.priceRange,
            quantity: req.body.quantity,
            allotment:req.body.allotment,
            refund: req.body.refund,
            demat: req.body.demat,
            listing: req.body.listing,
            qibs: req.body.qibs,
            niis: req.body.niis,
            riis: req.body.riis,
            total: req.body.total,
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Ipos.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router