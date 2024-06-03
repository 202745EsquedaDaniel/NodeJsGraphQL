const { ApolloServer} = require("apollo-server-express")
const { ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
    getInt(age: Int): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getID: ID
  }
`;

//Get = Query
//Post, Delete and Patch = Mutation

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age}`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getBoolean: () => true,
    getID: () => "123"
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
