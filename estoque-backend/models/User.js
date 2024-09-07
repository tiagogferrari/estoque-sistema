const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Company = require('./Company');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Company, { foreignKey: 'ownerId' });
Company.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = User;
