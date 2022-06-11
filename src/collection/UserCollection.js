const { DataTypes, Sequelize } = require("sequelize");
const db = require("../config/database");

const UserCollection = db.define( "User",
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    }
});

module.exports = UserCollection;