#ifndef MOISTURE_SENSOR_H
#define MOISTURE_SENSOR_H

/**
 * @brief Manages reading and calibrating an analog soil moisture sensor.
 */
class MoistureSensor {
  private:
    const int pin;   ///< Analog input pin connected to the sensor
    const int dryValue;    ///< Raw analog reading in completely dry air/soil
    const int wetValue;    ///< Raw analog reading in water/saturated soil

    /**
     * @brief Converts a raw analog reading into a moisture percentage.
     * 
     * @param sensorValue Raw analog reading from analogRead().
     * @return int Moisture level clamped between 0 and 100.
     */
    int toPercent(int sensorValue) const;

  public:
    /**
     * @brief Construct a new MoistureSensor object.
     * 
     * @param pin Analog pin number (e.g., A0).
     * @param dryValue Raw sensor reading when completely dry.
     * @param wetValue Raw sensor reading when completely wet.
     */
    MoistureSensor(int pin, int dryValue, int wetValue);

    /**
     * @brief Configures the sensor pin mode. Call this inside setup().
     */
    void begin();

    /**
     * @brief Reads the sensor and returns the current moisture percentage.
     * 
     * @return int Moisture percentage (0% = dry, 100% = wet).
     */
    int readSensor() const;
};

#endif
