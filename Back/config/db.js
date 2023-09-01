const mongoose = require("mongoose");
const config = require("config");
const df = require("./default.json");
const db = df.mongoURI;

const connectDB = async () => {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
    },
    (err) => {
      if (err) console.log(err);
      else {
        console.log("Connected To DB");
      }
    }
  );
};

module.exports = connectDB;
