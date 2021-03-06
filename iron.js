class Iron{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':10.0,
            'mass':10.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("#a19d94");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}