const mongoose = require('mongoose');

// Schema = mongoose.Schema;

const PostSChema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSChema);