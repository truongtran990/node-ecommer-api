const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    price: Number
});

const product = mongoose.model('product', productSchema);
module.exports = product;
