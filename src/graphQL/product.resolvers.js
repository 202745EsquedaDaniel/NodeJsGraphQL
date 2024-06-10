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

const addProduct = async(_, { dto}) => {
  const newProduct = await service.create(dto)
  return newProduct
}

const updateProduct = async(_, {id, dto}) => {
  const updatedProduct = await service.update(id, dto)
  return updatedProduct
}

const deleteProduct = async(_, { id }) => {
  await service.delete(id, dto)
  return id
}

const getProductsByCategory = (_) => {
  const id = _.dataValues.id
  return service.getByCategory(id)
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory}
