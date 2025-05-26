import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const booksSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    authors_name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    published_on: {
      type: Date,
      required: true,
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher",
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    ratings: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    pageCount: {
      type: Number,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },
    pdf: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Books = new mongoose.model("Books", booksSchema);
export default Books;
