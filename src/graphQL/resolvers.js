const {getProduct, getProducts} = require("./product.resolvers")

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age}`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price ,
    getBoolean: () => true,
    getID: () => "123",
    getNumbers: (_, args) => args.numbers,
    //products
    product: getProduct,
    allProducts: getProducts
  }
}

module.exports = resolvers
