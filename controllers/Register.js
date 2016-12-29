'use strict'; //use strict to implemet es6
var models = require('../models'); // require all models;
var UserMdl = models.UserMdl;



class Register {

  constructor(opts){
    this.name = typeof opts !='undefined' && typeof opts.name  !='undefined' ? opts.name : "John Doe";
  }

  getName(){
    var _self = this; //reference to Register Object

    return _self.name;
  }
}

module.exports = Register; //export Register class
