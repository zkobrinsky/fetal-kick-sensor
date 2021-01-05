function setupBackground() {
    c1 = color(40, 100, 200);
    c2 = color(80, 160, 255);
}


function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}