const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'About us';

  res.render('about', { title });
});

module.exports = router;
