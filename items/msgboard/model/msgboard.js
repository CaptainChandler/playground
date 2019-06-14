
/*
 定义一个Schema
*/
var mongoose = require('../routes/db.js');
var Schema = mongoose.Schema;

var msgboard = new Schema({
    postname: {type:String},
    posttime: {type:Date},
    msgbody: {type:String},
});

module.exports = mongoose.model('msgboard', msgboard);