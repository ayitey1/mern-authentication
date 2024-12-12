const router = require('express').Router();
const { json } = require('express');
const User = require('../model/User');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post("/register",async (req,res) => {
    try {
     const salt = await bycrpt.genSalt(10);
     const hashedPassword = await bycrpt.hash(req.body.password, salt);
    
    
    const NewUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })
      const user= await NewUser.save();
        res.status(200).json(user)
    
    }
    catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
})

router.post("/login", async(req,res)=>{
    try {
        //find user
            const user = await User.findOne({username:req.body.username});
            !user && res.status(400).json("wrong username")
        
            //validate user
            const validpasswword = await bycrpt.compare(
                req.body.password,user.password
            );
            !validpasswword && res.status(400).json("wrong password")
            
            //send res 
            res.status(200).json({_id: user._id,username:user.username ,password :validpasswword})
            

        }   catch(err){
            res.status(500).json(err)
        
        
       
            
    
    

 
   }
})
module.exports=router
