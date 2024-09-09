'use strict';

/** @type {import('sequelize-cli').Migration} */
//a
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'companyId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'companyId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'companies',
        key: 'id'
      }
    });
  }
};
