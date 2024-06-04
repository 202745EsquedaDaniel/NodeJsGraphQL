const getProduct = (_, { id }) => {
  return {
    id,
    name: "Product 1",
    price: 123.45,
    description: "This is a product",
    image: "https://via.placeholder.com/150",
    createdAt: new Date().toISOString()
  }
}

const getProducts = () => {
  return [];
}

module.exports = { getProduct, getProducts}
