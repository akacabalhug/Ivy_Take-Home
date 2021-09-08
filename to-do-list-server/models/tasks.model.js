const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task_name: {
        type: String,
        required: true,
    },
    task_status: {
        type: Boolean,
        default: false,
    },
    task_creationDate: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model("Task", taskSchema);