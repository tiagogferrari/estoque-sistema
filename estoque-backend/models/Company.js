const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    values: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    services: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    contact: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ownerId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'companies'
}
);

module.exports = Company;
