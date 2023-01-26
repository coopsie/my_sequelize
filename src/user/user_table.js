const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

// this is the model/schema 

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER
    },
    location: {
        type: DataTypes.STRING,
        defaultValue: "Not known"
    }}
);

module.exports = User;