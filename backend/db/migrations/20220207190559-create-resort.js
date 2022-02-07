'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resorts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      snowLevel: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      downhillSkiing: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      nordicSkiing: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      snowboarding: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      snowshoeing: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      apresSki: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      resortURL: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      latitude: {
        allowNull: true,
        type: Sequelize.DECIMAL(8, 4)
      },
      longitude: {
        allowNull: true,
        type: Sequelize.DECIMAL(8, 4)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Resorts');
  }
};
