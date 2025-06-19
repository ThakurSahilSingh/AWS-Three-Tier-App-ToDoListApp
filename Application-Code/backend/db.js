require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasksdb', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to MySQL (RDS) database.");
        await sequelize.sync(); // Optional: auto-create tables based on models
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};

module.exports = { sequelize, connectDB };
