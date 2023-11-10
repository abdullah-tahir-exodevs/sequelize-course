const express = require("express");
const router = express.Router();
const {
  User,
  sequelize,
  UserDetail,
  Image,
  video,
  tag_tagable,
  Tag,
} = require("../models");
const { Op, Sequelize, Model } = require("sequelize");
router.post("/create", async (req, res) => {
  try {
    const image = await Image.create({
      title: "this is from Image",
      url: "this is from the Image Url",
    });
    const videoData = await video.create({
      title: "this is from Video2",
      text: "this is from the Image Url",
    });
    if (image && image.id) {
      const tagData = await Tag.create({
        name: "tag on the Image",
      });

      if (tagData && tagData?.id) {
        await tag_tagable.create({
          tagId: tagData?.id,
          tagableId: image?.id,
          tagableType: "image",
        });
      }
    }
    if (videoData && videoData.id) {
      const tagableData = await Tag.bulkCreate([
        {
          name: "tag1",
        },
        {
          name: "tag2",
        },
        {
          name: "tag3",
        },
        {
          name: "tag4",
        },
        {
          name: "tag5",
        },
        {
          name: "tag6",
        },
        {
          name: "tag7",
        },
      ]);
      if (tagableData.length > 0) {
        for (let i = 0; i < tagableData.length; i++) {
          await tag_tagable.create({
            tagId: tagableData[i]?.id,
            tagableId: videoData?.id,
            tagableType: "video",
          });
        }
      }
    }
    res.status(200).json({
      message: "The data is posted",
      //   data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const resp = await Tag.findAll({
      include: [Image, video],
      // include: [Tag],
    });
    res.status(200).json({
      data: resp,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
module.exports = router;
