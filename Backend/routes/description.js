const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Save description
router.post('/save-description', auth, async (req, res) => {
  const { description } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.savedDescriptions.push(description);
    await user.save();

    res.json({ message: "Description saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get saved descriptions
router.get('/saved-descriptions', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ savedDescriptions: user.savedDescriptions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
