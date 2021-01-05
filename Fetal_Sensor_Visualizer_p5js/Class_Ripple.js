class Ripple {

  constructor(x, y, rippleSize, r, g, b, ID, outerDiam) {
    this.x = x;
    this.y = y;
    this.rippleSize = rippleSize;
    this.r = r;
    this.g = g;
    this.b = b;
    this.ID = null;
    this.outerDiam = outerDiam;

  }

  display() {

    for (let i = 0; i < 5; i++) {
      let diam = this.outerDiam - (height * 0.1) * i;
      if (diam > 0) {


        push();
        translate(this.x, this.y);
        scale(this.rippleSize);
        let fade = map(diam, 0, (height * 0.5), 240, 0);
        let negfade = -fade;
        strokeWeight(height * 0.03);
        
        if (this.outerDiam >= width * 2.7) {
          noStroke();
          noFill();
        } else {

          fill(this.r, this.g, this.b, fade);
          stroke(this.r, this.g, this.b, fade * 0.2);
          stroke(this.r, this.g, this.b, negfade * 0.2);
          ellipse(0, 0, diam);
          pop();


        }

      }

    }

    // stopSounds() {
    //   // console.log("I'm stopping");
    //   this.tone1.stop();
    //   this.tone2.stop();
    //   this.tone3.stop();
    // }

  }
}