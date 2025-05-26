import Bookmark from "../models/bookmarkModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addBookmark = asyncHandler(async (req, res) => {
  const { bookId } = req.body;
  const userId = req.user._id;

  const existingBookmark = await Bookmark.findOne({ user: userId, book: bookId });
  if (existingBookmark) {
    return res.status(400).json(new ApiError("Book already bookmarked", 400));
  }

  const bookmark = await Bookmark.create({ user: userId, book: bookId });
  res.status(201).json(new ApiResponse("Bookmark added", 201, bookmark));
});

const getBookmarks = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const bookmarks = await Bookmark.find({ user: userId }).populate("book");
  res.status(200).json(new ApiResponse("Bookmarks fetched", 200, bookmarks));
});

export { addBookmark, getBookmarks };