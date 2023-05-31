const { Sequelize } = require("sequelize"); //This will be a constructor function
const sequelize = new Sequelize("node-complete", "root", "Gani#270927", {
  dialect: "mysql",
  host: "localhost"
});
module.exports = sequelize;
