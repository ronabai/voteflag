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

const MONGODB_URI = process.env.MONGODB_URI; // MONGODB_URI'yi .env dosyasından al

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB bağlantısı başarılı.");
})
.catch((err) => {
    console.error("MongoDB bağlantısı hatası:", err);
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Statik dosyaları sunmak için public klasörünü kullan

// /flags endpoint'ine GET isteği karşılayan rota
app.get('/flags', async (req, res) => {
    try {
        const flags = await Flag.find();
        res.json(flags);
    } catch (error) {
        console.error('Bayraklar alınırken hata:', error);
        res.status(500).json({ error: 'Bayraklar alınırken bir hata oluştu.' });
    }
});

// /vote endpoint'ine POST isteği karşılayan rota
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

// Diğer rotalar ve middleware'ler...

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
