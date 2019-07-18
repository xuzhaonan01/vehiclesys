var express = require('express');
var router = express.Router();
var url = require('url');
var getquery = require('../scripts/dbconn');
var query = getquery('query');

router.get('/',function(req, res, next) {
    res.render('addperson');
});


module.exports = router;