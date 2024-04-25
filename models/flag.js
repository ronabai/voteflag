const mongoose = require('mongoose');

// Bayrak şeması
const flagSchema = new mongoose.Schema({
    country: { type: String, required: true },
    imageUrl: { type: String, required: true },
    voteCount: { type: Number, default: 0 }
});

// Bayrak modeli oluşturma
const Flag = mongoose.model('Flag', flagSchema);

module.exports = Flag;
