var express = require('express');
var router = express.Router();
var Register = require('../controllers/Register'); // Register controller
router.route('/')
  .get(function(req, res) {
    var register = new Register(); //create an new instace of Register class;
    var john = register.getName();
    var regTwo = new Register({
      name:'Pete'
    });

    var pete = regTwo.getName();
    res.render('pages/register/register', { nameOne:john, nameTwo:pete});
  })

module.exports = router;
