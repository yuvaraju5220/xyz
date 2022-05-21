
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tom,tomImg;
var jerry,jerryImg;
var fight1,fight2;
var city,cityImg;
var gameState = "play"

function preload(){
tomImg = loadAnimation("assets/tom 0.jpg","assets/tom1.png","assets/tom2.jpg")
jerryImg = loadAnimation("assets/jerry0.png","assets/jerry 1.jpg","assets/jerry2.png")
cityImg = loadImage("assets/city.png")

}

function setup() {
	canvas= createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	city = createSprite (900,485,1,1)
	city.addImage(cityImg);
	city.scale = 0.5;
	
	tom = createSprite (1800,800,20,20)
	tom.addAnimation("tom",tomImg);
	tom.scale = 0.3;


	jerry = createSprite (1600,800,20,20)
	jerry.addAnimation("jerry",jerryImg);
	jerry.scale = 0.3;


	
	}

	



function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  if (gameState === "play") {
	
	if(keyDown("space")) {
		tom.velocityX = -6 ;
		
	  }
    
  if(keyDown("LEFT_ARROW")) {
	jerry.velocityX = -6 ;
	
  }
  if(keyDown("enter")) {
	tom.velocityY = -6 ;
	
  }
  if(keyDown("UP_ARROW")) {
	jerry.velocityY = -6 ;
	
  }
  if(keyDown("SHIFT")) {
	tom.velocityX = 6 ;
	
  }
  if(keyDown("RIGHT_ARROW")) {
	jerry.velocityX = 6 ;
	
  }
  if(keyDown("DOWN_ARROW")) {
	tom.velocityY = 6 ;
	
  }
  if(keyDown("DOWN_ARROW")) {
	jerry.velocityY = 6 ;
  }
}

  if(tom.isTouching(jerry) || jerry.y > 500){
	jerry.destroy()
	gameState = "end"
  }


  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

  drawSprites();

}


