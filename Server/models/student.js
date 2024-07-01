const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    attendance: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);
