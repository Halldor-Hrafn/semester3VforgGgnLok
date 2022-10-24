const express = require('express');
// const path = require('path');
// const createmanga = require('../../db/create/manga/createManga');

// const dbFile = path.join('../../db/main.db');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Create manga';
  const action = 'create';

  res.render('manga', { title, action });
});

module.exports = router;
