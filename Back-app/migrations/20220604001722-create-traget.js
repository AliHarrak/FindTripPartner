'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tragets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileName: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING
      },
      villeDep: {
        type: Sequelize.STRING
      },
      villeArr: {
        type: Sequelize.STRING
      },
      dateDep: {
        type: Sequelize.STRING
      },
      dateArr: {
        type: Sequelize.STRING
      },
      nbrPers: {
        type: Sequelize.INTEGER
      },
      sexe: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      idProfile: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tragets');
  }
};