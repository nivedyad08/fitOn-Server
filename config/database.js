require("dotenv").config();

const connectDb = () => {
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URL);
};

module.exports = {
  connectDb,
};
