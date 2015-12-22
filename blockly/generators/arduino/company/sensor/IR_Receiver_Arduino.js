'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


Blockly.Arduino.Microduino_ir_remote_begin = function() {
var btn_ir = this.getTitleValue('btn');
var ir_r_Pin = Blockly.Arduino.valueToCode(this, 'Pin', Blockly.Arduino.ORDER_ATOMIC)|| '0';
Blockly.Arduino.definitions_['IRremote'] = '#include <IRremote.h>';
Blockly.Arduino.definitions_['RECV_PIN'] = 'IRrecv irrecv('+ir_r_Pin+');';
Blockly.Arduino.definitions_['results'] = 'decode_results results;\n';
Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
Blockly.Arduino.setups_['setup_irrecv'] = 'irrecv.enableIRIn();';

var code='if (irrecv.decode(&results)) {\n'
+'irrecv.resume();\n'
+'Serial.println(results.value, HEX);\n'
+'}\n'

return [code, Blockly.Arduino.ORDER_ATOMIC]||'0';
};

Blockly.Arduino.Microduino_ir_remote = function() {
var btn_ir = this.getTitleValue('btn');
Blockly.Arduino.definitions_['IRremote'] = '#include <IRremote.h>';
Blockly.Arduino.definitions_['results'] = 'decode_results results;\n';
Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
Blockly.Arduino.setups_['setup_irrecv'] = 'irrecv.enableIRIn();';

var code="results.value=="+btn_ir;
/*
var code='if (irrecv.decode(&results)) {\n'
+'irrecv.resume();\n'
+'Serial.println(results.value, HEX);\n'
+'}\n'
*/
return [code, Blockly.Arduino.ORDER_ATOMIC]||'0';
};