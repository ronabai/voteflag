    const express = require('express');
    const router = express.Router();
    const Flag = require('../models/flag');
    const Vote = require('../models/vote'); // Oy modelinin yüklenmesi

    // Tüm bayrakları getiren endpoint
    router.get('/flags', async (req, res) => {
        try {
            const flags = await Flag.find();
            res.json(flags);
        } catch (err) {
            console.error("Bayraklar alınırken hata:", err);
            res.status(500).json({ error: 'Bayraklar alınırken bir hata oluştu.' });
        }
    });

    // Son oy verme zamanını döndüren endpoint
    router.get('/last-vote-time', async (req, res) => {
        try {
            // Kullanıcının IP adresini al
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            // Veri tabanından kullanıcının son oy verme zamanını bul
            const lastVote = await Vote.findOne({ ip }).sort({ date: -1 });

            // Son oy verme zamanını döndür
            if (lastVote) {
                res.json({ lastVoteTime: lastVote.date });
            } else {
                res.json({ lastVoteTime: null });
            }
        } catch (err) {
            console.error("Son oy zamanı alınırken hata:", err);
            res.status(500).json({ error: 'Son oy zamanı alınırken bir hata oluştu.' });
        }
    });

    module.exports = router;
