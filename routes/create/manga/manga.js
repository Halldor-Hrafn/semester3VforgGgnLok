const express = require('express');
const path = require('path');

const createManga = require('../../../db/create/manga/manga');

const dbFile = path.join(__dirname, '../../../db/main.db');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Create manga';
  const action = 'create';

  res.render('manga', { title, action });
});

router.post('/', (req, res) => {
  console.log(req.name);
  console.log(req.description);
  console.log(req.publisher);
  createManga(dbFile, req.name, req.publisher, req.description);
  res.redirect('/');
});

module.exports = router;
