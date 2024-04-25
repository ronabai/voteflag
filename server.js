const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Flag = require('./models/flag');
const Vote = require('./models/vote');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB bağlantısı başarılı.");
    })
    .catch((err) => {
        console.error("MongoDB bağlantısı hatası:", err);
    });

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.post('/vote', async (req, res) => {
    const { flagId } = req.body;
    const ip = req.ip;

    // Check the cookie for the user's previous vote
    if (req.cookies && req.cookies.voted) {
        res.status(403).json({ error: 'Her 12 saatte bir oy kullanabilirsiniz.' });
        return;
    }

    const currentTime = new Date();
    const twelveHoursAgo = new Date(currentTime.getTime() - 12 * 60 * 60 * 1000);

    try {
        const vote = await Vote.findOne({ ip: ip });

        if (!vote || vote.lastVoteTime < twelveHoursAgo) {
            await Vote.findOneAndUpdate({ ip: ip }, { ip: ip, lastVoteTime: currentTime }, { upsert: true });
            await Flag.findByIdAndUpdate(flagId, { $inc: { voteCount: 1 } }, { new: true });
            
            // Set the cookie to mark that the user has voted
            res.cookie('voted', 'true', { maxAge: 12 * 60 * 60 * 1000 }); // 12 hours expiration

            const flag = await Flag.findById(flagId);
            res.json(flag);
        } else {
            res.status(403).json({ error: 'Her 12 saatte bir oy kullanabilirsiniz.' });
        }
    } catch (err) {
        console.error("Oy kaydedilirken hata:", err);
        res.status(500).json({ error: 'Oy kaydedilirken bir hata oluştu.' });
    }
});

// Other routes and middleware...

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
