// const user = require('../model/Schema')
// const register = (req,res) =>{
//   console.log(req.body)
//   const {username, email, passowrd, phone} = req.body

// const userexits = await user.findOne({email: email})
// if (userexits){
//   return res.status(400).json({'mess': 'user alreday exits'})
// }
//   user.create({username, email, passowrd, phone})

// res.status(200).json({data})
// }
// module.exports = register

// const user = require('../model/Schema')
// const bcrypt = require('bcryptjs');
// const register = async (req, res) => {
//   console.log(req.body)
//   const { username, email, password, phone } = req.body

//   const userexits = await user.findOne({ email: email })
//   if (userexits) {
//     return res.status(400).json({ mess: 'user already exists' })
//   }


//   const saltround =10
//   const hash_password =  await bcrypt.hash(password, saltround

//   )
//   const data = await user.create({ username, email, password: hash_password, phone }, )

//   res.status(200).json({ msg: 'register done successfully', token: await data.generateToken(), userid: data._id.toString()} )
// }




// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const userloginexits = await user.findOne({ email });
//     if (!userloginexits) {
//       return res.status(400).json({ msg: 'invalid email or user not registered' });
//     }

//     const isMatch = await bcrypt.compare(password, userloginexits.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'invalid password' });
//     }

//     res.status(200).json({
//       msg: 'login successful',
//       token: await userloginexits.generateToken(),
//       userid: userloginexits._id.toString()
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'unable to login' });
//   }
// };

// module.exports = { register, login };

const user = require('../model/Schema');
const bcrypt = require('bcryptjs');

// ✅ FIX: Make sure `next` is passed
const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userexits = await user.findOne({ email });
    if (userexits) {
      return res.status(400).json({ mess: 'User already exists' });
    }

    const saltround = 10;
    const hash_password = await bcrypt.hash(password, saltround);

    const data = await user.create({
      username,
      email,
      password: hash_password,
      phone
    });

    res.status(200).json({
      msg: 'Register done successfully',
      token: await data.generateToken(),
      userid: data._id.toString()
    });

  } catch (error) {
    // ✅ Fix: make sure `next` is used if an error happens
    next({
      status: 500,
      message: 'Registration failed',
      
    });
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userloginexits = await user.findOne({ email });
    if (!userloginexits) {
      return res.status(400).json({ msg: 'Invalid email or user not registered' });
    }

    const isMatch = await bcrypt.compare(password, userloginexits.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    res.status(200).json({
      msg: 'Login successful',
      token: await userloginexits.generateToken(),
      userid: userloginexits._id.toString()
    });

  } catch (err) {
    next({
      status: 500,
      message: 'Login failed',

    });
  }
};



 const Usersmidd = async(req, res) =>{
try {
   const userdata = req.user
    console.log(userdata);
    res.status(200).json({msg: userdata})
} catch (error) {
  console.log(error)
      res.status(500).json({ msg: 'Server error' });

}
 }

module.exports = { register, login, Usersmidd };
