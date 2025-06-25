// const tasks = require("./routes/tasks");
// const { connectDB } = require("./db");
// const cors = require("cors");
// const express = require("express");
// const app = express();

// connectDB();

// app.use(express.json());
// app.use(cors());

// app.get('/ok', (req, res) => {
//     res.status(200).send('ok');
// });

// // 🔁 CHANGED THIS LINE
// app.use("/tasks", tasks);  // Instead of "/api/tasks"

// const port = process.env.PORT || 3500;
// app.listen(port, () => console.log(`Listening on port ${port}...`));


require('dotenv').config(); // Make sure to load environment variables at the very top
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const tasks = require("./routes/tasks");
 
const app = express();
 
// Middleware
app.use(express.json());
app.use(cors());
 
// Routes
app.get('/ok', (req, res) => {
    res.status(200).send('ok');
});
 
app.use("/tasks", tasks);
 
const port = process.env.PORT || 3500;
 
const startServer = async () => {
    try {
        // 1. Connect to the database
        await connectDB();
 
        // 2. Start the express server only after the database is connected
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.error("Failed to start the server.", error);
        process.exit(1);
    }
};
 
// Run the server startup function
startServer();
