const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  unitValue: {
    type: DataTypes.DECIMAL(10, 2), // 10 dígitos no total, (2 após o ponto decimal)
    allowNull: false
  },
  totalValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
});

Product.beforeSave((product) => {
  if (product.valorUnidade && product.quantidade) {
    product.valorTotal = product.valorUnidade * product.quantidade;
  }
});

module.exports = Product;
