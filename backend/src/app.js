import 'dotenv/config';
import express from "express";
import cors from "cors";
import {connectDb,disConnectDb} from "./config/db.js";
import router from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDb();

app.use("/products",router);

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disConnectDb();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disConnectDb();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disConnectDb();
    process.exit(0);
  });
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})