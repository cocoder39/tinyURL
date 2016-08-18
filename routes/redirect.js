/**
 * Created by puchen on 8/12/16.
 */
var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');

router.get('*', function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
    res.redirect(longUrl);
});

module.exports = router;