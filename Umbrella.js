class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 100, options);
        this.radius = 100;
        this.animation = loadAnimation("images/walking_1.png", "images/walking_2.png", "images/walking_3.png", "images/walking_4.png", "images/walking_5.png", "images/walking_6.png", "images/walking_7.png", "images/walking_8.png")
        

        World.add(world, this.body);
    }

    display(){
        push();
            var pos = this.body.position;
            
            
            animation(this.animation, pos.x, pos.y+200, this.radius, this.radius)
        pop();
        
    }
}