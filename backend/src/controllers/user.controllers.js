import User from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.js";

//for registering new user
const registerUser = asyncHandler(async (req,res) => {
  const {fullName,email,password}=req.body;
  if (!fullName || !email || !password) {
    return new ApiResponse(400, "Please provide all the required details");
  }
  const userExists = await User.find({email});
  if (userExists.length>0){
    res.status(400).json(new ApiError(400,"User already exists"));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword
  });
  try {
    await user.save();
    createToken(res,user._id);
    res.status(201).json(new ApiResponse(201,"User created successfully",user));
  } catch (error) {
    res.status(500).json(new ApiError(500,"Internal Server Error"));
    
  }
});

//to login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.password) {
    return new ApiResponse( "Please provide all the required details",400);
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (isPasswordCorrect) {
    createToken(res, user._id);
    res.status(200).json(new ApiResponse( "Logged in successfully",200,{
     
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role, // Must include 'admin' or 'user'
        
      
    }));
    
  } else {
    res.status(401).json(new ApiError( "Invalid credentials",401));
  }
});

//logout user
const logoutUser=asyncHandler(async(req,res)=>{
  res.cookie("jwt"," ",{
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json(new ApiResponse("User logged out successfully",200));
});


const getAllUsers=asyncHandler(async(req,res)=>{
  const users = await User.find().select("-password");
  res.status(200).json(new ApiResponse("All users fetched successfully",200,users));
})

const getCurrentUserProfile=asyncHandler(async(req,res)=>{
   const user= await User.findById(req.user._id);

   if (user){
    res.status(200).json(new ApiResponse("User profile fetched successfully",200,{
      fullName:user.fullName,
      email: user.email

    }))
   }else{
    res.status(404).json(new ApiError("User not authenticated",404));
   }
});

const updateCurrentUserProfile=asyncHandler(async(req,res)=>{
  const user= await User.findById(req.user._id);

  if(user){
    user.fullName=req.body.fullName || user.fullName;
    user.email=req.body.email || user.email;

    if (req.body.password){
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password,salt);
      user.password= hashedPassword;
    }
    //if avatar will come back later on while doing multer
    const updatedUser= user.save();
    return new ApiResponse(200,"User Updated successfully",updatedUser);
  }else{
    res.status(404).json(new ApiError(404,"User not authenticated"));
  }
});

const deleteUserById=asyncHandler(async(req,res)=>{
  const user= await User.findById(req.params._id);

  if (user) {
    if(user.role==="admin"){
      return new ApiError(404,"Cannot delete Admin User")
    }
    await User.deleteOne({_id:user._id});
    return new ApiResponse(200,"User removed")
    
  } else {
    res.status(404).json(new ApiError(404,"User doesn't exists"));
  }
});

const getUserById= asyncHandler(async(req,res)=>{
  const user=await User.findById(req.params._id).select("-password");
  if (user) res.status(200).json(user);
  else{
    res.status(404).json(new ApiError(404,"User doesn't exists"));
  }
})

export  {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,deleteUserById,getUserById
};
