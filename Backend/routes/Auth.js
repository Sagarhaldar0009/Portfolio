// import express from 'express';
// const router = express.Router();
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import User from '../models/User.js';
// import * as dotenv from "dotenv";
// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET

// // SignUp route
// router.post('/signup', async (req, res) => {
//   const { email, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.status(400).json({ message: 'Passwords do not match' });
//   }

//   try {
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     user = new User({ email, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30m' });

//     res.status(201).json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30m' });
//     console.log('User Logged In Successfully');
//     res.status(200).json({ message:'User Logged In Successfully' ,token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Middleware to protect routes
// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };


// // Protected route example
// router.get('/protected', authMiddleware, (req, res) => {
//   res.status(200).json({ message: 'This is a protected route' });
// });


// // Logout route
// router.post('/logout', (req, res) => {
//   res.status(200).json({ message: 'Logout successful' });
// });


// export default router;



// controllers/authController.js
import express from 'express';
const router = express.Router();
import User from '../models/User.js';
import TokenBlackList from '../models/TokenBlackList.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET


router.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '10m' });
    console.log('User Logged In Successfully');

    res.status(200).json({ message:'User Logged In Successfully',token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// const logout = (req, res) => {
//   // Assuming the client will handle token removal on logout
//   res.status(200).json({ message: "Logged out successfully" });
// };

router.post('/logout',async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const blacklistEntry = new TokenBlackList({
      token,
      expiresAt: new Date(decoded.exp * 1000) // JWT exp is in seconds
    });
    await blacklistEntry.save();

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { signup, signin, logout };
