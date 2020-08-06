const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * this is  table of  user
 */
let product = new Schema({
    Name: { type: String },
    Type: { type: String },
    Release_Date: { type: String },
    Insert_Date: { type: String }, //this fiels is  number in megabyte
    Number_of_Views: { type: Number },
    Abbreviation: { type: String }
});

module.exports = mongoose.model('product', product);