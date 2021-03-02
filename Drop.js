class Drop{
    constructor(x, y){
        var options = {
            isStatic: false,
            density:1
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.radius = 10;

        World.add(world, this.body);
    }

    display(){
        push();
            var pos = this.body.position;
            ellipseMode(CENTER);
            fill("blue");
            ellipse(pos.x, pos.y, this.radius);
        pop();
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x: random(0, 600), y: 0});
        }
    }
}