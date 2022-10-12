const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.loggedin) {
    res.redirect('/');
  }
});

module.exports = router;
