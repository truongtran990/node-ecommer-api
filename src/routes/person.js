let express = require('express');
let router = express.Router();

router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`You have requrested a person ${req.query.name}`);

    } else {
        res.send('You have requested a person');
    }

});

router.get('/person/:name', (req, res) => {
    res.send(`You have requrested a person ${req.params.name}`);
});

module.exports = router;