const express = require("express");
const router = express.Router();
const { User, sequelize, UserDetail } = require("../models");
const { Op, Sequelize, Model } = require("sequelize");
router.post("/create", async (req, res) => {
  try {
    const data = await User.create({
      firstName: "Dr.Kneez fatima",
      lastName: "Tahir",
      email: "tahirabdullah801@gmail.com",
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

router.get("/getuser", async (req, res) => {
  try {
    const resp = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      message: "I get all data",
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.get("/getusercount", async (req, res) => {
  try {
    User.addScope("findName", {
      where: {
        firstName: "Abdullah",
      },
    });
    User.addScope("test", {
      where: {
        firstName: "Abdullah",
      },
    });
    // const resp = await User.count();
    // res.status(200).json({
    //   message: "I get all data",
    //   data: resp,
    // });
    const resp = await User.scope("findName")?.findAll();
    res.status(200).json({
      message: "I get all data",
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.get("/findname/:name", async (req, res) => {
  try {
    console.log(req?.params?.name);

    const resp = await User.findOne({
      // where: {
      //   firstName: {
      //     [Op.eq]: req.params.name,
      //   },
      // },
    });
    res.status(200).json({
      message: "the provided name is",
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.get("/gettwocol", async (req, res) => {
  try {
    const resp = await User.findAll({
      attributes: {
        exclude: ["lastName"],
        include: [[Sequelize.fn("COUNT", Sequelize.col("firstName")), "count"]],
      },

      // attributes: [
      // ],
    });
    res.status(200).json({
      message: "fetch only two colums",
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.get("/virtualcolumn", async (req, res) => {
  try {
    const resp = await User.findAll();
    res.status(200).json({
      message: "fetch only two colums",
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
router.post("/setterexample", async (req, res) => {
  try {
    const resp = await User.create({
      firstName: "Abdullah",
      lastName: "Abdullah",
      email: "Abdullah@gmail.com",
    });
    res.status(200).json({
      message: "fetch only two colums",
      data: resp,
    });
  } catch (error) {
    // error?.errors.forEach((element) => {
    //   switch (element?.validatorKey) {
    //     case "isAlpha":
    //       res.status(400).json({
    //         message: "Only alpha characters required",
    //       });
    //       break;
    //   }
    // });
    res.status(400).json({
      message: error,
    });
  }
});
router.get("/populatethetable", async (req, res) => {
  try {
    const resp = await User.findAll({
      include: [
        {
          model: UserDetail,
          as: "UserDetailId",
        },
      ],
    });
    res.status(200).json({
      message: "fetch only two colums",
      data: resp,
    });
  } catch (error) {
    // error?.errors.forEach((element) => {
    //   switch (element?.validatorKey) {
    //     case "isAlpha":
    //       res.status(400).json({
    //         message: "Only alpha characters required",
    //       });
    //       break;
    //   }
    // });
    res.status(400).json({
      message: error,
    });
  }
});
module.exports = router;
