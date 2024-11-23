import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { asyncWrapper } from "../utils/asyncWrapper";

const router = Router();

router.get("/", asyncWrapper(getAllProducts));
router.get("/:id", asyncWrapper(getProductById));
router.post("/", asyncWrapper(createProduct));
router.put("/:id", asyncWrapper(updateProduct));
router.delete("/:id", asyncWrapper(deleteProduct));

export default router;
