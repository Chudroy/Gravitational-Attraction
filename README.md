# Gravitational-Attraction
A particle simulation that creates interesting visual effects, made with [p5.js](https://p5js.org/).

## Controls

Refer to p5js docs for any functions that aren't defined within this sketch, such as `setup`, `draw`, `mousePressed`, `loop`,`noLoop`, `isLooping`...

### Play and Pause

Press the space bar to play and pause the sketch. This functionality can be found at the end of `sketch.js`

```javascript
function keyPressed() {
  if (key === " ") {
    SketchUtils.toggleLoop();
  }
}
```
and in `sketch_utils.js`

```javascript
  static toggleLoop() {
    if (isLooping()) {
      noLoop();
    } else if (!isLooping()) {
      loop();
    }
  }
```

### Capture Video

To capture video, in `sketch.js`, in the `draw` function, uncomment the following line of code.

```javascript
  // SketchUtils.renderAnimation();
```

This will use the CCapture package to render an animation in .webm format. To change the rendering options, they can be found in the `index.html`. The library used is
[CCapture](https://github.com/spite/ccapture.js/). Go to their documentation for more information on rendering options.

### Create Attractor Placement on Initialization

In the `sketch.js` file, in the `setup` function, add attractors to the attractor array, specifying an X and Y coordinate in the arguments.

```javascript
function setup() {
  //Create Canvas
  createCanvas(1080, 920);
  
  //Place an attractor at the origin. In p5js, this is the top left corner.
  attractors.push(new Attractor(0, 0));
  
  //Place an attractor in the middle
  attractors.push(new Attractor(width / 2, height / 2));
  
  //Place an attractor at a specific point within the canvas dimensions
  attractors.push(new Attractor(527, 143));
}
```

### Particles follow attractors and/or mouse position

- In the `run` function in `particle.js`, add or remove the `applyAttractors` and `applyMouseForce` functions.
- The `delay` property specifies after how many frames should the forces start to be applied, for visual effects variety
- frameCount is a builtin p5js property

```javascript
  run() {
    this.update();
    this.edges();
    this.show();
    if (frameCount >= this.delay) {
      //this function applies the position of the attractors as a gravitational force on the particles
      this.applyAttractors();
      //this function applies the mouse position as a gravitational force. The particles follow the mouse.
      //this.applyMouseForce();
    }
  }
```

### Show Attractor position in sketch

in `attractor.js`, toggle the `show` function. If running, it shows the position of the Attractor as a green circle.

```javascript
 run() {
    //Toggle attractor display
    this.show(false);
  }
```



