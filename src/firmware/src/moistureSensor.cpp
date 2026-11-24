#include <Arduino.h>
#include <moistureSensor.h>

MoistureSensor::MoistureSensor(int pin, int dryValue, int wetValue)
    : pin(pin), dryValue(dryValue), wetValue(wetValue) {}

int MoistureSensor::toPercent(int sensorValue) const {
    return map(sensorValue, dryValue, wetValue, 0, 100);
}