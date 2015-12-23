'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


Blockly.Blocks.Microduino.HUE = 518;


Blockly.Blocks.Buzzer = {	
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);

    this.appendDummyInput("")
	    .appendTitle(Blockly.Buzzer)
		.appendField(new Blockly.FieldImage("../../media/Microduino/Buzzer.jpg", 45, 32))
  	
  	this.appendValueInput("BuzzerPin", Number)
  		.setCheck(Number)
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendTitle(Blockly.BuzzerPin);
  	this.appendValueInput("Frequency", Number)
  		.setCheck(Number)
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendTitle(Blockly.Frequency);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};