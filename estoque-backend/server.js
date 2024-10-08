require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { initDB } = require('./models');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const companyRoutes = require('./routes/company');
const userRoutes = require('./routes/user')

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/company', companyRoutes)
app.use('/user', userRoutes);

initDB();
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
