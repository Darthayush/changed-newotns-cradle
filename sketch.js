const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;

function setup() {
  createCanvas(1400,500);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,800,90,ground_options)
  World.add(world,ground);

  holder = Bodies.rectangle(200,100,200,20,holder_options);
  World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(178,178,35,ball_options);
World.add(world,ball);
ball2  = Bodies.circle(190,208,35,ball_options);
World.add(world,ball2);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.002,
  length : 100
}
var options = {
	bodyA : ball2,
	bodyB : holder,
	stiffness: 0.008,
	length : 100
  }



var string = Constraint.create(options);

World.add(world,string);

fill("green");
}


function draw() {
  background("black"); 
  Engine.update(engine);

  fill("blue");
  text("Press space bar to oscillate the pendulum ",90,20);

  fill("red");
  text("Press Enter to stop the Pendulum ",100,50);

  stroke(100);
  fill ("orange");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);




fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

fill("yellow");
ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,40);

strokeWeight(8);
stroke("cyan");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

strokeWeight(8);
stroke("green");
line(ball2.position.x,ball2.position.y,holder.position.x,holder.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

if(keyCode===32){
	ball2.position.y = mouseY;
	ball2.position.x = mouseX;
	}
	
	else if (keyCode === ENTER){
	ball2.position.x = 200;
	
	}
	
}

