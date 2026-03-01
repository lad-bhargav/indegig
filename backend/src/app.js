import express from "express";
import cors from "cors";
import {config} from "dotenv"
import {connectDb,disConnectDb} from "./config/db.js";

const app = express();

config();
connectDb();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})