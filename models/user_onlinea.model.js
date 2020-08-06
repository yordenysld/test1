const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 *
 this is  table of  user_online

 */
let user_online = new Schema({
    user: { type: String, unique: true },
    email: { type: String },
    last_name: { type: String },
    fish_name: { type: String }
});

module.exports = mongoose.model('user', user_online);