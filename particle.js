
class Particle {

constructor() {
    this.x = width/2;
    this.y = 200;
    this.newX = random(-1,1);
    this.newY = random(-5,5);
this.alpha = 255;
this.colors = 255;
//this.pos = createVector(0,0,0);
//this.position = createVector(width/2, height/2);
  }

finished() {
  return this.alpha < 0;
}

update () {
this.x += this.newX;
this.y += this.newY;
this.alpha -= .5;

}


display() {
  //stroke(255);
  noStroke();
  fill(this.colors, 0,0, this.alpha);
  ellipse(this.x, this.y, 16);
}

update2 () {
this.x += this.newX;
this.y += this.newY;
this.alpha -= 5;
}

}
