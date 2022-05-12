const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER USERS
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY)
            .toString(),
    });
    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch (err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        //SEARCH ON DB IF EXISTS GIVEN EMAIL
      const user = await User.findOne({ email: req.body.email });
        //IF NOT SEND WARNING
      !user && res.status(401).json("Wrong password or username!");
        
        //IF SO DECRYPT PASSWORD USING SECRET KEY
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        //DECRYPT KEY
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        
        //COMPARE WITH THE ONE ON DB
      originalPassword !== req.body.password &&
        res.status(401).json("Wrong password or username!"); //IF IT IS BAD SEND WARNING
        
        //SIGN IN WITH ACCESS TOKEN
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
        
        //STORES INFO LOCALLY
      const { password, ...info } = user._doc;

        //RETURN INFO FROM DB + ACESS TOKEN
      res.status(200).json({ ...info, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;