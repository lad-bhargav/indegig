import prisma from "../lib/prisma.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.products.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });
        return res.json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await prisma.products.findUnique({
            where:{ id }
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const editProduct= async (req, res) => {
    try {
        const {id} = req.params;

        const upProduct = await prisma.products.update({
            where:{id},
            data:{...req.body}
        })

        if (!upProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(upProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const deltProduct = await prisma.products.delete({
            where:{id}
        })
        return res.json(deltProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const createProduct = async (req, res) => {
    try {
        const {title,description,price,sellerId,img,deliveringTime} = req.body;
        
        if(!title || !description || !price || !sellerId || !img || !deliveringTime){
            return res.status(400).json({ message: "All fields are required" });
        }

        const data = await prisma.products.create({
            data: {
                title,
                description,
                price,
                sellerId,
                img,
                deliveringTime
            }
        });
        
        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getProductsBySellerId = async (req, res) => {
    try {
        const { sellerId } = req.params;
        const products = await prisma.products.findMany({
            where: {
                sellerId: sellerId
            }
        });
        return res.json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getAllProducts,getProductById,editProduct,createProduct,getProductsBySellerId,deleteProduct };