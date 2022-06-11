/* import "dotenv/config";
import mysql from "mysql2";

let connect = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: "",
    databse: process.env.MYSQL_DATABASE
})

connect.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected!")
});

module.exports = connect; */

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        port: process.env.MYSQL_PORT,
    }
);

module.exports = sequelize;