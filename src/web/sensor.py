import asyncio
import serial
from time import sleep



class Sensor:
    def __init__(self, serialPort = "/dev/ttyACM0", baudRate=9600): 
        self.serialPort = serialPort
        self.baudRate = baudRate

        self.arduino = serial.Serial(port=self.serialPort, baudrate=self.baudRate, timeout=1)

    async def readSensor(self):
        line = self.arduino.readline().decode('utf-8').rstrip()
        return line

    async def sensorPollingLoop(self):
        while True:
            try:
                data = await self.readSensor()
                print(f"Polled Sensor Data: {data}")
                
            except asyncio.CancelledError:
                break  # Handle application shutdown cleanly
            except Exception as e:
                print(f"Sensor error: {e}")
                await asyncio.sleep(5)

