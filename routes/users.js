var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Response to source, hello you :)))');
});

router.get('/cool', (req, res, next) => {
  res.send('Truong is so cool');
});

module.exports = router;