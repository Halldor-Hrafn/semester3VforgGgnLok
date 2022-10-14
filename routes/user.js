const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Title';
  let loggedin = false;

  if (req.session.loggedin) {
    loggedin = true;
  }

  res.render('user', { title, loggedin });
});

module.exports = router;
