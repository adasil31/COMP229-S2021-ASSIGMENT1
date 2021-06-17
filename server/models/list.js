let mongoose = require('mongoose');


//create a model class

let contactModel = mongoose.Schema({
username: String,
password: Number,
emailaddress: String,
},
{
    collection: "user"
});

module.exports = mongoose.model('contact', contactModel);

