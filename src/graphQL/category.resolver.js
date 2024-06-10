const categoryService = require("../services/category.service")
const service = new categoryService();

const checkRolesGql = require("../utils/checkRolesGql")
const checkJwtGql = require("../utils/checkJwtGql")

const addCategory = async (_, {dto}, context) => {
  const user = await checkJwtGql(context)
  checkRolesGql(user, "customer", "admin")
  const newCategory = await service.create({...dto, image:dto.image.href})
  return newCategory
}

module.exports = { addCategory }
