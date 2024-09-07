import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produtos em Estoque</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>Quantidade: {product.quantity}</p>
            <p>Valor Unitário: R$ {product.unitValue}</p>
            <p>Valor Total: R$ {product.totalValue}</p>
            <p>Descrição: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
