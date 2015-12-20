# microduinoMixly

microduino图形化编程


开发说明：
company/Microduino.xml			左侧Microduino的block基本定义(block样式，输入值属性)<br/>
blockly/blocks/company/Microduino.js	block的逻辑层<br/>
blockly/generators/arduino/company/Microduino.js	        block的代码实现层<br/>
blockly/msg/js/zh-hans.js		简体中文<br/>
blockly/msg/js/zh-hant.js		繁体中文<br/>
blockly/msg/js/en.js			英文<br/>
blockly/media/Microduino		多媒体素材<br/>

Microduino模块及传感器分类(文件夹及文件命名，注意：命名区分大小写)：
核心模块(文件夹命名：core)红色

-软串口
softwareSerial_Blocks.js
softwareSerial_Arduino.js

-串口波特率设置,打印，读取
serial_Blocks.js
serial_Arduino.js


功能模块(文件夹命名：function)黄色

-motion
motion_Blocks.js
motion_Arduino.js

-GPS
GPS_Blocks.js
GPS_Arduino.js

-Audio
Audio_Blocks.js
Audio_Arduino.js

-SD
SD_Blocks.js
SD_Arduino.js

-RTC
RTC_Blocks.js
RTC_Arduino.js

-Stepper
Stepper_Blocks.js
Stepper_Arduino.js

-Motor
Motor_Blocks.js
Motor_Arduino.js

通讯模块(文件夹命名：communication)蓝色

-w5500
w5500_Blocks.js
w5500_Arduino.js

-NRF24
NRF24_Blocks.js
NRF24_Arduino.js

-SmartRF
SmartRF_Blocks.js
SmartRF_Arduino.js

-NFC
NFC_Blocks.js
NFC_Arduino.js

-BT
BT_Blocks.js
BT_Arduino.js

-Zigbee
Zigbee_Blocks.js
Zigbee_Arduino.js

-WIFI(ESP)
WIFI_Blocks.js
WIFI_Arduino.js

-GPRS/GSM
GPRS_GSM_Blocks.js
GPRS_GSM_Arduino.js

扩展模块(文件夹命名：extended)绿色

-OLED
OLED_Blocks.js
OLED_Arduino.js

-TFT
TFT_Blocks.js
TFT_Arduino.js

传感器(文件夹命名：sensor)

-colorLED
colorLED_Blocks.js
colorLED_Arduino.js

-buzzer
buzzer_Blocks.js
buzzer_Arduino.js

-TEMP&Hum
tempHum_Blocks.js
tempHum_Arduino.js

-Passive Infrared
PIR_Blocks.js
PIR_Arduino.js

-Joystick
joystick_Blocks.js
joystick_Arduino.js

-IR Emitter
IREmitter_Blocks.js
IREmitter_Arduino.js

-IR Receiver
IRReceiver_Blocks.js
IRReceiver_Arduino.js

-LM75
LM75_Blocks.js
LM75_Arduino.js

-开关 key
key_Blocks.js
key_Arduino.js