var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/msgboard';

mongoose.connect(DB_URL);


var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error：' + err);
});

db.once('open', function () {
    console.log('we are open to msgboard db');
});

db.on('connected', function () {
    console.log('we are connecting to msgboard db');
})

db.on('disconnected', function () {
    console.log('we are cut off from msgboard db');
})

module.exports = mongoose;