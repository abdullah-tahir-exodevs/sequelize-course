"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo One-to-one associations
      // hasMany    One-to-many association
      // belongsToMany Many-to-Many associations
      // ---->This is only for the one to one relationShip
      this.belongsTo(models.UserDetail, {
        foreignKey: "userId",
        as: "UserDetailData",
      });
      // ---->This is only for the one to one relationShip
      // ---->This is only for the one to Many relationShip
      // this.hasMany(models.UserDetail, {
      //   foreignKey: "userId",
      //   as: "UserDetailData",
      // });
      // this.belongsToMany(models.UserDetail, {
      //   through: models.UserAllDetail,
      //   // foreignKey: "userId",
      //   // targetKey: "id",
      // });
    }
    // ---->This is only for the one to Many relationShip
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        // set(value) {
        //   this.setDataValue("firstName", value + " Hi,I am pakistani");
        // },

        // get() {
        //   const firstvalue = this.getDataValue("firstName");
        //   return firstvalue.toUpperCase();
        // },
        // allowNull: false,
        // unique: true,
        validate: {
          isAlpha: {
            msg: "Required only alpha characters",
          },
        },
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        //you cannot set the value in the virtual DataTypes
      },
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        // unique: true,
        // validate: {
        //   isEmail: {
        //     msg: "Must be a valid email address",
        //   },

        // },
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
// module.exports = User;
