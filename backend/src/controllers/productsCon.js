import prisma from "../lib/prisma";

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.products.findMany();
        if(products.length > 0){
            return res.status(200).json(products);
        }
        return res.status(404).json({ message: "No products found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getAllProducts };