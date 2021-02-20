
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , banana

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  back = loadImage("back.png")
 
}



function setup() {
  createCanvas(600,400);
  
  background = createSprite(0,120,600,600);
  background.addImage(back);
  background.scale = 4
  
  monkey = createSprite(50,370,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.125;
  
  monkey.velocityY = 0.8
  
  ground = createSprite(400,380,600,10);
  
  var survival = 0;
  
  
  foodGroup =  createGroup();
  obstaclesGroup = createGroup();
   

   
  

  
  
}


function draw() {
  background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  monkey.collide(ground);
   if(keyDown('space') && monkey.y>=330 ){
    monkey.velocityY = -16;
    
  }
  
  console.log(monkey.y);
  
  fruit();
  obstacles();
 
  
  monkey.velocityY = monkey.velocityY + 0.8;
  ground.velocityX=-4;    
  ground.x = ground.width /2;
  ground.visible = false; 
  
  console.log(monkey.y)
  
  drawSprites(); 
  
  stroke("white");
  textSize(20);
  fill("black");
  sur = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+ sur,200,30)
  
  
}

function fruit(){
 if(frameCount%60===0){
   banana = createSprite(650,Math.round(random(200,300)),20,20) 
   banana.lifetime = 200
   banana.velocityX = -4
   banana.addImage(bananaImage)
   banana.scale = 0.1
 
   foodGroup.add(banana)
 }
  
    
  
}


function obstacles(){
 if(frameCount%300===0){
   obstacle = createSprite(650,337,20,20) 
   obstacle.lifetime = 200
   obstacle.velocityX = -7
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.2
 
 
   foodGroup.add(banana)
 }
  
    
  
}










