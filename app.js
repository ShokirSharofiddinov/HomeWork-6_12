const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const mainRounter = require("./routes/index.routes");

const PORT = config.get("port") || 3030;

const app = express();

app.use(express.json());

app.use(mainRounter);

async function start() {
  try {
    await mongoose.connect(config.get("atlasUri"));
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-porda ishga tushdi`);
    });
  } catch (error) {
    console.log("Serverda hatolik", error);
  }
}

start();
