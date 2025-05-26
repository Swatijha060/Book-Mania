import { Router } from "express"
import { createGenre,getAllGenres,updateGenre,deleteGenre,getGenreById } from "../controllers/genreController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddlewares.js";
const router= Router();

router.route("/create").post(authenticate,authorizeAdmin,createGenre);
router.route("/").get(authenticate,getAllGenres);
router.route("/update").put(authenticate,authorizeAdmin,updateGenre)
router.route("/delete").delete(authenticate,authorizeAdmin,deleteGenre)
router.route("/:id").get(authenticate,authorizeAdmin,getGenreById);

export default router;