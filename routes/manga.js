const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Manga page';

  res.render('manga', { title });
});

module.exports = router;
