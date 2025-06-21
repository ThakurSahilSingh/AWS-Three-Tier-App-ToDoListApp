const tasks = require("./routes/tasks");
const { connectDB } = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get('/ok', (req, res) => {
    res.status(200).send('ok');
});

// 🔁 CHANGED THIS LINE
app.use("/tasks", tasks);  // Instead of "/api/tasks"

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
