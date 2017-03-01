  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwFqai29APy-xw2qQlhNNxevhLMVF7JBQ",
    authDomain: "collaborative-sketch-87a00.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-87a00.firebaseio.com",
    storageBucket: "collaborative-sketch-87a00.appspot.com",
    messagingSenderId: "410991468357"
  };
  firebase.initializeApp(config);
  
  var pointsData = firebase.database().ref();
  var points = [];
  
  function setup() {
        var canvas = createCanvas(2000, 2000);
        background(255);
        fill(0);
        
        pointsData.on("child_added", function (point) {
        points.push(point.val());
        });
        
        pointsData.on("child_removed", function(){
            points = [];
        });
  
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
    }

    function draw() {
        background(255);
        
        for (var i = 0; i<points.length; i++) {
            var point = points[i];
            ellipse(point.x, point.y, 5, 5);
        }
        
    }
    
    function drawPoint() {
        pointsData.push({x: mouseX, y: mouseY});
}

    function drawPointIfMousePressed() {
        if (mouseIsPressed) { 
            drawPoint();
        }
        
        $("#saveDrawing").on("click", saveDrawing);
        function saveDrawing() {
            saveCanvas();
        }
        
        $("#clearDrawing").on("click", clearDrawing);

        function clearDrawing() {
            pointsData.remove();
            points = [];
        }
    }