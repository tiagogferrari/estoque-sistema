'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.addColumn('products', 'unityValue', {
      type: Sequelize.DECIMAL,
      allowNull: false
    });
    await queryInterface.addColumn('products', 'totalValue', {
      type: Sequelize.DECIMAL,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'unityValue');
    await queryInterface.removeColumn('products', 'totalValue');
    await queryInterface.removeColumn('products', 'description');
    // Remova mais colunas conforme necessário
  }
};
