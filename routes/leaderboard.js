const express = require('express');
const router = express.Router();

// Dummy leaderboard route
router.get('/', (req, res) => {
  res.json({
    success: true,
    leaderboard: [
      { username: 'Player1', score: 1000 },
      { username: 'Player2', score: 800 }
    ]
  });
});

module.exports = router;
