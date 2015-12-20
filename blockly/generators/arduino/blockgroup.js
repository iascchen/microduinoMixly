'use strict';

goog.provide('Blockly.Arduino.blockgroup');

goog.require('Blockly.Arduino');

Blockly.Arduino.serial_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"'
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.print('+content+');\n';
  return code;
};

Blockly.Arduino.serial_println = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"'
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+');\n';
  return code;
};

Blockly.Arduino.serial_print_hex = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+',HEX);\n';
  return code;
};

Blockly.Arduino.serial_available = function() {
   Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
   var code ="Serial.available() > 0";
   return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_readstr = function() {
   Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
   var code ="Serial.readString()";
   return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_parseInt_Float = function() {
   Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
   var dropdown_stat = this.getTitleValue('STAT');
   var code ='Serial.'+dropdown_stat+'()';
   return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ir_recv = function() {
   var variable = Blockly.Arduino.variableDB_.getName(this.getTitleValue('VAR'), Blockly.Variables.NAME_TYPE);
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var branch = Blockly.Arduino.statementToCode(this, 'DO');
   var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
   var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
   Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
   //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
   Blockly.Arduino.definitions_['var_ir_recv'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\ndecode_results results_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');';
   Blockly.Arduino.setups_['setup_ir_recv_'+dropdown_pin] = 'irrecv_'+dropdown_pin+'.enableIRIn();\n';
   var code="if (irrecv_"+dropdown_pin+".decode(&results_"+dropdown_pin+")) {\n"
   code += '  '+variable+'=results_'+dropdown_pin+'.value;\n';
   code += '  String type="UNKNOWN";\n';
   ////////////////////////////////////////////////////////////////
   code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
   code += '  if(results_'+dropdown_pin+'.decode_type>=1&&results_'+dropdown_pin+'.decode_type<=13){\n';
   code += '    type=typelist[results_'+dropdown_pin+'.decode_type];\n'
   code += '  }\n';
   ////////////////////////////////////////////////////////////////
   //code += '  switch(results_'+dropdown_pin+'.decode_type) {\n';
   //code += '  case NEC:\n';
   //code += '  	type="NEC";\n';
   //code += '  	break;\n';
   //code += '  case WHYNTER:\n';
   //code += '  	type="WHYNTER";\n';
   //code += '  	break;\n';
   //code += '  case SONY:\n';
   //code += '  	type="SONY";\n';
   //code += '  	break;\n';
   //code += '  case RC5:\n';
   //code += '  	type="RC5";\n';
   //code += '  	break;\n';
   //code += '  case RC6:\n';
   //code += '  	type="RC6";\n';
   //code += '  	break;\n';
   //code += '  case DISH:\n';
   //code += '  	type="DISH";\n';
   //code += '  	break;\n';
   //code += '  case SHARP:\n';
   //code += '  	type="SHARP";\n';
   //code += '  	break;\n';
   //code += '  case SAMSUNG:\n';
   //code += '  	type="SAMSUNG";\n';
   //code += '  	break;\n';
   //code += '  default:\n';
   //code += '  	type="UNKNOWN";\n';
   //code += '  }\n';
   ////////////////////////////////////////////////////////////////
   code += '  Serial.print("IR TYPE:"+type+"  ");\n';
   code += branch;
   code +='  irrecv_'+dropdown_pin+'.resume();\n'
   code +='} else {\n';
   code +=branch2;
   code +='}\n';
   return code;
};

Blockly.Arduino.ir_send_nec = function() {
	Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
	Blockly.Arduino.definitions_['var_ir_send'] = 'IRsend irsend;\n';
	var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) || '0';
	var bits = Blockly.Arduino.valueToCode(this, 'bits',Blockly.Arduino.ORDER_ATOMIC) || '0';
	var type = this.getFieldValue('TYPE');
	var code='irsend.send'+type+'('+data+','+bits+');\n';
	return code;
}

Blockly.Arduino.ir_recv_raw = function() {
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
   Blockly.Arduino.definitions_['var_ir_recv'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\ndecode_results results_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
   Blockly.Arduino.setups_['setup_ir_recv_'+dropdown_pin] = 'irrecv_'+dropdown_pin+'.enableIRIn();\n';
   var code="if (irrecv_"+dropdown_pin+".decode(&results_"+dropdown_pin+")) {\n"
   code += '  '+'dumpRaw(&results_'+dropdown_pin+');\n';
   code +='  irrecv_'+dropdown_pin+'.resume();\n'
   code +='}\n';
   var funcode='void dumpRaw(decode_results *results) {\n' 
	+ '  int count = results->rawlen;\n'
	+ '  Serial.print("RawData (");\n'
	+ '  Serial.print(count, DEC);\n'
	+ '  Serial.print("): ");\n'
	+ '  for (int i = 0; i < count; i++) {\n'
	+ '    Serial.print(results->rawbuf[i]*USECPERTICK, DEC);\n'
	+ '    if(i!=count-1){\n'
	+ '      Serial.print(",");\n'
	+ '    }\n'
	+ '  }\n'
	+ '  Serial.println("");\n'
	+ '}\n';
   Blockly.Arduino.definitions_['dumpRaw'] = funcode;
   return code;
};

Blockly.Arduino.ir_send_raw = function() {
	Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
	Blockly.Arduino.definitions_['var_ir_send'] = 'IRsend irsend;\n';
	var length = Blockly.Arduino.valueToCode(this, 'length',Blockly.Arduino.ORDER_ATOMIC) || '0';
	var freq = Blockly.Arduino.valueToCode(this, 'freq',Blockly.Arduino.ORDER_ATOMIC) || '0';
	var text = this.getTitleValue('TEXT');
	var code='unsigned int buf_raw['+length+']={'+text+'};\n'
	code=code+'irsend.sendRaw(buf_raw,'+length+','+freq+');\n';
	return code;
}

Blockly.Arduino.i2c_master_writer = function() {
   Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
   Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();\n';
   var device = Blockly.Arduino.valueToCode(this, 'device',Blockly.Arduino.ORDER_ATOMIC) || '0';
   var value = Blockly.Arduino.valueToCode(this, 'value',Blockly.Arduino.ORDER_ATOMIC) || '0';
   var code ="Wire.beginTransmission("+device+");\n";
   code += "Wire.write("+value+");\n";
   code += "Wire.endTransmission();\n";
   return code;
};
Blockly.Arduino.i2c_master_reader = function() {
   Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>\n';
   Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();\n';
   var device = Blockly.Arduino.valueToCode(this, 'device',Blockly.Arduino.ORDER_ATOMIC) || '0';
   var bytes = Blockly.Arduino.valueToCode(this, 'bytes',Blockly.Arduino.ORDER_ATOMIC) || '0';
   var code ="Wire.requestFrom("+device+", "+bytes+");\n";
   return code;
};
Blockly.Arduino.i2c_master_reader2 = function() {
   Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>\n';
   Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();\n';
   var code ="Wire.read()";
   return [code,Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.i2c_available = function() {
   Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>\n';
   Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();\n';
   var code ="Wire.available()";
   return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.chaoshengbo = function() {
	var dropdown_pin1 = this.getTitleValue('PIN1');
	var dropdown_pin2 = this.getTitleValue('PIN2');
	Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
	Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', INPUT);';
	var funcName='checkdistance_'+dropdown_pin1+'_'+dropdown_pin2;
	var code='float'+ ' ' + funcName + '() {\n' 
	+ '  digitalWrite('+dropdown_pin1+', LOW);\n' +'  delayMicroseconds(2);\n'
	+ '  digitalWrite('+dropdown_pin1+', HIGH);\n'+'  delayMicroseconds(10);\n'
	+ '  digitalWrite('+dropdown_pin1+', LOW);\n'
	+ '  float distance = pulseIn('+dropdown_pin2+', HIGH) / 58.00;\n'
	+ '  delay(10);\n'+'  return distance;\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
	return [funcName+'()', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.chaoshengbo2 = function() {
	var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
	Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', INPUT);';
	var funcName='checkdistance_'+dropdown_pin1+'_'+dropdown_pin2;
	var code='float'+ ' ' + funcName + '() {\n' 
	+ '  digitalWrite('+dropdown_pin1+', LOW);\n' +'  delayMicroseconds(2);\n'
	+ '  digitalWrite('+dropdown_pin1+', HIGH);\n'+'  delayMicroseconds(10);\n'
	+ '  digitalWrite('+dropdown_pin1+', LOW);\n'
	+ '  float distance = pulseIn('+dropdown_pin2+', HIGH) / 58.00;\n'
	+ '  delay(10);\n'+'  return distance;\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
	return [funcName+'()', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.dht11 = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
	var what = this.getTitleValue('WHAT');
	Blockly.Arduino.definitions_['define_dht11'] = '#include <dht11.h>';
	Blockly.Arduino.definitions_['var_dht11'+dropdown_pin] = 'dht11 myDHT_'+dropdown_pin+';';
	var funcName='dht_'+dropdown_pin+'_get'+what;
	var code='int'+ ' ' + funcName + '() {\n' 
	+ '  int chk = myDHT_'+dropdown_pin+'.read('+dropdown_pin+');\n'
	+ '  int value = myDHT_'+dropdown_pin+'.'+what+';\n'
	+ '  return value;\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
	return [funcName+'()', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.servo_move = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.servo_read_degrees = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.controls_tone=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.controls_tone2=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.controls_notone=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var code="noTone("+dropdown_pin+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};