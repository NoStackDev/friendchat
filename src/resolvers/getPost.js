const postModel = require("../models/postModel");

const getPost = async (_, args) => {
  try {
    const post = await postModel.findById(args.id);
    const popPost = await post.populate("user");
    const replyToPopPost = await popPost.populate("replyTo");
    const repliesPopPost = await replyToPopPost.populate("replies");
    const likedByPopPost = await repliesPopPost.populate("likedBy");
    return likedByPopPost;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getPost;
