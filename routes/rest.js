/**
 * Created by puchen on 8/12/16.
 */
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/urls', jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
    // implement this
    res.json("implement this");
});

module.exports = router;