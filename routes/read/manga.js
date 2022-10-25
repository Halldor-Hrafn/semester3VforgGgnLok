const express = require('express');
const path = require('path');

const readManga = require('../../db/read/manga/readManga');

const dbFile = path.join(__dirname, '../../db/main.db');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Manga page';
  const action = 'search';
  const manga = readManga(dbFile);

  res.render('manga', { title, action, manga });
});

module.exports = router;
