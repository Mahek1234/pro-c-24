
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground;
var paperBall;

var dustbinPart1;
var dustbinPart2;
var dustbinPart3;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);
    engine = Engine.create();
	world = engine.world;
    ground = createSprite(450,485,900,10);
	ground.shapeColor = "yellow"

	dustbinPart1 = createSprite(690,472.5,130,15);
	dustbinPart1.shapeColor = "white"

	dustbinPart2 = createSprite(625,435,15,80);
	dustbinPart2.shapeColor = "white"

	dustbinPart3 = createSprite(754,435,15,80);
	dustbinPart3.shapeColor = "white"

	//Create the Bodies Here.
	paperBall = new Paper(400,200,10)
	


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();

  drawSprites();
 
}



