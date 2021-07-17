const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var piggy,piggy2;
var log,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,32,70,70);
    box3 = new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    box5 = new Box(240,100,50,100);
    ground = new Ground(600,height,1200,20)
    piggy = new Pig(810,350);
    piggy2 = new Pig(810,220)
    log = new Log (810,260,300,PI/2);
    log2 = new Log (810,180,300,PI/2);
    bird= new Bird(250,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    piggy.display();
    log.display();
    bird.display();
}