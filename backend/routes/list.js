const router = require('express').Router();
const User = require("../models/user");
const List = require("../models/list");

// Add Task
router.post('/addTask', async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const list = new List({ title, body, user: existingUser._id });
      await list.save();
      existingUser.list.push(list);
      await existingUser.save();

      return res.status(200).json({ list });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});

// Update Task
router.put('/updateTask/:id', async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

      if (list) {
        return res.status(200).json({ message: "Task updated!", list });
      } else {
        return res.status(404).json({ message: "Task not found" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});


router.delete('/deleteTask/:id', async (req, res) => {
  try {
    const {email } = req.body;
    const existingUser = await User.findOneAndUpdate({ email },{$pull:{list:req.params.id}});

    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message:"Deleted!"}));


    
    } else {
      return res.status(404).json({ message: "User not found" });
    }

    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred", error });
  }
});



//getTask
router.get("/getTask/:id",async(req,res)=>{

 const list = await List.find({user:req.params.id}).sort({createdAt: -1});
 if(list.length!==0){
  res.status(200).json({list});
 }
 else{
  res.status(200).json({message:"no tasks!"});

 }
});
module.exports = router;
