import express from "express";
import { createProduct, getAllProducts, getProductById, } from "../controllers/productsCon.js";

const router = express.Router();

router.get("/all",getAllProducts);
router.get("/:id",getProductById);
router.post("/create",createProduct);


export default router;