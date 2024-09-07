'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Product', 'companyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Company', 
        key: 'id'
      },
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Product', 'companyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Companies', 
        key: 'id'
      },
      allowNull: true,
    });
  }
};
