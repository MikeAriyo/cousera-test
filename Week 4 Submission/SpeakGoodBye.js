//This functions says Bye to an element of an array after satisfying certain conditions
 (function () { //Wrapped in an IIFE

  var byeSpeaker = {};
  
  var speakWord = "Good Bye";
  
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  
  window.byeSpeaker = byeSpeaker; //exposed to global scope
})(); //Immediately Invoked

