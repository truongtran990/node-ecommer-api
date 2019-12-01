const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

function connect() {
    mongoose.set('useFindAndModify', false);
    return mongoose.connect("mongodb://localhost:27017/api-rest-node", options, err => {
        console.log(DB_URI);
        console.log(err || "Database connected");
    });
}

module.exports = {
    connect
};