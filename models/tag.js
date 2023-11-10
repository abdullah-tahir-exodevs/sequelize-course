"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Image, {
        through: {
          model: models.tag_tagable,
          unique: false,
        },
        foreignKey: "tagId",
        constraints: false,
      });
      this.belongsToMany(models.video, {
        through: {
          model: models.tag_tagable,
          unique: false,
        },
        foreignKey: "tagId",
        constraints: false,
      });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
