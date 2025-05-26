import Books from "../models/booksModel.js";
import UserHistory from "../models/userHistoryModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getRecommendations = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const history = await UserHistory.find({ user: userId }).populate("book");
    const genres = [...new Set(history.map((h) => h.book.genre))];
    const authors = [...new Set(history.map((h) => h.book.authors_name))];

    const recommendations = await Books.find({
      $or: [{ genre: { $in: genres } }, { authors_name: { $in: authors } }],
    })
      .limit(10)
      .populate("genre")
      .populate("publisher");

    res
      .status(200)
      .json(new ApiResponse("Recommendations fetched", 200, recommendations));
  } catch (error) {
    res
      .status(500)
      .json(new ApiError("Internal server error", 500, error.message));
  }
});

export { getRecommendations };
