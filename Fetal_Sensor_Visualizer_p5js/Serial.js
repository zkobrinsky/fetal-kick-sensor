let myPort; // The serial port
let maxNumberOfSensors = 40;
let sensorValue = []; // global variable for storing mapped sensor values
let previousValue = []; // array of previous values
let rectSize = 200;

function gotError() {
  console.log("error to connect");
}

function gotOpen() {
  console.log("serial is open");
}

function setupSerial() {
  myPort = new p5.SerialPort();
  myPort.on('data', serialEvent); // callback for when new data arrives
  myPort.on('error', gotError);
  myPort.on('open', gotOpen);

  myPort.open("COM5"); // open a serial port
}

function serialEvent() {
  let inString = myPort.readStringUntil('\n'); // get the ASCII string

  if (inString != null) { // if it's not empty
    inString = trim(inString); // trim off any whitespace
    let incomingValues = int(split(inString, ",")); // convert to an array of ints
    // console.log(incomingValues);
    let incomingArray = new Array(new Array(8), new Array(8), new Array(8), new Array(8), new Array(8));

    if (incomingValues.length <= maxNumberOfSensors && incomingValues.length > 39) {
      for (let i = 0; i < sensorValue.length; i++) {
        sensorValue[i] = 255;
      }
      for (let i = 0; i < incomingValues.length; i++) {
        // map the incoming values (0 to  1023) to an appropriate gray-scale range (0-255):
        sensorValue[i] = constrain(sensorValue[i], minRead, maxRead);
        sensorValue[i] = int((map(incomingValues[i], minRead, maxRead, 0, 255)));
        incomingArray[int(i % 5)][int(i / 5)] = sensorValue[i];
      }
      // console.log(JSON.stringify(incomingArray));
      // console.log("incomingValues",incomingValues, );

    }

    serialTrigger(incomingArray);
  }
}