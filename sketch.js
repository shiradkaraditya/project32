const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup() 
{

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(240, 748, 480, 20);
    ground2 = new Ground(2, 375, 20, 750);
    ground3 = new Ground(478, 375, 20, 750);
    ground4 = new Ground()

    for (var i = 80; i <= 400; i = i + 100) 
    {
        divisions.push(new Division(i, 750 - 300 / 2, 10, 300));
    }

    for (var k = 60; k <= 470; k = k + 50)
    {
        plinkos.push(new Plinko(k, 75));
    }

    for (var k = 100; k <= 460; k = k + 50)
    {
        plinkos.push(new Plinko(k, 175));
    }

    for (var k = 60; k <= 480; k = k + 50) 
    {
        plinkos.push(new Plinko(k, 275));
    }

    for (var k = 80; k <= 400; k = k + 50) 
    {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw()
 {
    background(0);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();


    if (frameCount % 90 === 0) 
    {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }

    for (var a = 0; a < particles.length; a++)
    {
        particles[a].display();
    }


    for (var m = 0; m < divisions.length; m++)
    {

        divisions[m].display();
    }

    for (var i = 0; i < plinkos.length; i++)
    {
        plinkos[i].display();
    }
    
}