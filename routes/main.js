var express = require('express');
var router = express.Router();
var connection = require("../lib/db");

router.get('/', function (req, res, next) {
    res.render('main', { title: 'EWHA-eats', id: '', pw: '' });
});

module.exports = router;