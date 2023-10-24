"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserAllDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo One-to-one associations
      // hasMany    One-to-many association
      // this.belongsToMany Many-to-Many associations
      // ---->This is only for the one to one relationShip
      // this.belongsTo(models.UserDetail, {
      //   foreignKey: "userId",
      //   as: "UserDetailData",
      // });
      // ---->This is only for the one to one relationShip
      // ---->This is only for the one to Many relationShip
      // this.hasMany(models.UserDetail, {
      //   foreignKey: "userId",
      //   as: "UserDetailData",
      // });
    }
    // ---->This is only for the one to Many relationShip
  }
  UserAllDetail.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
      },
      UserDetailId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "UserAllDetail",
    }
  );
  return UserAllDetail;
};
// module.exports = User;
