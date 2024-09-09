import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [unityValue, setUnityValue] = useState('');
    const [companyId, setCompanyId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const companyIdNumber = Number(companyId);
        try {
            const response = await axios.post('http://localhost:5000/products/', { name, quantity, description, unityValue, companyId });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Erro ao cadastrar produto');
        }
    };

    return (
        <div>
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do produto*
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome do Produto"
                        required />
                </label>
                <br />
                <label>
                    Quantidade*
                    <input type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="0" placeholder="Quantidade"
                        required />
                </label>
                <br />
                <label>
                    Descrição
                    <textarea
                        placeholder="Descrição do Produto"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"></textarea>
                </label>
                <br />
                <label>
                    Valor Unitário*
                    <input type="number"
                        value={unityValue}
                        onChange={(e) => setUnityValue(e.target.value)}
                        min="0.01"
                        step="0.01"
                        placeholder="Valor por Unidade (R$)"
                        required />
                </label>
                <br />
                <label>
                    Id da empresa*
                    <input type="number"
                        value={companyId}
                        onChange={(e) => setCompanyId(e.target.value)}
                        min="0" placeholder="Id empresa"
                        required />
                </label>
                <br />
                <button type="submit">Cadastrar produto</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AddProduct;
