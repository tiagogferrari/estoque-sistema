const { Product, Company } = require('../models');

const createProduct = async (req, res) => {
    const { name, quantity, description, unityValue, companyId } = req.body;

    try {
        const company = await Company.findByPk(companyId);
        if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
        const product = await Product.create({ name, quantity, description, unityValue, companyId });
        res.status(201).json({ message: 'Produto cadastrado!', product });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, quantity, description, unityValue } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!Product) return res.status(404).json({ error: 'Produto não encontrado' });

        product.name = name || product.name
        product.price = price || product.price;
        product.description = description || product.description;

        await product.save();
        res.status(200).json({ message: 'Produto atualizado com sucesso', product });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

        await product.destroy();
        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir produto' });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};

