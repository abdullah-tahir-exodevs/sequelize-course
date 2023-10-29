const express = require("express");
const router = express.Router();
const { UserDetail, User, sequelize } = require("../models");
const { Op, Sequelize } = require("sequelize");
const userdetail = require("../models/userdetail");
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
router.get("/getall", async (req, res) => {
  try {
    const data = await UserDetail.findAll({
      include: [
        {
          model: User,
          as:"UserId"
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
