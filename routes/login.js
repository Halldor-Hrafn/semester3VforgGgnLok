const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const finduser = require('../db/read/user/findEmail');

const router = express.Router();

const dbFile = path.join(__dirname, '../db/main.db');

router.get('/', (req, res) => {
  const title = 'Login page';
  const action = 'login';

  res.render('registerLogin', { title, action });
});

router.post('/', async (req, res) => {
  const user = finduser(dbFile, req.body.email);
  let verified = false;

  if (user) {
    verified = await argon2.verify(user.password, req.body.password);
  }

  if (verified) {
    req.session.loggedin = true;
    req.session.username = user.username;
    if (user.admin) {
      req.session.admin = true;
    }
    res.redirect('/');
  } else {
    res.send('Incorrect username/password');
  }
});

module.exports = router;
