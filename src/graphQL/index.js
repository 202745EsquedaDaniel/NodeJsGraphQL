const { ApolloServer} = require("apollo-server-express")
const { ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getID: ID
    getNumbers(numbers: [Int!]!): [Int]
    getProduct: Product
  }

  type Product {
    id: ID!,
    name: String!,
    price: Float!,
    description: String!,
    image: String!,
    createdAt: String!
  }
`;

// El agregar el signo de exclamación al final de cada tipo de dato significa que no pueede ser nulo
//Get = Query
//Post, Delete and Patch = Mutation

//Lists
// [String] = List of strings
// [Int] = List of integers

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
