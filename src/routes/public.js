let express = require('express');
let router = express.Router();

router.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})
router.get('/process_get', function (req, res) {
    // Chuan bi output trong dinh dang JSON
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

module.exports = router;