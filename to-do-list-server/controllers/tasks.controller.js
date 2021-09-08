const Task = require("../models/tasks.model");

const tasksController = {
    addTask: async (req, res) => {
        try {
            const time = new Date().getTime();
            
            let payload = {
                ...req.body.data,
                task_creationDate: time
            }

            const task = await new Task(payload).save();

            res.status(200).json({task})
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error in adding task",
                origin: "tasksController - addTask"
            })
        }
    },
    getTasks: async (req, res) => {
        if(req.query.status === 'complete'){
            try {
                const tasks = await Task.find({task_status: true}).sort({task_creationDate: 'desc'});
                console.log(tasks);
                res.status(200).json({tasks})
            } catch (error) {
                res.status(500).json({
                    message: "Error in getting tasks",
                    origin: "tasksController - getTasks"
                })
            }
        }
        else {
            try {
                const tasks = await Task.find().sort({task_creationDate: 'desc'});
                res.status(200).json({tasks})
            } catch (error) {
                res.status(500).json({
                    message: "Error in getting tasks",
                    origin: "tasksController - getTasks"
                })
            }
        }
    },
    editTask: async (req, res) => {
        try {
            console.log(req.params.id)
            const task = await Task.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.status(200).json({task});
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error in editting task",
                origin: "tasksController - editTask"
            })
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params.id);
            
            res.status(200).json({task});
        } catch (error) {
            res.status(500).json({
                message: "Error in deleting task",
                origin: "tasksController - deleteTask"
            })
        }
    }
}

module.exports = tasksController;