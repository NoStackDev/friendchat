const userModel = require("../models/userModel");

const getUsers = async () => {
  try {
    const users = await userModel.find({});
    const popUsers = users.map(async (user) => {
      return await user.populate("posts");
    });
    return popUsers;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsers;
