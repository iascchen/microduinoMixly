'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


Blockly.Arduino.Buzzer = function() {
var Frequency = Blockly.Arduino.valueToCode(this, 'Frequency', Blockly.Arduino.ORDER_ATOMIC)
var BuzzerPin = Blockly.Arduino.valueToCode(this, 'BuzzerPin', Blockly.Arduino.ORDER_ATOMIC)
Blockly.Arduino.definitions_['define_BuzzerPin'] = '#define BuzzerPin '+BuzzerPin+'';

Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
Blockly.Arduino.setups_['setup_Buzzer'] = 'pinMode(BuzzerPin,OUTPUT);';

var code='tone(BuzzerPin,'+Frequency+');\n';
code+='delay(1000);\n';
code+='noTone(BuzzerPin);\n';
code+='delay(1000);\n';
return code;
};