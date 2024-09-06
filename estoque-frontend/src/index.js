import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
