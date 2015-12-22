'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

Blockly.Arduino.mCookie_Motor = function() {
	var direction_motor = this.getTitleValue('direction')
	var speed_Motor = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC)|| '0'
	var code='RobotMotor('+direction_motor+','+speed_Motor+' );\n';
	  Blockly.Arduino.definitions_['define_Pin1'] = '#define motor1_pinB 6';
	  Blockly.Arduino.definitions_['define_Pin2'] = '#define motor1_pinA 8';
	  Blockly.Arduino.definitions_['define_Pin3'] = '#define motor2_pinB 5';
	  Blockly.Arduino.definitions_['define_Pin4'] = '#define motor2_pinA 7';
	  Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
	  Blockly.Arduino.setups_['setup_pinout1'] = 'pinMode(motor1_pinB, OUTPUT);';
	  Blockly.Arduino.setups_['setup_pinout2'] = 'pinMode(motor1_pinA, OUTPUT);';
	  Blockly.Arduino.setups_['setup_pinout3'] = 'pinMode(motor2_pinB, OUTPUT);';
	  Blockly.Arduino.setups_['setup_pinout4'] = 'pinMode(motor2_pinA, OUTPUT);';
	  Blockly.Arduino.setups_['setup_pinout5'] = 'digitalWrite(motor1_pinB, LOW);';
	  Blockly.Arduino.setups_['setup_pinout6'] = 'digitalWrite(motor1_pinA, LOW);';
	  Blockly.Arduino.setups_['setup_pinout7'] = 'digitalWrite(motor2_pinB, LOW);';
	  Blockly.Arduino.setups_['setup_pinout8'] = 'digitalWrite(motor2_pinB, LOW);';
	 var funcName='RobotMotor';

     var code2 ='void ' +funcName+' (int num, int fadeValue){\n'
  +'if (num == 1){\n'
  +  'analogWrite(motor1_pinB, fadeValue);\n'
  +  'digitalWrite(motor1_pinA, LOW);\n'
  +  'analogWrite(motor2_pinB, fadeValue);\n'
  +  'digitalWrite(motor2_pinA, LOW);}\n'
  +'else if (num == 2){\n'
  +  'analogWrite(motor1_pinA, fadeValue);\n'
  +  'digitalWrite(motor1_pinB, LOW);\n'
  +  'analogWrite(motor2_pinA, fadeValue);\n'
  +  'digitalWrite(motor2_pinB, LOW);}\n'
  +'else if (num == 3){\n'
  +  'analogWrite(motor1_pinB, fadeValue);\n'
  +  'analogWrite(motor1_pinA, LOW);\n'
  +  'analogWrite(motor2_pinA, fadeValue);\n'
  +  'digitalWrite(motor2_pinB, LOW);}\n'
  +'else if (num == 4){\n'
  +  'analogWrite(motor1_pinA, fadeValue);\n'
  +  'digitalWrite(motor1_pinB, LOW);\n'
  +  'analogWrite(motor2_pinB, fadeValue);\n'
  +  'digitalWrite(motor2_pinA, LOW);}\n'
  +'else if (num == 5){\n'
  +  'digitalWrite(motor1_pinA, LOW);\n'
  +  'digitalWrite(motor1_pinB, LOW);\n'
  +  'digitalWrite(motor2_pinB, LOW);\n'
  +  'digitalWrite(motor2_pinA, LOW);}\n'
  +'}\n'
  Blockly.Arduino.definitions_[funcName] = code2;
  return code;
};

Blockly.Arduino.mCookie_bluetooth_Robot_Direction = function() {
  var dropdown_pin = this.getTitleValue('PIN')
  var BLE_Run_stye = this.getTitleValue('direction')
  var code='BLE_Joystick('+BLE_Run_stye+')';

  Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  if(dropdown_pin=='Serial'||dropdown_pin=='Serial1')
  Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial '+dropdown_pin;
  else
  {
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial '+ dropdown_pin+';';
  Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial  mySerial';  
  }

  Blockly.Arduino.definitions_['define_stiring'] = 'String currentInfo;';
  Blockly.Arduino.definitions_['define_data'] = 'char senderData[100];';
  Blockly.Arduino.definitions_['define_as'] = 'int angle = 90, angle1 = 90, angle2 = 90;';
  Blockly.Arduino.definitions_['define_sp'] = 'int speed = 0, speed1 = 0, speed2 = 0;';
  Blockly.Arduino.definitions_['define_lage'] = '#define lage 20\n';

  Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';

  var joyName='BLE_Joystick';
  var min='\''+'\\'+'n'+'\'';
  var code1 = 'int ' +joyName+'(int num){\n'
  +'if('+dropdown_pin+'.available() > 0) \n'
  +'currentInfo = my_Serial.readStringUntil('+min+');\n'
  +'if (currentInfo != NULL) {\n'
  +'currentInfo.toCharArray(senderData, sizeof(senderData));\n'
  +'sscanf((char *)strstr((char *)senderData, "D:"), "D:%d,%d", &angle, &speed);\n'
  +'}\n'
  +  'if (0 < angle && angle < 90 - lage || 90 + lage < angle && angle < 180){\n'
  +  'if (0 < angle && angle < 90 - lage)\n'
  +    'angle1 = map(angle, 0, 90 - lage, 255, 0);\n'
  +  'else if (90 + lage < angle && angle < 180)\n'
  +   'angle2 = map(angle, 90 + lage, 180 , 0, 255);}\n'
  +'if (-255 < speed && speed < -lage || lage < speed && speed < 255){\n'
  +  'if (-255 < speed && speed < -lage)\n'
  +    'speed1 = map(speed, -255, -lage , 255, 0);\n'
  +  'else if (lage < speed && speed < 255)\n'
  +    'speed2 = map(speed, lage, 255, 0, 255);}\n'
  +'if (num == 1)\n'
  +  'return angle1;\n'
  +'else if (num == 2)\n'
  +  'return angle2;\n'
  +'else if (num == 3)\n'
  +  'return speed1;\n'
  +'else if (num == 4)\n'
  +  'return speed2;}\n'
  Blockly.Arduino.definitions_[joyName] = code1;
  return [code, Blockly.Arduino.ORDER_ATOMIC]|| '0';
 };
