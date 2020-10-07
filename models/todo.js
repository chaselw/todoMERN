const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for to do
const toDoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The to do text field is required']
    }
})

// Create model for to do
const toDo = mongoose.model('toDo', toDoSchema);

module.exports = toDo;
