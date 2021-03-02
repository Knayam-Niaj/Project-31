const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = []
var maxDrops = 100
var man;

var thunder1, thunder2;


function preload(){
    //man = loadAnimation("images/walking_1.png", "images/walking_2.png", "images/walking_3.png", "images/walking_4.png", "images/walking_5.png", "images/walking_6.png", "images/walking_7.png", "images/walking_8.png")
    
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(600,1000);
    engine = Engine.create();
    world = engine.world;

    //drop = new Drop(300, 500, 10);

    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0, 600), 0))
    }

    umbrella = new Umbrella(325, 200);
    

}

function draw(){
    background(0);  

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    //animation(man, 300, 500);

    umbrella.display();

    var rand = Math.round(random(1, 4));
    if(frameCount&1===0){
        var thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;

            case 2: thunder.addImage(thunder2);
            break;

            case 3: thunder.addImage(thunder3);
            break;

            case 4: thunder.addImage(thunder4);
            break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    
    Engine.update(engine);
}   

