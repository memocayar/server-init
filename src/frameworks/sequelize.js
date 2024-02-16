const { Sequelize } = require("sequelize");

require("sequelize");
require("dotenv/config");

const db = process.env.DB;
const user = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST

console.log("ENV DB: " + db + " USER: " + user + " PSW: " + password + " HOST: " + host);

const sequelize = new Sequelize(db, user, password, {
  define: {
    // don't ask for createdAt, updatedAt
    timestamps: false,
    // prevents pluralization of table names
    freezeTableName: true,
  },
  host: host, 
  dialect: "mysql",
});

module.exports = sequelize;