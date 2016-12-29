$(document).ready(function(){
  registerObj.init();
});

var registerObj = (function(){

  var init = function(){
    sayGreetings();
  }

  var sayGreetings = function(){
    alert('Hello Joel');
  }

  return {
    init:init
  }
}());
