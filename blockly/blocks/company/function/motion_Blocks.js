'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


Blockly.Blocks.Microduino.HUE = 65;


Blockly.Blocks.motionBegin = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);

    this.appendDummyInput("")
        .appendTitle(Blockly.ColorLEDInit)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32))

    // this.appendValueInput("LEDNumber", Number)
    //     .setCheck(Number)
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendTitle(Blockly.ColorLEDNumber);
    // this.appendValueInput("LEDPin", Number)
    //     .setCheck(Number)
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendTitle(Blockly.ColorLEDPin);

    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};




Blockly.Blocks.accX = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.accX);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};
Blockly.Blocks.accY = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.accY);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};
Blockly.Blocks.accZ = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.accZ);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};

Blockly.Blocks.gyroX = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.gyroX);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};
Blockly.Blocks.gyroY = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.gyroY);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};
Blockly.Blocks.gyroZ = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.gyroZ);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};
Blockly.Blocks.tabSpace = {
  init: function() {
    this.setColour(Blockly.Blocks.Microduino.HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.tabSpace);
    //this.setOutput(true, Number);
    this.setOutput(true, String);
  }
};

// Blockly.Blocks.ax = {
//   init: function() {
//     this.setColour(Blockly.Blocks.Microduino.HUE);

//     this.appendDummyInput("")
//         .appendTitle("ax")

//         //.appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32))

//     // this.appendValueInput("LEDNumber", Number)
//     //     .setCheck(Number)
//     //     .setAlign(Blockly.ALIGN_RIGHT)
//     //     .appendTitle(Blockly.ColorLEDNumber);
//     // this.appendValueInput("LEDPin", Number)
//     //     .setCheck(Number)
//     //     .setAlign(Blockly.ALIGN_RIGHT)
//     //     .appendTitle(Blockly.ColorLEDPin);

//     //this.appendStatementInput('DO')
//     // this.setPreviousStatement(true, null);
//     // this.setNextStatement(true, null);
// //    this.setTooltip("test");  
//     //this.setInputsInline(true);
//     },
// };



Blockly.Blocks.motionDoing = {
  init: function() {
    //var FLIP = [['none', 'undoRotation'],['90', 'setRot90'],['180', 'setRot180'],['270', 'setRot270']];

    this.setColour(Blockly.Blocks.Microduino.HUE);


    this.appendDummyInput("")
        .appendTitle("Motion:")
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 32))

    this.appendValueInput("ax", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.accX);
    this.appendValueInput("ay", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.accY);
    this.appendValueInput("az", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.accZ);

    this.appendValueInput("gx", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.gyroX);
    this.appendValueInput("gy", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.gyroY);
    this.appendValueInput("gz", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.gyroZ);




    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};