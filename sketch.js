
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(450,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background("white")
  
  
if(ground.x<0) {
  ground.x=ground.width/2;
  
} 

if(keyDown("space")) {
  monkey.velocityY=-12;
 
}

monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);  
  
  
spawnbanana();
spawnObstacles(); 
  
 if(frameCount%10===0){
   survivaltime=survivaltime+1;
 }
  if(monkey.isTouching(FoodGroup)){
    score=score+1;
    banana.destroy();
    
  }
  if(monkey.isTouching(obstacleGroup)){
    monkey.x=80;
    monkey.y=315;
    FoodGroup.velocityX=0;
    obstacleGroup.velocityX=0;
    survivaltime=0;
    score=0;
    
  
  }
  
drawSprites();
 text("Score: "+ score, 300,50);
 text("Survival Time: "+ survivaltime, 120,50);
}

function spawnbanana(){
  if(frameCount%80===0){
    banana = createSprite(600,250,10,10);
    banana.y = Math.round(random(70,150));
    banana.velocityX=-6;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana);
    
    
  }
  }
  function spawnObstacles(){
  if(frameCount%80===0){
    obstacle = createSprite(800,320,10,10);
   
    obstacle.velocityX=-6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    
    
  }
  
  
  






}