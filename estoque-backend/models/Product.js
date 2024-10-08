const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Company = require('./Company');

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
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'companies',
      key: 'id'
    },
    allowNull: false
  }
}, {
  tableName: 'products'
}
);

Product.beforeSave((product) => {
  if (product.unityValue && product.quantity) {
    product.totalValue = product.unityValue * product.quantity;
  }
});

module.exports = Product;
