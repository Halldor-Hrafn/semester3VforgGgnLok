const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const createUser = require('../db/create/createUser');

const router = express.Router();

const dbFile = path.join(__dirname, '../db/users.db');

router.get('/', (req, res) => {
  const title = 'register page';
  const action = 'register';

  res.render('registerLogin', { title, action });
});

router.post('/', async (req, res) => {
  const hash = await argon2.hash(req.body.password);
  createUser(dbFile, req.body.email, req.body.username, hash);
  res.redirect('/');
});

module.exports = router;
