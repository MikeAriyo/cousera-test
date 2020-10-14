//This functions says Hello to an element of an array after satisfying certain conditions
(function () { //wrapped in an IIFE

  var helloSpeaker = {};
  
  var speakWord = "Hello";
  
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  
  window.helloSpeaker = helloSpeaker; //exposed to global scope
})(); //Immediately invoked
  
