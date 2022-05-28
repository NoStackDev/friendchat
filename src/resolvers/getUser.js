const userModel = require("../models/userModel");

const getUser = async (_, args) => {
  try {
    if (args.username) {
      const user = await userModel.findOne({ username: args.username });
      const popUser = await user.populate("posts");
      return popUser;
    }

    if (args.id) {
      const user = await userModel.findById(args.id);
      const popUser = await user.populate("posts");
      return popUser;
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUser;
