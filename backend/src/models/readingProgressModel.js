import mongoose, { Schema } from "mongoose";

const readingProgressSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const ReadingProgress = mongoose.model(
  "ReadingProgress",
  readingProgressSchema,
);
export default ReadingProgress;
