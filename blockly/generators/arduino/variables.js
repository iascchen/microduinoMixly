'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


Blockly.Arduino.variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_declare = function() {
  var dropdown_type = this.getTitleValue('TYPE');
  var argument0;
  //TODO: settype to variable
  if(dropdown_type=='String'){
	argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
  }else{
    argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  }
  var varName = Blockly.Arduino.variableDB_.getName(this.getTitleValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  //Blockly.Arduino.definitions_['var_declare'+varName] = dropdown_type+' '+varName+';\n';
  Blockly.Arduino.setups_['setup_var'+varName] = varName + ' = ' + argument0 + ';\n';
  Blockly.Arduino.variableTypes_[varName] = dropdown_type;//处理变量类型
  return '';
};

Blockly.Arduino.variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};
