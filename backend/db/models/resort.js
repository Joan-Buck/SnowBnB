'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resort = sequelize.define('Resort', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    snowLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    downhillSkiing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nordicSkiing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    snowboarding: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    snowshoeing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    apresSki: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    resortURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Resort.associate = function (models) {
    // associations can be defined here
    Resort.hasMany(models.ResortImage, { foreignKey: 'resortId' })
  };
  return Resort;
};
