'use strict';

goog.provide('Blockly.Blocks.texts');

goog.require('Blockly.Blocks');


Blockly.Blocks.texts.HUE = 160;

Blockly.Blocks['text'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {
    //this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, String);
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @private
   */
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};

Blockly.Blocks['text_join'] = {
  init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('A')
        .setCheck(String);
    this.appendValueInput('B')
        .setCheck(String)
        .appendField(Blockly.LKL_TEXT_JOIN);
    this.setInputsInline(true);
	this.setOutput(true, String);
	this.setTooltip(Blockly.LKL_TOOLTIP_TEXT_JOIN);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
	var TO_INT_FLOAT =
        [[Blockly.LKL_TO_INT, 'toInt'],
        [Blockly.LKL_TO_FLOAT, 'toFloat']];
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('VAR')
        .setCheck(String)
		.appendField(new Blockly.FieldDropdown(TO_INT_FLOAT), 'TOWHAT');
	this.setOutput(true, Number);
	var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('TOWHAT');
      var TOOLTIPS = {
        'toInt': Blockly.LKL_TOOLTIP_TEXT_TOINT,
        'toFloat': Blockly.LKL_TOOLTIP_TEXT_TOFLOAT
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['number_to_text'] = {
  init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('VAR')
        .setCheck(Number)
		.appendTitle(Blockly.LKL_TOSTRING);;
	this.setOutput(true, String);
	this.setTooltip(Blockly.LKL_TOOLTIP_TEXT_TOTEXT);
  }
};
