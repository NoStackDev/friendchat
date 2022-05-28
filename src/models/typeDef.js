const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    password: String
    displayName: String
    email: String
    profilePicture: String
    coverPicture: String
    profileDescription: String
    dateOfBirth: String
    country: String
    city: String
    posts: [Post]
    following: [User]
    followers: [User]
    likedPosts: [Post]
    createdAt: String
  }

  type Post {
    id: ID!
    user: User
    body: String
    images: [String]
    replies: [Post]
    replyTo: Post
    repost: Boolean
    likes: Int
    likedBy: [User]
  }

  input userCreationData {
    username: String
    password: String
    displayName: String
    email: String
    profilePicture: String
    coverPicture: String
    profileDescription: String
    dateOfBirth: String
    country: String
    city: String
  }

  input postCreationData {
    userId: ID
    body: String
    images: [String]
    replyTo: ID
    repost: Boolean
  }

  type Query {
    user(id: ID, username: String): User
    users: [User]
    post(id: ID): Post
    posts: [Post]
  }

  type Mutation {
    addUser(data: userCreationData): User
    addPost(data: postCreationData): Post
  }
`;

module.exports = typeDefs;
