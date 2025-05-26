import { Router } from "express";
import {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from "../controllers/publisherControllers.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";


const router = Router();

router
  .route("/")
  .get(authenticate,getPublishers)
  .post(authenticate, authorizeAdmin, createPublisher);
router
  .route("/:id")
  .get(authenticate,getPublisherById)
  .put(authenticate, authorizeAdmin, updatePublisher)
  .delete(authenticate, authorizeAdmin, deletePublisher);

export default router;
