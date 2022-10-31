
class Ball {
	
  constructor(){
     this.mass = 1;
  	 this.position = createVector(width/2, height/2);
     this.velocity = createVector();
     this.acceleration = createVector(0, 0);
    
  }

  update(){

  	this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);


  }

  checkEdges(){

  if (this.position.x > width) {
		  this.position.x = 0;
	}
	else if (this.position.x < 0) {
		 this.position.x = width;
	}
    
  if (this.position.y > height){

		this.position.y = 0;
	}
	else if(this.position.y <0){
       this.position.y = height;

	}

}

checkEdges2(){

  if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
  }
  else if (this.position.x < 0) {
     this.position.x = 0;
     this.velocity.x *= -1;
  }
    
  if (this.position.y > height){

    this.position.y = height;
    this.velocity.y *= -1;
  }
  else if(this.position.y <0){
       this.position.y = 0;
       this.velocity.y *= -1;

  }

}


 display(){
  //stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  rect(this.position.x,this.position.y, 40, 40);


 }




} // end ball class