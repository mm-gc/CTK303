let myCar = [];
let spawnRate = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
}

function draw() {
  clear();
  fill(0, 0, 0, 150)
  rect(0, 0, width, height);
  
  
   if (frameCount % spawnRate === 0) {
    myCar.push(new Car());
  }

  if (myCar.length > 50) {
    myCar.shift(); // Removes the first (oldest) element
  }
  
  for (let i = 0; i < myCar.length; i++) {
    myCar[i].display();
    myCar[i].move();
  }
    
    print(myCar.length);

}




class Car {

  // constructor
  constructor() {
    this.y = mouseY ;  // initialize your attributes here
    this.x = mouseX;
    this.o = 255;
    this.r = 212;
    this.g = 255;
    this.b = 161;
    
    this.h = 5
    this.w = 5
    
  }

  // methods

  display() {
    fill(this.r, this.g, this.b,this.o);
    this.o = this.o - 5;
    rect(this.x, this.y, this.h, this.w);
    // this.h = this.h + random(-5,5);
    // this.w = this.w + random(-5,5);
    //this.g = this.g - 2;
    // this.r = this.r + random(-10,10)
  }

  move() {
    // let tempX = map (mouseX, 0, width, 1, 20);
    // let tempY = map (mouseY, 0, height, 1, 20);
    // this.x = this.x + random(-tempX,tempX);
    // this.y = this.y + random(-tempY, tempY);
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
    
  }
  
}