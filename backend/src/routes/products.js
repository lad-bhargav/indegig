import express from "express";
import { createProduct, deleteProduct, editProduct, getAllProducts, getProductById, getProductsBySellerId, } from "../controllers/productsCon.js";

const router = express.Router();

router.get("/all",getAllProducts);
router.get("/:id",getProductById);
router.post("/create",createProduct);
router.get("/seller/:sellerId",getProductsBySellerId);
router.post("/delete/:id",deleteProduct);
router.put("/edit/:id",editProduct);


export default router;