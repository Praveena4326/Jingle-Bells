class Bob {
    constructor (x,y,diameter) {
        var options = {
            isStatic: false,
            restitution: 1.2,
            friction:1.5,
            density: 1.0

        }
        this.diameter = diameter;
        this.body = Bodies.circle(x,y,diameter/2,options);
        
       
        World.add(world, this.body);
        
     
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("#CD3630");
        ellipse(0,0, this.diameter, this.diameter);
        pop();
      }
    

}