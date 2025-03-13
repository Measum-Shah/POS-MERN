import express from "express";
import { getItemController,addItemController } from "../controllers/itemController.js";

const router = express.Router();

// Define routes
router.get("/get-items", getItemController);
router.post("/add-items", addItemController)
// Export the router correctly
export default router;