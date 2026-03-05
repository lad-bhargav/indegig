import express from "express";
import { getAllProducts } from "../controllers/productsCon";

const router = express.Router();

router.get("/all",getAllProducts)

export default router;