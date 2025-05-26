import { Router } from "express";

import {registerUser,
    loginUser,
    logoutUser,
getAllUsers,
getCurrentUserProfile,
updateCurrentUserProfile} from "../controllers/user.controllers.js"

import {authenticate, authorizeAdmin} from "../middlewares/authMiddlewares.js";
const router = Router();

// Register User
router
.route("/register")
.post(registerUser)

//Auth
router.post("/login",loginUser );
router.post("/logout", logoutUser);

//Private routing
router.route("/profile")
.get(authenticate,getCurrentUserProfile)
.put(authenticate,updateCurrentUserProfile);



//For the admins
router.route("/").get(authenticate,authorizeAdmin,getAllUsers);

export default router;

