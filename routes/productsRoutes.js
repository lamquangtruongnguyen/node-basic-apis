import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  removeProduct,
  updateProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", removeProduct);

export default router;
