const express =require('express');
const router =express.Router();
const User= require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt =require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Neerajisagood$oy';

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
        const salt = await bcrypt.genSalt(10);
        const secPass= await bcrypt.hash(req.body.password,salt)
    // Create a new user
     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      
      const data={
        user:{
            is:user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET);

    //   console.log(jwtData);
      //res.json(user)
      res.json({authtoken})

    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:"Please enter a unique value for email",message:err.message})})
    
    } 
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


//Authenticate a User using :POST "/api/auth/login" . No Login required
router.post('/login',[
  body('email',"Enter a valid email").isEmail(),
  body('password',"password cannot be blank").exists(),
], async(req,res)=>{

  // If there are errors , return the Bad Request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password}=req.body;
  try{
      let user= await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }

      const passwordCompare =await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }
  
    const data={
      user:{
          is:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.json({authtoken})


  }
  
  catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})


module.exports = router
