const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');

    await sequelize.sync({ force: false });
    console.log('Tables sincronizadas.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

module.exports = { initDB, User, Product };
