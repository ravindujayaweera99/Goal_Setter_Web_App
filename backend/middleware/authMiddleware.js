import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // getting the token from the header
      token = req.headers.authorization.split(" ")[1];

      //verifying the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //getting the user form the token
      req.user = await User.findById(decoded.id).select("-password");

      next();

    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized!");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized!, No Token!");
  }
});

export default protect;

//Bearer token <- this is the format of the header
