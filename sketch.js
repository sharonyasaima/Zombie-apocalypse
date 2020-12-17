
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//var boxpiece1, boxpiece2, boxpiece3
//var boxpiecebody1, boxpiecebody2, boxpiecebody3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//boxpiece1 = createSprite(310, 595, 20, 100);

//	boxpiece2 = createSprite(400, 650, 200, 20);

	//boxpiece3 = createSprite(490, 595, 20, 100);
	packageSprite.debug=true;
	packageSprite.setCollider("circle",0,0,4)
	engine = Engine.create();
	world = engine.world;
groundSprite.debug=true;
	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

//	boxpiecebody1 = Bodies.rectangle(310, 595, 20, 100, {isStatic:true});
//	World.add(world, boxpiecebody1);

	//boxpiecebody2 = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});
	//World.add(world, boxpiecebody2);

	//boxpiecebody3 = Bodies.rectangle(490, 595, 20, 100, {isStatic:true});
	//World.add(world, boxpiecebody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 // boxpiece1.x= boxpiecebody1.position.x
 // boxpiece1.y= boxpiecebody1.position.y

 // boxpiece2.x= boxpiecebody2.position.x
 // boxpiece2.y= boxpiecebody2.position.y

 // boxpiece3.x= boxpiecebody3.position.x
 // boxpiece3.y= boxpiecebody3.position.y

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}

