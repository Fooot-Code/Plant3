#ifndef PUMP_H
#define PUMP_H

class Pump {
  private:
    int _pin;

  public:
    Pump(int pin); // Constructor
    void begin();
    void on();
    void off();
};

#endif
