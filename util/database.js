const Sequelize = require("sequelize")

const sequelize = new Sequelize("node-complete", "root", "mohamedsalem", {
  dialect: "mysql",
  host: "localhost",
})

module.exports = sequelize
