import mongoose, { Schema } from "mongoose";



const userHistorySchema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    action:{
        type:String,
        enum:["viewed", "read", "bookmarked", "rated", "reviewed", "purchased",  "shared"], //"added to cart", "removed from cart",
    },
    details:{
        rating: { type: Number, min: 1, max: 5 }, // For rated/reviewed actions
      comment: { type: String }, // For reviewed actions
      pageReached: { type: Number }, // For read actions
    },
},
{
    timestamps:true
});

const userHistoryModel= mongoose.model("userHistory",userHistorySchema);
export default userHistoryModel;