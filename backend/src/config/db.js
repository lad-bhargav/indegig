import prisma from "../lib/prisma.js";

const connectDb = async() => {
    try {
        await prisma.$connect();
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}

const disConnectDb = async() => {
    await prisma.$disconnect();
}

export {prisma,connectDb,disConnectDb};