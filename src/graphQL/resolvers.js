const {getProduct, getProducts , addProduct, updateProduct, deleteProduct, getProductsByCategory} = require("./product.resolvers")
const { login  } = require("./auth.resolver")
const { addCategory, getCategory } = require("./category.resolver")
const { RegularExpression } = require("graphql-scalars")

const CategoryNameType= new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);
//expresion relular para que el nombre de la categoria tenga una longitud de 3 a 8 caracteres


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
    allProducts: getProducts,
    category: getCategory
  },
  Mutation: {
    login,
    addCategory,
    addProduct,
    updateProduct,
    deleteProduct
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
}

module.exports = resolvers
