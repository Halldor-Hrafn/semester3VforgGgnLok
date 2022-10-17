const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const createUser = require('../db/create/user/createUser');

const router = express.Router();

const dbFile = path.join(__dirname, '../db/main.db');

router.get('/', (req, res) => {
  const title = 'register page';
  const action = 'register';

  res.render('registerLogin', { title, action });
});

router.post('/', async (req, res) => {
  const hash = await argon2.hash(req.body.password);
  createUser(dbFile, req.body.email, req.body.username, hash);
  req.session.loggedin = true;
  req.session.username = req.body.username;
  res.redirect('/');
});

module.exports = router;
