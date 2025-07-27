// const user = require('../model/Schema')
// const getallusers = async(req, res) =>{
// try {
//              const users = await user.find();
//              res.status(200).json(users)
             
// } catch (error) {
//       console.log(error);

// }
// }

// module.exports = getallusers
// const user = require('../model/Schema');

// const getallusers = async (req, res) => {
//   try {
//     const users = await user.find(); // ✅ Await the Promise
//     res.status(200).json(users);     // ✅ Now sending actual data
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" }); // Optional: better error response
//   }
// };

// module.exports = getallusers;

// const User = require('../model/Schema');

// const getallusers = async (req, res) => {
//   try {
//     const users = await User.find().select('-password');
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users:");
//     res.status(500).json({ message: "Server error" });
//   }
// };

// const deleteuserid = async (req, res) =>{

//   try {
    
//     const id = req.params.id;

//     await User.deleteOne({_id: id})
//     res.status(200).json({msg:'deleted successfully'})
//   } catch (error) {
//     console.log(error)
//   }
// }
 
// module.exports = {getallusers, deleteuserid};


const User = require('../model/Schema');

const getallusers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({ users }); // ✅ fixed: return as object
  } catch (error) {
    console.error("Error fetching :", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateUserById = async(req, res) =>{
   const id = req.params.id;
try {
  const udate = await User.find({_id: id}, {password: 0})
    res.status(200).json({udate})
} catch (error) {
  console.log('unable to update ')
   res.status(400).json({msg: 'unable to fing the id '})
}

}



//  const userUpdateByID = async(req, res) =>{
 
//    try {
// const id = req.params.id;
// const updateusers = req.body;



//     const updatedusers = await User.updateOne(
//       { _id: id },
//       { $set: updateusers }
//     );
//         res.status(200).json({ updatedusers });

//    } catch (error) {
//     res.status(400).json({msg: 'update user by id not been done '})
//    }
//  }













const userUpdateByID = async(req, res) => {
  try {
    const id = req.params.id;
    const updateusers = req.body;

    const updatedusers = await User.updateOne(
      { _id: id },
      { $set: updateusers }
    );

    console.log(`User updated: ${id}`, updatedusers); // 👍 Helpful log
    
res.status(200).json({ 
  message: "User updated successfully", 
  updatedusers 
});

  } catch (error) {
    console.error("Update error:", error); // ✅ Show real error
    res.status(400).json({ msg: 'update  by id not been done ' });
  }
}






const deleteuserid = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ msg: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete " });
  }
};

module.exports = { getallusers, deleteuserid, updateUserById , userUpdateByID};
