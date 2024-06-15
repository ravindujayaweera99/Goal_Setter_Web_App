import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//@desc POST user
//@route POST /api/users/
//@access public
export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Register User!",
  });
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
