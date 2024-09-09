const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');
const Company = require('./Company');

User.hasMany(Company, { foreignKey: 'ownerId' });
Company.belongsTo(User, { foreignKey: 'ownerId' });

Company.hasMany(Product, { foreignKey: 'companyId' });
Product.belongsTo(Company, { foreignKey: 'companyId' });

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');

    await User.sync();
    await Company.sync();
    await Product.sync();
    
    console.log('Tables sincronizadas.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

module.exports = { initDB, User, Product, Company };
