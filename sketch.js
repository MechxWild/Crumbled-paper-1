const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var db,db2,db3
var paper

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    db = new Dustbin(windowWidth-200,windowHeight-40,300,20)
    db2 = new Dustbin(windowWidth-350,windowHeight-90,20,115)
    db3 = new Dustbin(windowWidth-50,windowHeight-90,20,115)
    paper = new Paper(100,0)
    ground = new Ground(windowWidth/2,windowHeight-20,windowWidth,20)
    keyPressed();
}

function draw(){
    background(0);
    Engine.update(engine); 
    db.display();
    db2.display()
    db3.display();
    paper.display();
    ground.display();
    
    
}

function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-25})
    }
}