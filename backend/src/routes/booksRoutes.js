import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  getBooksByGenre,
  getBooksByPublisher,
  downloadBook,
} from "../controllers/booksController.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";
import formidable from "express-formidable";
import { getRecommendations } from "../controllers/recommendationController.js";
import { updateReadingProgress } from "../controllers/readingProgressController.js";
import { addBookmark, getBookmarks } from "../controllers/bookmarkControllers.js";

const router = Router();

//Public routes

router.route("/:id").get(authenticate, getBookById);
router.route("/genre/:genre").get(authenticate, getBooksByGenre);
router.route("/publisher/:publisher").get(authenticate, getBooksByPublisher);
router.route("/search").get(authenticate, getBooksByGenre);
router.route("/download/:id").get(authenticate, downloadBook);

//Different suggestions and progress tracker for different users.
router.route("/recommendations").get(authenticate, getRecommendations);
router.route("/reading-progress").post(authenticate, updateReadingProgress);
router.route("/bookmark").post(authenticate,addBookmark).get(authenticate, getBookmarks);//Bookmark routes
//Admin routes
router
  .route("/create")
  .post(authenticate, authorizeAdmin, formidable(), createBook);
router.route("/").get(authenticate, authorizeAdmin, getAllBooks);

export default router;
