function makeCursor() {
  push();
  strokeWeight(height * 0.005);
  stroke(255, 255, 255, 128);
  fill(255, 255, 255);
  circle(mouseX, mouseY, height * 0.015);
  pop();
}