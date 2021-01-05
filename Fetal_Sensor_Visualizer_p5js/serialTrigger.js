function serialTrigger(triggerData) {
  for (let i = 0; i < 40; i++) {
    let sensorX = int(i / 5);
    let sensorY = int(i % 5);
    if (triggerData[sensorY][sensorX] < threshold && (lastFired[sensorY][sensorX] === undefined || lastFired[sensorY][sensorX] < frameNumber - timeSensitivity)) {
      lastFired[sensorY][sensorX] = frameNumber;

      let red = random(30, 240);
      let green = random(30, 240);
      let blue = random(30, 240);

      //event listener to wait one mouseclick so I can enter canvas without creating a ripple
      if (windowState == true) {

        let xRandomizer = random(-30, 30);
        let yRandomizer = random(-30, 30);
        let circleGrower = map(triggerData[sensorY][sensorX], 255, 0, 0, 3);


        let rip = new Ripple((width / 8 * sensorX + width / 16) + xRandomizer, (height / 5 * sensorY + height / 10) + yRandomizer, circleGrower, red, green, blue, 1, 0);
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

  }

  frameNumber += 1;
}