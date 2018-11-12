/* 
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/

/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}



function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}



var container = document.queryselector(".content");




var .oval = document.querySelector(".oval one");


oval.style.background = hslColor(0, 0, background);

var background = randomNumber(0, 100);

var width = randomNumber(200,800);
shape.style.width = width + "px";


for (var i = 0; i < 500; i++) {
  var oval = document.createElement('div');
  oval.classList.add('oval');
}


  var ovals = document.querySelectorAll('.oval');

// add interactions to each shape
ovals.forEach(function(oval)) {
  // when the cursor is over the shape, add a modifier class
  // when the cursor is outside of the shape, remove the modifier class
  oval.addEventListener('mouseover', function()) {
    if (oval.classList.contains('oval-interaction')) {
      oval.classList.remove('oval-interaction');
    } else {
      oval.classList.add('oval-interaction');
    }
  }
}
