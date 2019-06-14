var express = require('express');
var router = express.Router();
var Msgboard = require('../model/msgboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',
                        postbody: '',
                        postname: '',
                        posttime: '',
                        visibility: 'hidden',
                        vMsg:'hidden',
                        msg:''});
});

router.post('/', function(req, res, next) {

  var time = new Date();
  console.log(time);
  var flg = true;

  var msgboard = new Msgboard({
    postname: req.body.postname,
    posttime: time,
    msgbody: req.body.inputmsg ,
  });

  function doSave(){
    msgboard.save(function(err, res) {
      if(err) {
        console.log('There has been a error:' + err);
        flg = false;
      } else {
        flg = true;
      }
    });
  };

  async function doRender() {
    await doSave();
    if(flg === false) {
      res.render('index', { title: 'Message Board',
        postbody: '',
        postname: '',
        posttime: '',
        visibility: 'hidden',
        vMsg:'visible',
        msg:'The message posting failed'});
    } else {
      res.render('index', { title: 'Message Board',
        postbody: req.body.inputmsg,
        postname: req.body.postname,
        posttime: time,
        visibility: 'visible',
        vMsg:'visible',
        msg:'Your message has been posted!'});
    }
  }

  doRender();
});

module.exports = router;
