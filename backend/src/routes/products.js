import express from "express";
import { getAllProducts, getProductById, } from "../controllers/productsCon.js";

const router = express.Router();

router.get("/all",getAllProducts);
router.get("/:id",getProductById);


export default router;