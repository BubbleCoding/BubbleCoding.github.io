let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('p5-background');
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  noStroke();

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(5, 5, 15, 20); // very dark, slight trail

  for (let p of particles) {
    p.update();
    p.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.1, 0.3));
    this.size = random(1, 3);
    this.alpha = random(50, 120);
    this.fadeSpeed = random(0.5, 1);
  }

  update() {
    this.pos.add(this.vel);

    // wrap around
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;

    // pulse
    this.alpha += sin(frameCount * 0.01 + this.pos.x * 0.01) * this.fadeSpeed;
    this.alpha = constrain(this.alpha, 30, 150);
  }

  display() {
    fill(255, 255, 255, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
