// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//

(function() { 
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var index=0; index < names.length; index++) {
  var firstLetter = names[index].charAt(0).toLowerCase();
  if (firstLetter == "j") {
    byeSpeaker.speak(names[index]) ;
  } else {
    helloSpeaker.speak(names[index]) ;
  };
}
})();

