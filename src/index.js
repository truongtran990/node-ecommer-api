let express = require('express');
let path = require('path');

let app = express();

let personRoute = require('./routes/person');
let userRoute = require('./routes/user');
let publicRouter = require('./routes/public');

app.use(express.static('../public'));

app.get('/index.htm', function (req, res) {
    res.sendFile('index.htm', {
        root: path.join(__dirname, '../public')
    });
});
app.get('/process_get', function (req, res) {
    // Chuan bi output trong dinh dang JSON
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.use(personRoute);
app.use(userRoute);
app.use(publicRouter);

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
});