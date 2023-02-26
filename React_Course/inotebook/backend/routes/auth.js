const express =require('express');
const router =express.Router();
const User= require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a User using :POST "/api/auth/createuser" . No Login required
router.post('/createuser',[
    body('name',"Enter a valid name").isLength({ min: 3 }),
    body('email',"Enter a valid email").isEmail(),
    body('password',"password must be atleast 5 characters").isLength({ min: 5 }),
], async(req,res)=>{
    // If there are errors , return the Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    //Check whether the user with this email exists already

    try {
    
    let user =await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }

     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:"Please enter a unique value for email",message:err.message})})
    res.json(user)
    } 
    catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Accured");
    }

})






module.exports = router