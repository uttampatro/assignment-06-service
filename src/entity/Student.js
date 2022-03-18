const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    age: {
        type: Number,
        required: true,
        unique: true,
        min: 5,
    },
    school: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    std: {
        type: Number,
        required: true,
        max: 255,
        min: 3,
    },
    division: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    status: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('student', studentSchema);
