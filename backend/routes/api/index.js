const router = require('express').Router();



// testing api route
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body })
});

module.exports = router;
