const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskCollectionsSchema = new Schema({
    collection_name: {
        type: String,
        required: true,
    },
    collection_tasks: {
        type: Array,
        default: null,
    }
})

module.exports = mongoose.model("collections", taskCollectionsSchema);