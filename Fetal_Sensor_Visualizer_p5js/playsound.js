function playsound() {
  //reduced length of array to favor bass notes in "i"
  note1 = int(random(1, chord1.length - 5));
  note2 = int(random(1, chord1.length - 3));
  note3 = int(random(1, chord1.length - 1));
  chordSetup();

  tone1.start();
  tone2.start();
  tone3.start();
  tone1.stop(3.5);
  tone2.stop(3.5);
  tone3.stop(3.5);
  playEnv();
}