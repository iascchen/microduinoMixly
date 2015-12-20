'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

Blockly.Arduino.group_lcd_begin = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');

  Blockly.Arduino.definitions_['define_oled'] = '#include "U8glib.h"';
  Blockly.Arduino.definitions_['var_oled'] = 'U8GLIB_SSD1306_128X64 oled(U8G_I2C_OPT_NONE);';
//  Blockly.Arduino.setups_['setup_oled'] = 'df_lcd.init();';
//  Blockly.Arduino.setups_['setup_oled'] = 'df_lcd.backlight();';

  var flip = this.getFieldValue('FLIP');
  var code='oled.'+flip+'();\n';
  code+='oled.firstPage();\n'
  code+='do {\n';
  code+=branch;
  code+='} while( oled.nextPage() );\n';
  return code;
};

Blockly.Arduino.group_lcd_print = function() {
  var str = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC)
  var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC)
  Blockly.Arduino.definitions_['define_oled'] = '#include "U8glib.h"';
  Blockly.Arduino.definitions_['var_oled'] = 'U8GLIB_SSD1306_128X64 oled(U8G_I2C_OPT_NONE);';
//  Blockly.Arduino.setups_['setup_oled'] = 'df_lcd.init();';
//  Blockly.Arduino.setups_['setup_oled'] = 'df_lcd.backlight();';
  var type = this.getFieldValue('TYPE');
  var code='oled.setFont('+type+');\n';
	code+='oled.setPrintPos('+x+', '+y+');\n';
	code+='oled.print('+str+');\n';
  return code;
};
