//required in every controller to make an instance


var fs = require('fs'); //File system module
var INDEXFILE = 'index.js'; //constant to avoid magic strings


fs.readdirSync(__dirname).forEach((file) => {
    if (file !=INDEXFILE) {
        var moduleName = file.split('.')[0];
        exports[moduleName] = require('./'+moduleName);
    }
})
