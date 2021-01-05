let ripples = [];
let chord1 = [47, 52, 56, 59, 63, 66, 68, 71, 73, 76, 80, 88];


function setup() {
  setupSerial();
  createCanvas(600, 400);

  // Setup background colors
  setAttributes('antialias', true);
  setupBackground();

  // Setup music
  chordSetup();
  sustone1.start();
  sustone2.start();
  noCursor();

}


function draw() {
  // Draw gradient background
  setGradient(c1, c2);
  // makeCursor();


  for (let i = 0; i < ripples.length; i++) {

    ripples[i].display();
    ripples[i].outerDiam += (height * 0.0062);
    // ripples[i].outerDiam = (height * 0.2);
  }


}


function keyTyped() {
  if (key === ' ') {
    fs = fullscreen()
    fullscreen(!fs);
    eventState = !eventState;
  }
}

function playEnv() {
  env.play();
}

function windowResized() {
  if (fullscreen) {
    resizeCanvas(windowWidth, windowHeight);
  } else {
    resizeCanvas(600, 400);
  }
}