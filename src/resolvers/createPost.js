const postModel = require("../models/postModel");
const userModel = require("../models/userModel");

const createPost = async (_, args) => {
  try {
    const { userId } = args.data;
    const user = await userModel.findById(userId);
    if (!user) {
      return { body: "user does not exist" };
    }
    let post = new postModel(args.data);
    user.posts.push(post);
    post.user = user;
    await post.save();
    await user.save();
    return post;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPost;
