const mongoose = require('mongoose');
const conn = async(req,res)=>{
  try{
    await mongoose
    .connect("mongodb+srv://vyasanoushka:Chikupiku13!@cluster0.de7xedj.mongodb.net/")
    .then(()=>{
      console.log("connected!!");
    })
  }

  catch(error){
    res.status(400).json({
      message:"not connected!!"
    });
  }
  
};


conn();