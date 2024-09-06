import { Product } from "../models";

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    try {
        const product = await Product.create(name, quantity);
        res.status(201).json({ message: 'Produto cadastrado!', product });
    } catch {
        res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
}

const getProducts = async (req, res) => {

}

const getProductById = async (req, res) => {

}

const updateProduct = async (req, res) => {

}

const deleteProduct = async (req, res) => {

}



