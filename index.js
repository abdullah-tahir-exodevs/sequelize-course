const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models/index.js");
require("./models/index");
const user = require("./router/user.js");
const userDetail = require("./router/userDetail.js");
const userAllDetail = require("./router/userAllDetail.js");

// User.sync({ force: true });
const PORT = 4041;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", user);
app.use("/userdetail", userDetail);
app.use("/useralldetail", userAllDetail);

app.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log("The server is running on", PORT);
});
