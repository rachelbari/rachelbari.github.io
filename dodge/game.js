var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;


function preload(){
  playerImage = loadImage("https://d1eipm3vz40hy0.cloudfront.net/images/p-apps-marketplace/apps/89603/logo.png");
  backgroundImage = loadImage("http://66.media.tumblr.com/fff553d713824a977c16959b0cb9d4eb/tumblr_nwytfqvauO1tuy5mao1_500.jpg");

}

function setup() {
    createCanvas(500, 500);
   player = createSprite(width/2, height-50, 50, 5);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 10, 30);
    isGameOver = false;
}

function draw() {
  background(backgroundImage);
  
  if (isGameOver){
      gameOver();
  } 
  //else: game is running, and normal conditions apply
  else{
      if(enemy.overlap(player)) {
          isGameOver = true;
      }
  }
  
  if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
    player.position.x = player.position.x + 3;
  }

  if (keyDown(LEFT_ARROW) && player.position.x > 25) {
    player.position.x = player.position.x - 3;
  }
  
  enemy.position.y = enemy.position.y + 3;
  if (enemy.position.y > height){
      enemy.position.y = 0;
      enemy.position.x = random(5, width-5);
  }

  drawSprites();
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
  enemy.position.x = -width/2;
  enemy.position.y = 0;
}

function mouseClicked(){
    if(isGameOver){
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-50;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}