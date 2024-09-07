'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Criação da tabela Users
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    // Criação da tabela Companies
    await queryInterface.createTable('Company', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      history: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      values: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      location: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      services: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      contact: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    // Criação da tabela Products
    await queryInterface.createTable('Product', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: Sequelize.TEXT,
      unityValue: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false
      },
      totalValue: Sequelize.DECIMAL(10, 2),
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Company', 
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverter a criação das tabelas
    await queryInterface.dropTable('Product');
    await queryInterface.dropTable('Company');
    await queryInterface.dropTable('User');
  }
};
