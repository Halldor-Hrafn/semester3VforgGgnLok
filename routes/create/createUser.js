const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const createUser = require('../../db/create/createUser');

const router = express.Router();

const dbFile = path.join(__dirname, '../db/main.db');

router.get('/', (req, res) => {
  res.redirect('/');
});

router.post('/', (req, res) => {
  const pswHash = argon2.hash(req.body.password);
  createUser(dbFile, req.body.email, req.body.username, pswHash);

  res.redirect('/');
});

module.exports = router;
