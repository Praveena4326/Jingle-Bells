
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg

function preload()
{
 bgImg = loadImage("Jinglebells.jpg");
	
}

function setup() {
	createCanvas(1366, 620);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(665,50,500,30);
	bobObject1= new Bob(810,380,70);
	bobObject2 = new Bob(740,380,70);
	bobObject3 = new Bob(670,380,70);
	bobObject4 = new Bob(600,380,70);
	bobObject5 = new Bob(530,380,70);

	rope3 = new Rope(bobObject3.body, roof.body, 0,0);
	rope2 = new Rope(bobObject2.body, roof.body, 70,0);
	rope1 = new Rope(bobObject1.body, roof.body, 70*2,0);
	rope4 = new Rope(bobObject4.body, roof.body, -70,0);
	rope5 = new Rope(bobObject5.body, roof.body, -70*2,0);


	Engine.run(engine);
  
}


function draw() {
  
  background(bgImg);
  rectMode(CENTER);

  fill("blue")
  textFont("Algerian")
  textSize(30)
  text("JINGLE BELLS",550,450);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();	
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:200, y:-50})
	}
}



