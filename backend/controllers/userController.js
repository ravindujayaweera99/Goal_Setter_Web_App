import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//@desc POST user
//@route POST /api/users/
//@access public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Request Body:", req.body);
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields!");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  //Hasing the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc Authenticate a User
// @route POST /api/users/login
// @access public
export const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Login User",
  });
});

// @desc GET get user data
// @route GET /api/users/me
// @access private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Your Details",
  });
});
