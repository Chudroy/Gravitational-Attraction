let attractors = [];
let particles = [];
let sketchUtils;

function setup() {
  //Create Canvas
  createCanvas(1080, 920);

  //Create Attractor points for particles to gravitate towards
  attractors.push(new Attractor(width / 2, 0));
  attractors.push(new Attractor(width / 2, height / 2));

  //Create Particles
  for (let i = 0; i < 2000; i++) {
    particles.push(new Particle());
  }

  //instantiate sketch utilities for this sketch
  sketchUtils = new SketchUtils();

  //Draw background once (particles are semi-transparent)
  background(0);
}

function draw() {
  // Uncomment to pause animation in live editor
  // noLoop();

  // Uncomment to save animation by frame
  // sketchUtils.renderAnimation();

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }
  for (let i = 0; i < attractors.length; i++) {
    attractors[i].run();
  }

  // let mouseVector = createVector(mouseX, mouseY);
}

//Left click to create new attractor position
function mousePressed() {
  sketchUtils.createAttractor({ DeleteOldestAttractor: true });
}
