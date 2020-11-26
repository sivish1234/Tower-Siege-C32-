class Block {
    constructor(x, y, width, height) {
      var options = {
          isState: false,
          friction : 0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
     // Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    
    score() {
      if(this.visible>0 && this.visible >- 255) {
        score++;
      }
    }

    display(){
      var pos = this.body.position;
      if (this.body.speed < 5) {
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
        pop();
      } 
    else {
        push();
        World.remove(world, this.body);
        this.visible = this.visible - 1;
        tint(255, this.visible);
        pop();
    }
    
 }

}