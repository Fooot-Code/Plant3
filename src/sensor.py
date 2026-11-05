import asyncio
import serial
from time import sleep



class Sensor:
    def __init__(self, serialPort, baudRate=115200): # TODO: find correct serial port for linux
        self.serialPort = serialPort
        self.baudRate = baudRate

        self.arduino = serial.Serial(port=self.serialPort, baudrate=self.baudRate, timeout=1)

    async def readSensor(self):

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



        