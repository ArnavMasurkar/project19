var spaceBg,rocket,alien,ground;

var gameState = "play"

function preload(){
  spacebgImg = loadImage("back.jpg");
  rocketImg = loadImage("spaceship.png");
  alienImg = loadImage("alien.png")

}

function setup(){
  createCanvas(600,900);

  spaceBg = createSprite(300,450);
  spaceBg.addImage("spaceBg",spacebgImg);
  spaceBg.velocityY = 1;
  
  aliensGroup=new Group()
 
  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.2;
  rocket.addImage("rocket", rocketImg);

  ground = createSprite(300,900,600,1)
}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      rocket.x = rocket.x - 3;
    }
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 3;
    }
    
    if(keyDown("space")){
      rocket.velocityY = -10;
    }
    
    rocket.velocityY = rocket.velocityY + 0.8
    
    if(spaceBg.y > 400){
      spaceBg.y = 300
    }
    spawnAliens()
  if(aliensGroup.isTouching(rocket)||ground.isTouching(rocket)){
  gameState="end"
  }
  if (gameState === "end"){
 
    text("Game Over", 300,370)
  }

    
    drawSprites();
  }
  
 
  

}

function spawnAliens() {
  //write code here to spawn the doors in the tower
  if (frameCount % 120 === 0) {
    var alien = createSprite(200, -50);
  
    
    alien.x = Math.round(random(0,600));
    
    
    alien.addImage(alienImg);
    alien.scale=0.6
    
    alien.velocityY = 1;
    
    
    rocket.depth = alien.depth;
    rocket.depth +=1;
   
    //assign lifetime to the variable
    alien.lifetime = 1000;


    
    //add each door to the group
    aliensGroup.add(alien);
 
  }
}