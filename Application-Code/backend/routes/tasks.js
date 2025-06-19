const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        await Task.update(req.body, {
            where: { id: req.params.id }
        });
        const updatedTask = await Task.findByPk(req.params.id);
        res.send(updatedTask);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.destroy();
            res.send(task);
        } else {
            res.status(404).send({ message: "Task not found" });
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
