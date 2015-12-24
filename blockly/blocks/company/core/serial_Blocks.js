'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


Blockly.Blocks.Microduino.HUE=20;

Blockly.Blocks.serialBegin = {
  init: function() {

        var FLIP = [['9600 baud', '9600'],
                    ['38400 baud', '38400'],
                    ['57600 baud', '57600'],
                    ['115200 baud', '115200'],
                    ['300 baud', '300'],
                    ['1200 baud', '1200'],
                    ['2400 baud', '2400'],
                    ['4800 baud', '4800'],
                    ['19200 baud', '19200'],
                    ['230400 baud', '230400'],
                    ['250000 baud', '250000']];

    this.setColour(Blockly.Blocks.Microduino.HUE);

    this.appendDummyInput("")
        .appendTitle(Blockly.serialSetup)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 32))
        .appendField(new Blockly.FieldDropdown(FLIP), 'FLIP')


    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.serialPrint = {
  init: function() {
    //this.setColour(Blockly.Blocks.Microduino.RED);
    this.setColour(Blockly.Blocks.Microduino.HUE);
    

    this.appendDummyInput("")
        .appendTitle(Blockly.ColorLEDControl)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 32))


    this.appendValueInput("serialData")
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    //this.setInputsInline(true);
    },
};