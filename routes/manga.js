const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Manga page';
  const action = 'home';

  res.render('manga', { title, action });
});

module.exports = router;
