let note1 = 3;
let note2 = 0;
let note3 = 5;

function chordSetup() {
  masterVolume(0.3)


  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  tone1 = new p5.Oscillator();
  tone1.setType('sine');
  tone1.amp(env);
  tone1value = midiToFreq(chord1[note1]);
  tone1.freq(tone1value);

  tone2 = new p5.Oscillator();
  tone2.setType('sine');
  tone2.amp(env);
  tone2value = midiToFreq(chord1[note2]);
  tone2.freq(tone2value);

  tone3 = new p5.Oscillator();
  tone3.setType('sine');
  tone3.amp(env);
  tone3value = midiToFreq(chord1[note3]);
  tone3.freq(tone3value);

  //super slow tremolo for sustones
  tremolo = new p5.Oscillator();
  tremolo.freq(0.15);
  tremolo.amp(0.5);
  tremolo.setType('sine');
  tremolo.start();

  sustone1 = new p5.Oscillator();
  sustone1.setType('sine');
  sustone1.amp(tremolo);
  sustone1value = midiToFreq(chord1[0]);
  sustone1.freq(sustone1value);

  sustone2 = new p5.Oscillator();
  sustone2.setType('sine');
  sustone2.amp(tremolo);
  sustone2value = midiToFreq(chord1[2]);
  sustone2.freq(sustone2value);
}