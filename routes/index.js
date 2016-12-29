//required in app.js

var fs = require('fs'); //File system module
var INDEXFILE = 'index.js'; //constant to avoid magic strings

//read through files in the current directory
fs.readdirSync(__dirname).forEach(function(file){ //file names
  if(file !=INDEXFILE){
    var moduleName = file.split('.')[0]; //get the file name
    exports[moduleName] = require('./'+moduleName); //export and require file
  }
})
