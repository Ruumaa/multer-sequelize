const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("movies_mvc", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
