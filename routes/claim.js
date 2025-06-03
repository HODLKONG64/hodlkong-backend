const express = require('express');
const router = express.Router();

// TEST claim route
router.post('/', (req, res) => {
  res.json({ success: true, message: 'Claim route is working!' });
});

module.exports = router;
