const {getProduct, getProducts , addProduct, updateProduct, deleteProduct} = require("./product.resolvers")
const { login  } = require("./auth.resolver")

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
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers
