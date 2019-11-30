let express = require('express');
let router = express.Router();

// Phuong thuc get() phan hoi mot GET Request ve Homepage
router.get('/', function (req, res) {
    console.log("Receive a GET Request ve Homepage");
    res.send('Hello GET');
})
// Phuong thuc post() phan hoi mot POST Request ve Homepage
router.post('/', function (req, res) {
    console.log("Receive a POST Request ve Homepage");
    res.send('Hello POST');
})
// Phuong thuc delete() phan hoi mot DELETE Request ve /del_user page.
router.delete('/del_user', function (req, res) {
    console.log("Receive a DELETE Request ve /del_user");
    res.send('Hello DELETE');
})
// Phuong thuc nay phan hoi mot GET Request ve /list_user page.
router.get('/list_user', function (req, res) {
    console.log("Receive a GET Request ve /list_user");
    res.send('Page Listing');
})
// Phuong thuc nay phan hoi mot GET Request ve abcd, abxcd, ab123cd, ...
router.get('/ab*cd', function (req, res) {
    console.log("Receive a GET request ve /ab*cd");
    res.send('Page Pattern Match');
})

module.exports = router;