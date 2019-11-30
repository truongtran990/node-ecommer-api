let express = require('express');

let app = express();

let personRoute = require('./routes/person');
let userRoute = require('./routes/user');
let publicRouter = require('./routes/public');

app.use(personRoute);
app.use(userRoute);
app.use(publicRouter);

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
});