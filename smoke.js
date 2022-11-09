

class Smoke {

constructor() {
    this.x = x;
    this.y = y;
  }



update () {
this.x +=  random(-5,5);
this.y +=  random(-5,5);

}

display() {
  //stroke(255);
  stroke(0);
  fill(0,150);
  ellipse(this.x, this.y, 24, 24);
}


}
