class Sand{
    constructor(x, y){
        var options= {
            'restitution':1.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 2;

        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("brown");
        stroke("white");
        ellipseMode(CENTER);
        ellipse(0, -100, this.radius*3);
        pop();
    }
}