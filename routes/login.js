const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Login page';
  const action = 'login';

  res.render('registerLogin', { title, action });
});

module.exports = router;
