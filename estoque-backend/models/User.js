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
}, {
  tableName: 'users'
});

module.exports = User;
