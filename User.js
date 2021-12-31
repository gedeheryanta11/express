const sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
    "user",
    {
        Username: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING},
    },
    {
        freezeTableNmae: true
    }
);

module.exports = User;