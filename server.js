const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const claimRoute = require('./routes/claim');
const leaderboardRoute = require('./routes/leaderboard');

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/claim', claimRoute);
app.use('/api/leaderboard', leaderboardRoute);

// ✅ Health Check Route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`HODL Kong backend running on port ${PORT}`));
