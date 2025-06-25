const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Task = sequelize.define('Task', {
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'tasks',
    timestamps: false
});

module.exports = Task;
