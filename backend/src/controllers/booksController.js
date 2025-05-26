import Books from "../models/booksModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadToS3, getPresignedUrl } from "../utils/S3Utils.js";

const createBook = asyncHandler(async (req, res) => {
  const {
    title,
    authors_name,
    Description,
    genre,
    language,
    publisher,
    isbn,
    published_on,
    pageCount,
  } = req.fields;
  const { image, pdf } = req.files; // Assuming formidable handles file uploads

  const bookExists = await Books.find({ title });
  if (bookExists.length > 0) {
    return res.status(400).json(new ApiError("Book already exists", 400));
  }

  // Upload cover image to S3
  const imageKey = `book-covers/${Date.now()}-${image.name}`;
  const imageUpload = await uploadToS3(image.data, imageKey, image.type);

  // Upload PDF to S3
  const pdfKey = `book-pdfs/${Date.now()}-${pdf.name}`;
  const pdfUpload = await uploadToS3(pdf.data, pdfKey, "application/pdf");

  const book = await Books.create({
    image: imageUpload.Location,
    title,
    authors_name,
    Description,
    genre,
    language,
    publisher,
    isbn,
    published_on,
    pageCount,
    pdf: pdfUpload.Location,
  });

  try {
    await book.save();
    res
      .status(201)
      .json(new ApiResponse("Book created successfully", 201, book));
  } catch (error) {
    res.status(500).json(new ApiError("Internal Server Error", 500));
  }
});

const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Books.find({})
    .populate("genre")
    .populate("publisher")
    .populate("reviews.user")
    .sort({ createdAt: -1 });
  if (!books || books.length === 0) {
    return res.status(404).json(new ApiError("Books not found", 404));
  }
  res
    .status(200)
    .json(new ApiResponse("Books fetched successfully", 200, books));
});

const getBookById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id)
    .populate("genre")
    .populate("publisher")
    .populate("reviews.user");
  if (!book) {
    return res.status(404).json(new ApiError("Book not found", 404));
  }
  res.status(200).json(new ApiResponse("Book fetched successfully", 200, book));
});

const getBooksByGenre = asyncHandler(async (req, res) => {
  const { genre } = req.params;
  const books = await Books.find({ genre })
    .populate("genre")
    .populate("publisher")
    .populate("reviews.user");
  if (!books || books.length === 0) {
    return res.status(404).json(new ApiError("Books not found", 404));
  }
  res
    .status(200)
    .json(new ApiResponse("Books fetched successfully", 200, books));
});

const getBooksByPublisher = asyncHandler(async (req, res) => {
  const { publisher } = req.params;
  const books = await Books.find({ publisher })
    .populate("genre")
    .populate("publisher")
    .populate("reviews.user");
  if (!books || books.length === 0) {
    return res.status(404).json(new ApiError("Books not found", 404));
  }
  res
    .status(200)
    .json(new ApiResponse("Books fetched successfully", 200, books));
});

const downloadBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);
  if (!book) {
    return res.status(404).json(new ApiError("Book not found", 404));
  }

  const pdfKey = book.pdf.split("/").slice(-2).join("/"); // Extract key from URL
  const presignedUrl = await getPresignedUrl(pdfKey, "getObject");

  res
    .status(200)
    .json(
      new ApiResponse("Download URL generated", 200, { url: presignedUrl }),
    );
});

export {
  createBook,
  getAllBooks,
  getBookById,
  getBooksByGenre,
  getBooksByPublisher,
  downloadBook,
};
