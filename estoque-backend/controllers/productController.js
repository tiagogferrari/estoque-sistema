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

const getProductsByCompany = async (req, res) => {
    const { companyId } = req.params;

    try {
        const company = await Company.findByPk(companyId);
        if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });

        const products = await Product.findAll({ where: { companyId: companyId } });
        console.log('Products:', products);
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
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
    const { name, quantity, description, unityValue, companyId } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

        product.name = name !== undefined ? name : product.name;
        product.quantity = quantity !== undefined ? quantity : product.quantity;
        product.description = description !== undefined ? description : product.description;
        product.unityValue = unityValue !== undefined ? unityValue : product.unityValue;
        product.companyId = companyId !== undefined ? companyId : product.companyId;

        await product.save();
        res.status(200).json({ message: 'Produto atualizado com sucesso', product });
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
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
    getProductsByCompany,
    getProductById,
    updateProduct,
    deleteProduct
};

