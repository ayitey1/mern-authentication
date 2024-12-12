const Pin = require('../model/pin');
const router  = require('express').Router();

router.post( "/",async (req,res) =>{
    const newPin = new Pin(req.body);
    if(!newPin.username|| !newPin.title|| !newPin.desc|| !newPin.rating|| !newPin.lat|| !newPin.long){
        return res.status(400).json({message:"Please fill all fields"});
    }
    try{
        const SavedPin = await newPin.save();
        res.status(200).json(SavedPin);
    } catch(err){
        res.status(500).json({message:err.message});
    }
} ) 
router.get("/", async (req,res) =>{
    try{
        const allPins = await Pin.find();
        res.status(200).json(allPins);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})
module.exports=router