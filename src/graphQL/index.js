const { ApolloServer} = require("apollo-server-express")
const { ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")
const { loadFiles} = require("@graphql-tools/load-files") //instalar graphql-tools con npm install @graphql-tools/load-files



const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age}`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price ,
    getBoolean: () => true,
    getID: () => "123",
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: "123",
        name: "Product 1",
        price: 123.45,
        description: "This is a product",
        image: "https://via.placeholder.com/150",
        createdAt: new Date().toISOString()
      }

    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./src/**/*.graphql"),
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
