'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

Blockly.Blocks.Microduino.HUE = 318;

var mCookie_PORTS =[["Serial0", "Serial"],["Serial1", "Serial1"],["SoftwareSerial(2,3)", "mySerial(2, 3)"],["SoftwareSerial(4,5)", "mySerial(4, 5)"]];

Blockly.Blocks.Zigbee_AT = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput("")
	    .appendTitle(Blockly.Zigbee)
		.appendField(new Blockly.FieldImage("../../media/Microduino/Zigbee.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.Zigbee_SetAT);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.Zigbee_Available = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput("")
	    .appendTitle(Blockly.Zigbee)
		.appendField(new Blockly.FieldImage("../../media/Microduino/Zigbee.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.Zigbee_Available);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.Zigbee_Send = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput("")
	    .appendTitle(Blockly.Zigbee)
		.appendField(new Blockly.FieldImage("../../media/Microduino/Zigbee.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.Zigbee_Send);
	this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("Text:");
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.Zigbee_Read = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput("")
	    .appendTitle(Blockly.Zigbee)
		.appendField(new Blockly.FieldImage("../../media/Microduino/Zigbee.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.Zigbee_Read);
    this.setOutput(true, String);
	this.setInputsInline(true);
  }
};



Blockly.Blocks.VariableIs = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);

   	this.appendValueInput('VariableName', String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.VariableName);
	this.appendValueInput('VariableIs', String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.VariableIs);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  }
};