const express = require("express");
const router = express.Router();
const { UserAllDetail, User, sequelize } = require("../models");
router.post("/create", async (req, res) => {
  try {
    const data = await UserAllDetail.create({
      UserId: 1,
      UserDetailId: 1,
    });
    res.status(200).json({
      message: "The data is posted",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.post("/getall", async (req, res) => {
  try {
    const data = await UserAllDetail.findAll({
      include: [
        {
          model: User,
          as: "UserDetailData",
        },
      ],
    });
    res.status(200).json({
      message: "The data is posted",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
