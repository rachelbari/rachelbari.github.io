var numCircles = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    circleDiameter = width/numCircles;
    circleRadius = circleDiameter/2;
    
}

function draw() {
  rVal = 255;
  gVal = 0;
  bVal = 0;
  http://gph.is/1OklBNi
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      fill(color(rVal,gVal,bVal));
      stroke(color(rVal,gVal,bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;
    
    rVal = rVal - 2;
    gVal = gVal + 7;
    bVal = bVal + 3;
  }
}

function keyPressed() {
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('geometricPattern', 'png');
  }
  return false;
}