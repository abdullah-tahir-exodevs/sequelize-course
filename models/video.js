"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    static associate(models) {
      this.belongsToMany(models.Tag, {
        through: {
          model: models.tag_tagable,
          unique: false,
          scope: {
            tagableType: "video",
          },
        },
        foreignKey: "tagableId",
        constraints: false,
      });
    }
  }
  video.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "video",
    }
  );
  return video;
};
