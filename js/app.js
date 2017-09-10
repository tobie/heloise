function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



var currentWord = null;
var words = null;
var counter = 0;

function next() {
    document.querySelector("#input").value = "";
    document.querySelector("#input").select()
    if (!words || !words.length) {
        words = shuffle(Object.keys(data));
    }
    currentWord = words.pop();
    document.querySelector("img").src = data[currentWord];
    document.querySelector("#msg").style.display = "none";
    counter = 0
}


document.querySelector("#form").onsubmit = function(e) {
    e.preventDefault();
    if (currentWord == document.querySelector("#input").value.trim()) {
        next();
    } else if (counter > 2) {
        document.querySelector("#msg").innerHTML = "Oops! Il s'agit du mot <em>" + currentWord + "</em>.";
    } else {
        counter++;
        document.querySelector("#msg").style.display = "block";
        document.querySelector("#msg").innerHTML = "Ce n'est pas tout à fait ça. Essaye encore!";
    }
    document.querySelector("#input").select()
}

function preload() {
    Object.keys(data).forEach(function(key) { 
        var img = new Image();
        img.src = data[key];
    });
}
preload();

next();