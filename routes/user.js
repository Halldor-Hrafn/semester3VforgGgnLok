const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Title';
  let loggedin = false;
  let username = '';
  let admin = false;

  if (req.session.loggedin) {
    loggedin = true;
    username = req.session.username;
    admin = req.session.admin;
  }

  res.render('user', {
    title, loggedin, username, admin,
  });
});

module.exports = router;
