( function () {
  
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var i;
    var char = "";
    for (i of names) {
      char += i[0]

      if (char === "j" || char === "J") {
          byeSpeaker.speak(i);
      } else {
          helloSpeaker.speak(i);
      }
      char = ""
    }
})();
