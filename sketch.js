const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var mainGround;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(340,300,50,50);
    box2 = new Box (300, 200, 50, 60);
    mainGround = new Ground(200, 380, 400, 25);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    mainGround.display();
   
}