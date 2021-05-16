class Drops{
    constructor(x, y){
        var options ={
            friction:0.1,
            restitution:0.1,
            densit:0.01
        }
      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    }

    showDrop(){
        fill(0, 0, 200);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
    }

    update(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x:random(0, 1000), y:0});
        }
    }
}