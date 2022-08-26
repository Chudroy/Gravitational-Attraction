let attractors = [];
let particles = [];

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

  //Draw background once (particles are semi-transparent)
  background(0);
}

function draw() {
  // Uncomment to pause animation in live editor
  // noLoop();

  // Uncomment to save animation by frame
  // SketchUtils.renderAnimation();

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }
  for (let i = 0; i < attractors.length; i++) {
    attractors[i].run();
  }
}

//Left click to create new attractor position
function mousePressed() {
  SketchUtils.createAttractor({ DeleteOldestAttractor: true });
}

function keyPressed() {
  if (key === " ") {
    SketchUtils.toggleLoop();
  }
}
