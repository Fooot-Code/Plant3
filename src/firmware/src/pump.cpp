#include <Arduino.h>
#include <pump.h>

Pump::Pump(int pin) {
  _pin = pin;

}  

void Pump::begin() {
  pinMode(_pin, OUTPUT);

}

void Pump::on() {
  digitalWrite(_pin, HIGH);

}

void Pump::off() {
  digitalWrite(_pin, LOW);

}

