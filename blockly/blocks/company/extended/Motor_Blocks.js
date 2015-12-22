'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//Blockly.Blocks.Microduino.HUE = 318;
Blockly.Blocks.Microduino.GRE = 120;

Blockly.Blocks.mCookie_Motor = {
   init: function() {
    this.setColour(Blockly.Blocks.Microduino.GRE);
    this.appendDummyInput("")
        .appendTitle(Blockly.CubeCar)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Motor.jpg", 45, 32))
        .appendTitle(new Blockly.FieldDropdown([[Blockly.LKL_FORWARD, "1"], [Blockly.LKL_BACKWARD, "2"],[Blockly.LKL_TURNLEFT, "3"],[Blockly.LKL_TURNRIGHT, "4"],[Blockly.LKL_STOP, "5"]]), 'direction')
    this.appendValueInput('speed')
		.setCheck(Number)
		.appendTitle(Blockly.LKL_MBOT_SPEED);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
    }
};
