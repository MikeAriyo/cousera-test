
(function () {  //Wrapped in an IIFE
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++){
    var firstLetter = names[i].charAt(0).toLowerCase(); //searches the first index of the elements of the array and converts them to lower case
      //Conditionals
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  };
})(); //Immediately Invoked


