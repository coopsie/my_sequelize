const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

// this is also known as the model/schema 

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not known"
    }}
);

module.exports = Movie;