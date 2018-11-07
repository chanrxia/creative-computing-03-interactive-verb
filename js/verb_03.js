
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

/* 
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


var background = hslColor (240, 0, 100);
var l = randomNumber(0,360);

var container = document.querySelector(".content");
var circle = document.querySelector(".circle");
var circlee = document.querySelector(".circlee");
var width = randomNumber(1,5);





/* 
TO DO:
1. Randomize shape width
2. Randomize shape height
3. Randomize shape color
4. Randomize background color
5. Randomize border color
*/

for (var i = 0; i < 10000; i++) {  
  var circle = document.createElement('div');
  circle.classList.add('circle');

  // add a random animation duration and delay to each shape
  circle.style.animationDelay = randomNumber(0, 5000) + 'ms';
  circle.style.animationDuration = randomNumber(1000, 10000) + 'ms';

  container.appendChild(circle);
}

for (var i = 0; i < 10000; i++) {  
  var circlee = document.createElement('div');
  circlee.classList.add('circlee');

  // add a random animation duration and delay to each shape
  circlee.style.animationDelay = randomNumber(0, 5000) + 'ms';
  circlee.style.animationDuration = randomNumber(1000, 10000) + 'ms';

  container.appendChild(circlee);
}

// select all shapes on the page
var circles = document.querySelectorAll('.circle');

// add interactions to each shape
circles.forEach(function(circle) {
  // when the cursor is over the shape, add a modifier class
  // when the cursor is outside of the shape, remove the modifier class
  circle.addEventListener('mouseover', function() {
    if (circle.classList.contains('circle-interaction')) {
      circle.classList.remove('circle-interaction');
    } else {
      circle.classList.add('circle-interaction');
    }
  });
});

