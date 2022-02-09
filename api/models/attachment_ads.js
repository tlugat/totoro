'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment_ads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Attachment_ads.belongsTo(models.Ads, { foreignKey: 'ads_id' });
    }
  }
  Attachment_ads.init({
    original_name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attachment_ads',
  });
  return Attachment_ads;
};