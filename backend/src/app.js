import express from "express";
import cors from "cors";
import {config} from "dotenv"
import {connectDb,disConnectDb} from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

config();
connectDb();

app.use("/products",)

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

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})