/**
 * Created by lrd on 16-6-2.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('data/login', { title: 'Express' });
});

module.exports = router;