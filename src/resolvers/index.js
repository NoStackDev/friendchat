const getUser = require("./getUser");
const getUsers = require("./getUsers");
const createUser = require("./createUser");
const getPost = require("./getPost");
const getPosts = require("./getPosts");
const createPost = require("./createPost");

const resolvers = {
  Query: {
    user: getUser,
    users: getUsers,
    post: getPost,
    posts: getPosts,
  },

  Mutation: {
    addUser: createUser,
    addPost: createPost,
  },
};

module.exports = resolvers;
