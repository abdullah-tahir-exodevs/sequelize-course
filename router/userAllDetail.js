const express = require("express");
const router = express.Router();
const { UserAllDetail, User, sequelize } = require("../models");
router.post("/create", async (req, res) => {
  try {
    const data = await UserAllDetail.create({
      UserId: 2,
      UserDetailId: 3,
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
router.get("/getall", async (req, res) => {
  try {
    const data = await UserAllDetail.findAll({});
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
