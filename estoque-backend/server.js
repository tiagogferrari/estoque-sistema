require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDB } = require('./models');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000' // Permitir somente do frontend
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

initDB();
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
