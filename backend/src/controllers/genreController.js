import Genre from "../models/genreModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createGenre = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const existingGenre = await Genre.findOne({ name });
  if (existingGenre)
    return res.status(400).json(new ApiError("Genre already exists", 400));
  const newGenre = new Genre({
    name,
    
  });

  try {
    await newGenre.save();

    res
      .status(201)
      .json(new ApiResponse("Genre created successfully", 201, newGenre));
  } catch (error) {
    res.status(500).json(new ApiError("Internal server error", 500));
  }
});


const getAllGenres = asyncHandler(async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const genres = await Genre.find({}).sort({ createdAt: -1 });
  if (!genres || genres.length === 0)
    return res.status(404).json(new ApiError("Genres not found", 404));
  res
    .status(200)
    .json(new ApiResponse("Genres fetched successfully", 200, genres));
});
const updateGenre= asyncHandler(async (req, res) => {
  
  const { name,id  } = req.body;
  const genre = await Genre.findById(id);
  if (!genre) return res.status(404).json(new ApiError("Genre not found", 404));
  genre.name = name || genre.name;

  await genre.save();
  res.status(200).json(new ApiResponse("Genre updated successfully", 200, genre));
});
const deleteGenre= asyncHandler(async (req, res) => {
  const { id } = req.body;
  const genre = await Genre.findById(id);
  if (!genre) return res.status(404).json(new ApiError("Genre not found", 404));
  await genre.remove();
  res.status(200).json(new ApiResponse("Genre deleted successfully", 200, genre));
});
const getGenreById= asyncHandler(async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findById(id);
  if (!genre) return res.status(404).json(new ApiError("Genre not found", 404));
  res.status(200).json(new ApiResponse("Genre fetched successfully", 200, genre));
});
export {
    createGenre,getAllGenres,updateGenre,deleteGenre,getGenreById
}