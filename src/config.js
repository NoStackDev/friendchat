require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DBURI: process.env.DBURI || "mongodb://127.0.0.1:27017/nb",
};
