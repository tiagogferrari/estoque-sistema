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
  unityValue: {
    type: DataTypes.DECIMAL(10, 2), // 10 dígitos no total, (2 após o ponto decimal)
    allowNull: false
  },
  totalValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
});

Product.beforeSave((product) => {
  if (product.unityValue && product.quantity) {
    product.totalValue = product.unityValue * product.quantity;
  }
});

module.exports = Product;

//enviei o migration como unityValue e aqui estava unitValue (se der b.o, pode ser isso)