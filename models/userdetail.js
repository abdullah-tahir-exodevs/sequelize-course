"use strict";
const { Model } = require("sequelize");
// const { User } = require("../models");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.User, {
      //   foreignKey: "userId",
      //   as: "UserDetailData",
      // });
      this.belongsToMany(models.User, {
        through: models.UserAllDetail,
       as: "UserId",
      });
      // this.hasMany(models.User, {
      //   foreignKey: "userId",
      //   as: "userDetailwork",
      // });
    }
  }
  UserDetail.init(
    {
      address: DataTypes.STRING,
      FatherName: DataTypes.STRING,
      MotherName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
