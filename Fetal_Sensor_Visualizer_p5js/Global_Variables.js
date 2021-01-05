let minRead = 50;
let maxRead = 1023;
let threshold = 220;
let timeSensitivity = 200;
let frameNumber = 0;
let lastFired = new Array(new Array(8), new Array(8), new Array(8), new Array(8), new Array(8));



//for entering fullscreen without causing a ripple (false to fullscreen w/o ripple, otherwise true
let windowState = false;

//ripples
let rippleSize = 1
let outerDiam = 0;

//event listener
let eventState = false;

//background gradient
let c1, c2;

//sound

let sustone1;
let sustone2;
let tone1;
let tone2;
let tone3;

let attackLevel = 0.3
let releaseLevel = 0;

let attackTime = 0.75;
let decayTime = 1.5;
let susPercent = 0.2;
let releaseTime = 1;

let attackLevel2 = 0.2
let releaseLevel2 = 0;

let attackTime2 = 2;
let decayTime2 = 3;
let susPercent2 = 0.2;
let releaseTime2 = 2;

let tremolo;
