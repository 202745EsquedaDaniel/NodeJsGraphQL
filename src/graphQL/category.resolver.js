const categoryService = require("../services/category.service")
const service = new categoryService();

const addCategory = async(_, {dto}) => {
  const newCategory = await service.create(dto)
  return newCategory
}

module.exports = { addCategory}
