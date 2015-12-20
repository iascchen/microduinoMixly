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

Microduino模块及传感器分类(文件夹及文件命名，注意：命名区分大小写)：<br/>
核心模块(文件夹命名：core)红色<br/>

-软串口<br/>
softwareSerial_Blocks.js<br/>
softwareSerial_Arduino.js<br/>

-串口波特率设置,打印，读取<br/>
serial_Blocks.js<br/>
serial_Arduino.js<br/>


功能模块(文件夹命名：function)黄色<br/>

-motion<br/>
motion_Blocks.js<br/>
motion_Arduino.js<br/>

-GPS<br/>
GPS_Blocks.js<br/>
GPS_Arduino.js<br/>

-Audio<br/>
Audio_Blocks.js<br/>
Audio_Arduino.js<br/>

-SD<br/>
SD_Blocks.js<br/>
SD_Arduino.js<br/>

-RTC<br/>
RTC_Blocks.js<br/>
RTC_Arduino.js<br/>

-Stepper<br/>
Stepper_Blocks.js<br/>
Stepper_Arduino.js<br/>

-Motor<br/>
Motor_Blocks.js<br/>
Motor_Arduino.js<br/>

通讯模块(文件夹命名：communication)蓝色<br/>

-w5500<br/>
w5500_Blocks.js<br/>
w5500_Arduino.js<br/>

-NRF24<br/>
NRF24_Blocks.js<br/>
NRF24_Arduino.js<br/>

-SmartRF<br/>
SmartRF_Blocks.js<br/>
SmartRF_Arduino.js<br/>

-NFC<br/>
NFC_Blocks.js<br/>
NFC_Arduino.js<br/>

-BT<br/>
BT_Blocks.js<br/>
BT_Arduino.js<br/>

-Zigbee<br/>
Zigbee_Blocks.js<br/>
Zigbee_Arduino.js<br/>

-WIFI(ESP)<br/>
WIFI_Blocks.js<br/>
WIFI_Arduino.js<br/>

-GPRS/GSM<br/>
GPRS_GSM_Blocks.js<br/>
GPRS_GSM_Arduino.js<br/>

扩展模块(文件夹命名：extended)绿色<br/>

-OLED<br/>
OLED_Blocks.js<br/>
OLED_Arduino.js<br/>

-TFT<br/>
TFT_Blocks.js<br/>
TFT_Arduino.js<br/>

传感器(文件夹命名：sensor)<br/>

-colorLED<br/>
colorLED_Blocks.js<br/>
colorLED_Arduino.js<br/>

-buzzer<br/>
buzzer_Blocks.js<br/>
buzzer_Arduino.js<br/>

-TEMP&Hum<br/>
tempHum_Blocks.js<br/>
tempHum_Arduino.js<br/>

-Passive Infrared<br/>
PIR_Blocks.js<br/>
PIR_Arduino.js<br/>

-Joystick<br/>
joystick_Blocks.js<br/>
joystick_Arduino.js<br/>

-IR Emitter<br/>
IREmitter_Blocks.js<br/>
IREmitter_Arduino.js<br/>

-IR Receiver<br/>
IRReceiver_Blocks.js<br/>
IRReceiver_Arduino.js<br/>

-LM75<br/>
LM75_Blocks.js<br/>
LM75_Arduino.js<br/>

-开关 key<br/>
key_Blocks.js<br/>
key_Arduino.js<br/>