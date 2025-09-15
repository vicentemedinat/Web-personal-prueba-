function setup() {
  createCanvas(400, 400);
}
function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
function draw() {
  background(220);
}


let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  angleMode(DEGREES);


  for (let i = 0; i < 200; i++) {

    snowflakes.push(new Snowflake());
  }


  describe('Snowflakes falling on a black background.');
}

function draw() {
  background(0);


  let currentTime = frameCount / 60;

  for (let flake of snowflakes) {

    flake.update(currentTime);
    flake.display();
  }
}



class Snowflake {
  constructor() {
    this.posX = 0;
    this.posY = random(-height, 0);
    this.initialAngle = random(0, 360);
    this.size = random(2, 5);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(200, 256), random(200, 256), random(200, 256));
  }

  update(time) {

    let angularSpeed = 35;


    let angle = this.initialAngle + angularSpeed * time;


    this.posX = width / 2 + this.radius * sin(angle);


    let ySpeed = 8 / this.size;
    this.posY += ySpeed;


    if (this.posY > height) {
      this.posY = -50;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}
