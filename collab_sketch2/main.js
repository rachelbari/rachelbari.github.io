// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5ljE2tX4b4OXPvrpTY8pziT8bJYleq1o",
    authDomain: "collaborative-sketch-d49af.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-d49af.firebaseio.com",
    storageBucket: "collaborative-sketch-d49af.appspot.com",
    messagingSenderId: "435219418989"
  };
  firebase.initializeApp(config);
  
  var pointsData = firebase.database().ref();
  var points = [];
  
  function setup() {
      var canvas = createCanvas(400, 400);
      background(255);
      fill(0);
      
      pointsData.on("child_added", function (point) {
          points.push(point.val());
      });
      
      canvas.mousePressed(drawPoint);
      canvas.mouseMoved(drawPointIfMousePressed());
  }
  
  function draw() {
    background(255);
    
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
  }
    function drawPoint(){
        pointsData.push({x: mouseX, y: mouseY})
    }
    
    function drawPointIfMousePressed(){
        if (mouseIsPressed){
            drawPoint();
        }
    }
  