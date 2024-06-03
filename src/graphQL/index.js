const { ApolloServer} = require("apollo-server-express")
const { ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
  }
`;

//Get = Query
//Post, Delete and Patch = Mutation

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age}`
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins : [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })
  await server.start();
  server.applyMiddleware({ app })
}

module.exports =  useGraphql
