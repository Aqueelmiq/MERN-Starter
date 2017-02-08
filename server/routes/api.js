var express = require('express');
var router = express.Router();


/*
 * API ROUTES
 */
router.get('/hello', function(req, res, next) {
    res.send("Hello from api!");
});

module.exports = router;