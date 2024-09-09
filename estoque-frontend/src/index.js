import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import AddCompany from './pages/AddCompany';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addCompany" element={<AddCompany />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes> 
    </Router>
  </React.StrictMode>
);

// Registro e login ok
// Criação empresa ok

//Testar
//updateCompany
//deleteCompany
//createProduct 
//getProducts
//getProductById
//updateProduct
//deleteProduct
//updateUser
//deleteUser
//getUserCompanies