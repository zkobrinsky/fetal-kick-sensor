function mousePressed() {

  let red = random(30, 240);
  let green = random(30, 240);
  let blue = random(30, 240);

  //event listener to wait one mouseclick so I can enter canvas without creating a ripple
  if (windowState == true) {

    let rip = new Ripple(mouseX, mouseY, 1, red, green, blue, 1, 0);
    ripples.push(rip);

    if (ripples.length > 10) {
      // ripples[0].stopSounds();
      ripples.splice(0, 1);
    }
    // console.log(ripples);
    playsound();

  }

  windowState = true;


}