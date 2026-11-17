#include <Arduino.h>
#include <pump.h>

const int pinNumber = 5;
Pump pump{pinNumber};
const byte numChars = 32;
char receivedChars[numChars];

void 

void setup() {
  Serial.begin(9600);
  pump.begin();
  
}

void loop() {
  // TODO: Read from serial port on how long to pump, pump for that time, and then release pump. 
}


void dataCheck() {
  char serialInput;

  while (Serial.available() > 0) {
    serialInput = Serial.read();

    if (serialInput != endMarker) {
      if (rc != '\r') {

      }
    } 
  }
}



// const byte numChars = 32;
// char receivedChars[numChars];
// boolean newData = false;

// unsigned long previousMillis = 0;
// const long sendInterval = 1000; // Send data every 1 second

// void setup() {
//   Serial.begin(9600);
//   pinMode(LED_BUILTIN, OUTPUT);
//   Serial.println("Ready. Send LED:1 or LED:0");
// }

// void loop() {
//   // 1. Continuously check for incoming bytes without blocking
//   receiveWithEndMarker();
  
//   // 2. Parse the message only when a full line has arrived
//   if (newData) {
//     parseData();
//     newData = false;
//   }

//   // 3. Periodically send outgoing data on a non-blocking timer
//   unsigned long currentMillis = millis();
//   if (currentMillis - previousMillis >= sendInterval) {
//     previousMillis = currentMillis;
//     sendSensorData();
//   }
// }

// void receiveWithEndMarker() {
//   static byte ndx = 0;
//   char endMarker = '\n';
//   char rc;

//   while (Serial.available() > 0 && newData == false) {
//     rc = Serial.read();

//     if (rc != endMarker) {
//       if (rc != '\r') { // Ignore carriage returns
//         receivedChars[ndx] = rc;
//         ndx++;
//         if (ndx >= numChars) {
//           ndx = numChars - 1; // Prevent buffer overflow
//         }
//       }
//     } else {
//       receivedChars[ndx] = '\0'; // Terminate the C-string
//       ndx = 0;
//       newData = true;
//     }
//   }
// }

// void parseData() {
//   if (strcmp(receivedChars, "LED:1") == 0) {
//     digitalWrite(LED_BUILTIN, HIGH);
//     Serial.println("ACK: LED ON");
//   } 
//   else if (strcmp(receivedChars, "LED:0") == 0) {
//     digitalWrite(LED_BUILTIN, LOW);
//     Serial.println("ACK: LED OFF");
//   } 
//   else {
//     Serial.print("Unknown command: ");
//     Serial.println(receivedChars);
//   }
// }

// void sendSensorData() {
//   int sensorValue = analogRead(A0);
//   Serial.print("SENSOR:");
//   Serial.println(sensorValue);
// }
