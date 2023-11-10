"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag_tagable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tag_tagable.init(
    {
      tagId: {
        type: DataTypes.INTEGER,
        unique: "tt_unique_constraint",
      },
      tagableId: {
        type: DataTypes.INTEGER,
        unique: "tt_unique_constraint",
        references: null,
      },
      tagableType: {
        type: DataTypes.STRING,
        unique: "tt_unique_constraint",
      },
      // videoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tag_tagable",
    }
  );
  return tag_tagable;
};
