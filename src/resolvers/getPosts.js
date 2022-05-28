const postModel = require("../models/postModel");

const getPosts = async () => {
  try {
    const posts = await postModel.find({});
    const popPosts = posts.map(async (post) => {
      return await post.populate("user");
    });
    return popPosts;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getPosts;
