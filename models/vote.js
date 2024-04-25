const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
        unique: true
    },
    lastVoteTime: {
        type: Date,
        default: Date.now
    }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
