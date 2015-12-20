'use strict';

goog.provide('Blockly.Blocks.blockgroup');

goog.require('Blockly.Blocks');

Blockly.Blocks.blockgroup.HUE = 120;

Blockly.Blocks['serial_print'] = {
  init: function() {
   this.setColour(Blockly.Blocks.blockgroup.HUE);
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.LKL_SERIAL_PRINT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_println'] = {
   init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.LKL_SERIAL_PRINTLN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
  }
};
//��ӡ16������
Blockly.Blocks['serial_print_hex'] = {
   init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
    this.appendValueInput("CONTENT", Number)
        .appendTitle(Blockly.LKL_SERIAL_PRINT_HEX)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.TEXT_PRINT_HEX_TOOLTIP);
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput()
        .appendTitle(Blockly.LKL_SERIAL_AVAILABLE);
	this.setOutput(true, Boolean);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_SERIAL_AVAILABLE);
  }
};

Blockly.Blocks['serial_readstr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput()
        .appendTitle(Blockly.LKL_SERIAL_READSTR);
	this.setOutput(true, String);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_SERIAL_READ_STR);
  }
};

Blockly.Blocks['serial_parseInt_Float'] = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput()
        .appendTitle(Blockly.LKL_SERIAL_READ)
		.appendTitle(new Blockly.FieldDropdown([[Blockly.LKL_SERIAL_READ_INT, "parseInt"], [Blockly.LKL_SERIAL_READ_FLOAT, "parseFloat"]]), "STAT");
	this.setOutput(true, Number);
	var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('STAT');
      var TOOLTIPS = {
        'parseInt': Blockly.LKL_TOOLTIP_BLOCKGROUP_SERIAL_READ_INT,
        'parseFloat': Blockly.LKL_TOOLTIP_BLOCKGROUP_SERIAL_READ_FLOAT
      };
      return TOOLTIPS[op];
    });
  }
};

//�������ģ��
Blockly.Blocks.ir_recv = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
		.appendTitle(new Blockly.FieldTextInput('ir_item'), 'VAR')
        .appendTitle(Blockly.LKL_IR_RECEIVE)
        .setCheck(Number);
	this.appendStatementInput('DO')
        .appendTitle(Blockly.LKL_IR_RECEIVE_YES);
	this.appendStatementInput('DO2')
        .appendTitle(Blockly.LKL_IR_RECEIVE_NO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_IR_RECIEVE_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};
//���ⷢ��ģ�飨NEC��
Blockly.Blocks.ir_send_nec={
	init:function(){
		var TYPE = [['NEC', 'NEC'],['Whynter', 'Whynter'],['Sony', 'Sony'],['RC5', 'RC5'],['RC6', 'RC6'],['DISH', 'DISH'],['SharpRaw', 'SharpRaw'],['SAMSUNG', 'SAMSUNG']];
		this.setColour(Blockly.Blocks.blockgroup.HUE);
		this.appendDummyInput("")
			.appendTitle(Blockly.LKL_IR_SEND_NEC1)
			.appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
			.appendTitle(Blockly.LKL_IR_SEND_NEC2)
			.appendTitle(new Blockly.FieldDropdown([["3", "3"]]), "PIN");
		this.appendValueInput('data')
			.setCheck(Number)
			.appendTitle(' '+Blockly.LKL_DATA);
		this.appendValueInput('bits')
			.setCheck(Number)
			.appendTitle(' '+Blockly.LKL_BITS);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
		this.setTooltip(Blockly.LKL_IR_SEND_NEC_TOOLTIP);
	}
}

//�������ģ��(raw)
Blockly.Blocks.ir_recv_raw = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_IR_RECEIVE_RAW)
        .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_IR_RECIEVE_RAW_TOOLTIP);
  }
};

//���ⷢ��ģ��(raw)
Blockly.Blocks.ir_send_raw = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_IR_SEND_RAW)
	    .appendTitle(new Blockly.FieldDropdown([["3", "3"]]), "PIN");
    this.appendDummyInput("")
        .appendTitle(' '+Blockly.LKL_LIST_NAME)
        .appendTitle(new Blockly.FieldTextInput('0,0,0'), 'TEXT');
	this.appendValueInput('length')
        .setCheck(Number)
        .appendTitle(' '+Blockly.LKL_LIST_LENGTH);
	this.appendValueInput('freq')
        .setCheck(Number)
        .appendTitle(' '+Blockly.LKL_FREQUENCY);
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_IR_SEND_RAW_TOOLTIP);
  }
};

//I2Cͨ��
Blockly.Blocks.i2c_master_writer = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput('device')
        .setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_I2C_MASTER_WRITE);
	this.appendValueInput('value')
        .setCheck([Number,String])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendTitle(Blockly.LKL_I2C_VALUE);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.i2c_master_reader = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput('device')
        .setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_I2C_MASTER_READ);
	this.appendValueInput('bytes')
        .setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendTitle(Blockly.LKL_I2C_BYTES);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.i2c_master_reader2 = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput()
        .appendTitle(Blockly.LKL_I2C_MASTER_READ2);
	this.setOutput(true, Number);
  }
};
Blockly.Blocks.i2c_available = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput()
        .appendTitle(Blockly.LKL_I2C_AVAILABLE);
	this.setOutput(true, Boolean);
  }
};

//���������
Blockly.Blocks.chaoshengbo={
	init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_CHAOSHENGBO)
	    .appendTitle('Trig#')
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN1")
		.appendTitle(' Echo#')
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN2");
	this.setOutput(true, Number);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

Blockly.Blocks.chaoshengbo2={
	init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_CHAOSHENGBO);
	this.appendValueInput("PIN1", Number)
        .appendTitle('Trig#')
        .setCheck(Number);
	this.appendValueInput("PIN2", Number)
        .appendTitle('Echo#')
        .setCheck(Number);
	this.setInputsInline(true);
	this.setOutput(true, Number);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

//DHT11������
Blockly.Blocks.dht11={
	init: function() {
	var WHAT = [[Blockly.LKL_DHT11_T, 'temperature'],[Blockly.LKL_DHT11_H, 'humidity']];
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_DHT11)
        .setCheck(Number);
	this.appendDummyInput("")
	    .appendTitle(new Blockly.FieldDropdown(WHAT), "WHAT");
	this.setOutput(true, Number);
	var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('WHAT');
      var TOOLTIPS = {
        'temperature': Blockly.LKL_TOOLTIP_BLOCKGROUP_DHT11_TEM,
        'humidity': Blockly.LKL_TOOLTIP_BLOCKGROUP_DHT11_HUM
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks.servo_move = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_SERVO)
        .appendTitle(Blockly.LKL_PIN)
        .setCheck(Number);
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_DEGREE_0_180);
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_DELAY+'('+Blockly.LKL_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks.servo_read_degrees = {
  init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_SERVO)
        .appendTitle(Blockly.LKL_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_READ_DEGREES)
    this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_SERVO_READ);
  }
};

Blockly.Blocks.controls_tone={
init:function(){
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_TONE_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_FREQUENCY);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_TONE);
  }
};

Blockly.Blocks.controls_tone2={
init:function(){
    this.setColour(Blockly.Blocks.blockgroup.HUE);
    this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_TONE_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_FREQUENCY);
    this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LKL_DURATION);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_TONE2);
  }
};

Blockly.Blocks.controls_notone={
init:function(){
    this.setColour(Blockly.Blocks.blockgroup.HUE);
	this.appendValueInput("PIN", Number)
        .appendTitle(Blockly.LKL_NOTONE_PIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.LKL_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};