const userModel = require("../models/userModel");

const createUser = async (_, args) => {
  try {
    const user = new userModel(args.data);
    await user.save();
    return user._doc;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createUser;
