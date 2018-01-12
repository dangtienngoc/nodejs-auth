const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const localLoginStrategy = require('../passport/local-login');

const User = mongoose.model('user');
const router = express.Router();

passport.use('local-login', localLoginStrategy);

/* GET users listing. */
router.post('/login', function(req, res, next) {
  return passport.authenticate('local-login', (err, token, data) => {
    if (err) {
      return res.status(403).json(err);
    }
    return res.json({
      token,
      data
    });
  })(req, res, next);
});

router.post('/register', function(req, res, next) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  if (!email || !password) { throw new Error('You must provide an email and password.'); }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(403).json('Email in use');
      }
      return res.json(user.save());
    });
});

module.exports = router;
