const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;


function preload(){
  
}

function setup(){
    engine = Engine.create();
    world = engine.world;

 createCanvas(400,600);
   //creating drops
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Snowdrops(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){
    Engine.update(engine);
    background("cornflowerBlue"); 

    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
//umbrella.display()
    drawSprites();
}