const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world, umb;
var maxDrops = 100;
var drops = [];
var i, j;
var thunder, thunder1, thunder2, thunder3, thunder4, rand;
var thunderFrame = 0;
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("2.png");
    thunder4 = loadImage("2.png");
}

function setup(){
   createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    umb = new Umbrella(425, 500);
    for(i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 1000), random(0, 1000)));
      }
}

function draw(){
    Engine.update(engine);
    background(0);
    umb.showUmbrella();
    for(j=0; j<maxDrops; j++){
      drops[j].showDrop();
      drops[j].update();
    }

    rand = Math.round(random(1,4));
    if(frameCount % 75 === 0){
      thunderFrame = frameCount;
      thunder = createSprite(random(10,970), random(10,30), 10, 10);
      switch(rand){
        case 1:
          thunder.addImage(thunder1);
          break;
        case 2:
          thunder.addImage(thunder2);
          break;
        case 3:
          thunder.addImage(thunder3);
          break;
        case 4:
          thunder.addImage(thunder4);
          break;
      }
      thunder.scale = random(0.3,0.6)
    }

    if(thunderFrame + 10 === frameCount && thunder){
      thunder.destroy();
    }

    drawSprites();
} 