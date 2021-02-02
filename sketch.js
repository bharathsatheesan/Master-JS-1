
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, plane, stone, rubber;
var sandg1, sandg2, sandg3, sandg4, sandg5, sandg6, sandg7, iron;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(mouseX, mouseY, 100, 25);
	plane = new Plane(400,695,800,20);
	stone = new Stone(300, 350, 150, 150);
	rubber = new Rubber(300, 400, 50);
	sandg1 = new Sand(300, 500);
	sandg2 = new Sand(300, 520);
	sandg3 = new Sand(308, 480);
	sandg4 = new Sand(300, 560);
	sandg5 = new Sand(309, 560);
	sandg6 = new Sand(300, 560);
	sandg7 = new Sand(309, 560);
	iron = new Iron(400, 0, 200, 100);

	//Engine.run(engine);
}


function draw() {
  background("blue");
  Engine.update(engine);

  hammer.body.position.x = mouseX
  hammer.body.position.y = mouseY
  
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  sandg1.display();
  sandg2.display();
  sandg3.display();
  sandg4.display();
  sandg5.display();
  sandg6.display();
  sandg7.display();
  iron.display();
}