var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Get you're so cool*/
router.get('/cool', (req, res, next) => { res.send("You're Soooo Cool!!!");});

module.exports = router;
