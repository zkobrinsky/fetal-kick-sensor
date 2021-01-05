int currentMillis;

#define numRows 5
#define numCols 8
int rows[] = { 
  A0, A1, A2, A3, A4};   
int cols[] = { 
  2,3,4,5,6,7,8,9};  
int incomingValues[40] = {
};   


#include <SPI.h>
#include <SD.h>

const int chipSelect = 10;


#include <RTCZero.h>

/* Create an rtc object */
RTCZero rtc;
File dataFile;

/* Change these values to set the current initial time */
const byte seconds = 0;
const byte minutes = 45;
const byte hours = 14;

/* Change these values to set the current initial date */
const byte day = 15;
const byte month = 12;
const byte year = 19;

void setup() {
  // set all rows and columns to INPUT (high impedance):
  for(int i=0; i<numRows; i++){
    pinMode(rows[i], INPUT);
  }
    for(int i=0; i<numCols; i++){
    pinMode(cols[i], OUTPUT);
  }
  Serial.begin(9600);

   rtc.begin(); // initialize RTC

  // Set the time
  rtc.setHours(hours);
  rtc.setMinutes(minutes);
  rtc.setSeconds(seconds);

  // Set the date
  rtc.setDay(day);
  rtc.setMonth(month);
  rtc.setYear(year);

  // you can use also
  //rtc.setTime(hours, minutes, seconds);
  //rtc.setDate(day, month, year);\

  
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    while (1);
  }
  Serial.println("card initialized.");
}



void print2digits(int number) {
  if (number < 10) {
    dataFile.print("0"); // print a 0 before if the number is < than 10
  }
  dataFile.print(number);
}

void loop() {
currentMillis = millis()/100;

  dataFile = SD.open("show.txt", FILE_WRITE);
  
  for(int colCount=0; colCount<numCols; colCount++){
    pinMode(cols[colCount], OUTPUT);  // set as OUTPUT
    digitalWrite(cols[colCount], LOW);  // set LOW

    for(int rowCount=0; rowCount<numRows; rowCount++){
      pinMode(rows[rowCount], INPUT);  
      delay(1);
      incomingValues[ ( (colCount)*numRows) + (rowCount)] = analogRead(rows[rowCount]);  // read INPUT


    }// end rowCount

    


    digitalWrite(cols[colCount], HIGH) ;  // set back to INPUT!

  }// end colCount

  // Print the incoming values of the grid:
 // Print date...
 if (dataFile) {
    
    
 dataFile.print("20");
 print2digits(rtc.getYear());
  print2digits(rtc.getMonth());
  print2digits(rtc.getDay());
  dataFile.print("-");
  

  // ...and time
  print2digits(rtc.getHours());
  dataFile.print(":");
  print2digits(rtc.getMinutes());
  dataFile.print(":");
  print2digits(rtc.getSeconds());
  dataFile.print(",");

  
  for(int i=0; i<40; i++){
//      Serial.print(currentMillis);
//  Serial.print(",");

    Serial.print(incomingValues[i]);
    if(i<39) Serial.print(",");
    
       dataFile.print(incomingValues[i]);
    if(i<39) dataFile.print(",");
  }
  Serial.println();
  dataFile.println();
  
  dataFile.close();
  delay(100);
}

}
