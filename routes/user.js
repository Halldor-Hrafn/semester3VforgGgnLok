const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Title';
  let loggedin = false;
  let username = '';

  if (req.session.loggedin) {
    loggedin = true;
    username = req.session.username;
  }

  res.render('user', { title, loggedin, username });
});

module.exports = router;
