class Rubber{
    constructor(x, y, radius){
        var options= {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(0, 0, this.radius);
        pop();
    }
}