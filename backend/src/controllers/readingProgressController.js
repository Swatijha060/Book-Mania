import ReadingProgress from "../models/readingProgressModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const updateReadingProgress = asyncHandler(async (req, res) => {
  try {
    const { bookId, currentPage } = req.body;
    const userId = req.user._id;
  
    let progress = await ReadingProgress.findOne({ user: userId, book: bookId });
    if (!progress) {
      progress = await ReadingProgress.create({
        user: userId,
        book: bookId,
        currentPage,
      });
    } else {
      progress.currentPage = currentPage;
      progress.completed = currentPage >= (await Books.findById(bookId)).pageCount;
      await progress.save();
    }
  
    res.status(200).json(new ApiResponse("Progress updated", 200, progress));
  } catch (error) {
    res.status(500).json(new ApiError("Internal server error", 500, error.message));
    
  }
});

export { updateReadingProgress };