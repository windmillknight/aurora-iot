/**
 * Created by lrd on 16-6-2.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/work', function(req, res, next) {
    res.render('data/work', { title: 'Express' });
});

module.exports = router;