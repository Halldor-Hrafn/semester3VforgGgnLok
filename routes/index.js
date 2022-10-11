const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Front page';
  const msg = 'Sussy';

  res.render('index', { title, msg });
});

module.exports = router;
