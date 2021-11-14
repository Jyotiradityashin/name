
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 // rope=new rope(bodyObject1,roofObject.body, bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  constructor(body1,body2, offsetX, offsetY)
  {
  this.offsetX=offsetX
  this.offsetY=offsetY
  var options={
  bodyA:body1,
  bodyB:body2,
  pointB:{x:this.offsetX, y:this.offsetY}
  }
  this.rope=constraint.create(options)
  world.add(world,this.rope)
  }

  rope=new rope(bodyObject1,roofObject.body, bobDiameter*2, 0)

  drawSprites();
 
}


function display(){

  var pointA=this.rope.bodyA.position;
  var pointB=this.rope.bodyB.position;
  
  strokeWeight(2);
  
  var Anchor1=pointA.x
  var Anchor1=pointA.y
  
  var Anchor2X=pointB.x+this.offsetx
  var Anchor2Y=pointB.y+this.offsety
  
  line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}

