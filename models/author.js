const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;