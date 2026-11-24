#ifndef PUMP_H
#define PUMP_H

class Pump {
  private:
    int pin;

  public:
    Pump(int pin); 
    void begin();
    void on();
    void off();
};

#endif
