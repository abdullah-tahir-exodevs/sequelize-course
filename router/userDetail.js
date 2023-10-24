const express = require("express");
const router = express.Router();
const { UserDetail, User, sequelize } = require("../models");
const { Op, Sequelize } = require("sequelize");
router.post("/create", async (req, res) => {
  try {
    const data = await UserDetail.create({
      address:
        "House no 53 street no 8 viqar un Nisa School Rajput colony Rawalpindi",
      FatherName: "Tahir Mehmood",
      MotherName: "Kausar ",
      // userId: 1,
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
    const data = await UserDetail.findAll({
      include: [
        {
          model: User,
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
