const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/routes/index");
const cors = require("cors");
const { PORT, DB_CONNECTION } = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

const loadApp = () => {
  try {
    mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log("app is listening on port ", PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

loadApp();
