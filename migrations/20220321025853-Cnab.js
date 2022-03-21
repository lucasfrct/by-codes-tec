'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('cnabs', { 
      id: Sequelize.INTEGER,
      date: Sequelize.DATE,
      type: Sequelize.DataTypes.STRING,
      value: Sequelize.DataTypes.STRING,
      cpf: Sequelize.DataTypes.STRING(11),
      card: Sequelize.DataTypes.STRING,
      hour: Sequelize.DataTypes.STRING,
      owner: Sequelize.DataTypes.STRING(100),
      company: Sequelize.DataTypes.STRING(100),
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cnabs');
  }
};
