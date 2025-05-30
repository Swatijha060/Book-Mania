import jwt from "jsonwebtoken"

const generateToken= (res,userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.cookie("jwt",token,
        {
            httpOnly:true,
            maxAge:3600*1000,
            secure:process.env.NODE_ENV !=="development",
            sameSite: "strict"
        }
        
    )
    return token;
};
export default generateToken;

