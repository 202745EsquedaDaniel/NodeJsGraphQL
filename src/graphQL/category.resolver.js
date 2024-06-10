const categoryService = require("../services/category.service")
const service = new categoryService();
const boom = require("@hapi/boom")

const addCategory = async (_, {dto}, context) => {
  const { user } = await context.authenticate("jwt", {session: false})
  if (!user) {
    throw boom.unauthorized("jwt not valid")
  }
  const newCategory = await service.create(dto)
  return newCategory
}

module.exports = { addCategory }
