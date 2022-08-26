# Gravitational-Attraction
A particle simulation that creates interesting visual effects

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

