const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const config = require("./config");
const typeDefs = require("./models/typeDef");
const resolvers = require("./resolvers/index");

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  try {
    const dbRes = await mongoose.connect(config.DBURI);
    const res = await server.listen({ port: config.PORT });
    if (dbRes) {
      console.log("database connected");
      console.log(`🚀  Server ready at ${res.url}`);
    }
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
