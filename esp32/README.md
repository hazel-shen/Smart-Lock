# LINE Things Starter for ESP32

## Requirements
* [Arduino IDE](https://www.arduino.cc/en/Main/Software)
* [ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview)
* Several Dupont lines.
* Magnetic lock x 1
* Micro-USB to USB Cable
* Relay x 1

## Installation
Please ensure you have Arduino IDE installed and the board **disconnected**.

1. Open Arduino IDE
2. Go into **Preferences**
3. Add `https://dl.espressif.com/dl/package_esp32_index.json` as an 'Additional Board Manager URL'
4. Go to **Boards Manager** from the Tools -> Board menu
5. Search for esp32 and install **esp32**.
6. Download and install the [CP2102 driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## Setup
1. Connect the **ESP32-DevKitC** board via Micro-USB cable to your computer
2. Go into Tools -> Board and select **ESP32 Dev Module** from the list
3. Under Tools -> Port select the appropriate device *ie. COM1, /dev/cu.SLAB_USBtoUART*
4. Test uploading to the board by uploading an empty sketch to make sure there are no issues.
5. The sample project requires a relay and a smart lock to be connected to the development board. Please refer the following picture:

![Refer to the picture](https://i.imgur.com/JL28goeg.png)

## Upload
1. From this repository, open **arduino/sample/sample.ino**
2. Change the `USER_SERVICE_UUID` to your generated UUID
3. Upload and Enjoy!
