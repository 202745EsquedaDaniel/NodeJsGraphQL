const ProductsService = require("../services/product.service")
const service = new ProductsService();

const getProduct = (_, { id }) => {
 const product = service.findOne(id)
 return product
}

const getProducts = () => {
  const products = service.find({})
  return products
}

module.exports = { getProduct, getProducts}
