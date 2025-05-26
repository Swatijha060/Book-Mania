import User from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authenticate = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401).json(new ApiError(401, "Unauthorized"));
    }
  } else {
    res.status(401).json(new ApiError(401, "Unauthorized,token not found"));
  }
});

const authorizeAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role ===  "admin") {
    next();
  } else {
    res.status(403).json(new ApiError(403, "Forbidden"));
  }
});

export  { authenticate, authorizeAdmin };
