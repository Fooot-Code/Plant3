#include <Arduino.h>
#include <pump.h>

const int pinNumber = 5;
Pump pump{pinNumber};

void setup() {
  Serial.begin(9600);
  pump.begin();
  
}

void loop() {
  // TODO: Read from serial port on how long to pump, pump for that time, and then release pump. 
}
