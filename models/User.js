const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Correct relative path

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(400).send('Error registering user: ' + err.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await user.comparePassword(password)) {
      res.status(200).send('User logged in successfully');
    } else {
      res.status(400).send('Invalid email or password');
    }
  } catch (err) {
    res.status(400).send('Error logging in user: ' + err.message);
  }
});

module.exports = router;
