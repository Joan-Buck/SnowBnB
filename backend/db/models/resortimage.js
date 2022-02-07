'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResortImage = sequelize.define('ResortImage', {
    resortId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  ResortImage.associate = function(models) {
    // associations can be defined here
    ResortImage.belongsTo(models.Resort, { foreignKey: 'resortId' })
  };
  return ResortImage;
};
