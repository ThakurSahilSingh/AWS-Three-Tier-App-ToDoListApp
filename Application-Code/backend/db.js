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


const { Sequelize } = require('sequelize');
 
// Create a new Sequelize instance.
// It will read the connection details from environment variables.
const sequelize = new Sequelize(
    process.env.DB_NAME,    // The name of the database
    process.env.DB_USER,    // The username for the database
    process.env.DB_PASS,    // The password for the database
    {
        host: process.env.DB_HOST, // The RDS instance endpoint
        dialect: 'mysql',
        logging: false, // Set to console.log to see generated SQL queries
    }
);
 
// Function to test the database connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the RDS MySQL database using Sequelize.');
    } catch (error) {
        // Log the specific error and exit. This is crucial for Kubernetes to restart a faulty pod.
        console.error('Could not connect to the database:', error);
        process.exit(1); // Exit with a failure code
    }
};
 
// Export the test function and the sequelize instance itself
// The instance will be used by your models to define tables and run queries.
module.exports = { connectDB, db: sequelize };
