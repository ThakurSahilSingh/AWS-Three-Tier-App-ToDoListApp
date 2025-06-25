// require('dotenv').config();
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('tasksdb', process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     logging: false
// });

// const connectDB = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("Connected to MySQL (RDS) database.");
//         await sequelize.sync(); // Optional: auto-create tables based on models
//     } catch (error) {
//         console.log("Could not connect to database.", error);
//     }
// };

// module.exports = { sequelize, connectDB };


const mysql = require("mysql2");
 
// Create a connection pool. This is more efficient and robust for web applications.

const pool = mysql.createPool({

    host: process.env.DB_HOST,       // Your RDS instance endpoint

    user: process.env.DB_USER,       // Your RDS master username

    password: process.env.DB_PASS,   // Your RDS master password

    database: process.env.DB_NAME,   // The name of the database to use

    waitForConnections: true,

    connectionLimit: 10, // Default is 10, adjust as needed

    queueLimit: 0

});
 
// We export a promise-based version of the pool for use with async/await

const promisePool = pool.promise();
 
// Function to test the connection

const connectDB = async () => {

    try {

        // Get a connection from the pool to test it

        const connection = await promisePool.getConnection();

        console.log("Successfully connected to the RDS MySQL database.");

        // Release the connection back to the pool

        connection.release();

    } catch (error) {

        console.error("Could not connect to the database.", error);

        // Exit the process with failure if the database connection fails

        process.exit(1);

    }

};
 
// Export the connection test function and the pool itself

module.exports = { connectDB, db: promisePool };
 
