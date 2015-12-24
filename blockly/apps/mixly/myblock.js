var myblock='<sep></sep><category colour="290" name="智能小车"><block type="procedures_defnoreturn" collapsed="true" x="-79" y="-361"><field name="NAME">goAhead</field><statement name="STACK"><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">5</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">6</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">9</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">10</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" collapsed="true" x="-76" y="-326"><field name="NAME">goBack</field><statement name="STACK"><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">5</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">6</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">9</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">10</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" collapsed="true" x="-76" y="-290"><field name="NAME">turnLeft</field><statement name="STACK"><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">5</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">6</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">9</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">10</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" collapsed="true" x="-77" y="-252"><field name="NAME">turnRight</field><statement name="STACK"><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">5</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">6</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">9</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">255</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">10</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" collapsed="true" x="-78" y="-215"><field name="NAME">stop</field><statement name="STACK"><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">5</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">6</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">9</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="inout_analog_write"><value name="PIN"><block type="pins_pwm"><field name="PIN">10</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" collapsed="true" x="-80" y="-178"><field name="NAME">palySound</field><statement name="STACK"><block type="controls_for"><field name="VAR">i</field><field name="STEP">1</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">5</field></block></value><statement name="DO"><block type="df_buzzer"><field name="STAT">HIGH</field><value name="PIN"><block type="pins_digital"><field name="PIN">2</field></block></value><next><block type="base_delay"><field name="UNIT">delay</field><value name="DELAY_TIME"><block type="math_number"><field name="NUM">200</field></block></value><next><block type="df_buzzer"><field name="STAT">LOW</field><value name="PIN"><block type="pins_digital"><field name="PIN">2</field></block></value><next><block type="base_delay"><field name="UNIT">delay</field><value name="DELAY_TIME"><block type="math_number"><field name="NUM">200</field></block></value></block></next></block></next></block></next></block></statement></block></statement></block><block type="chaoshengbo2" x="-62" y="-138"><value name="PIN1"><shadow type="pins_digital"><field name="PIN">1</field></shadow><block type="pins_digital"><field name="PIN">7</field></block></value><value name="PIN2"><shadow type="pins_digital"><field name="PIN">2</field></shadow><block type="pins_digital"><field name="PIN">8</field></block></value></block></category>';
var company_block='<sep></sep><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/communication/BT_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/BT_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/communication/Zigbee_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/communication/Zigbee_Arduino.js"></script><category id="catMicroduinoCommunication" colour="210"><block type="controls_if"><value name="IF0"><block type="mCookie_bluetooth_available"></block></value><statement name="DO0"></statement></block><block type="mCookie_bluetooth_readString"></block><!--Zigbee--><block type="Zigbee_AT"></block><block type="Zigbee_Send"><value name="text"><block type="text"><field name="TEXT">hello Microduino</field></block></value></block><block type="Zigbee_Read"></block><block type="controls_if"><value name="IF0"><block type="Zigbee_Available"></block></value><statement name="DO0"></statement></block><block type="VariableIs"><value name="VariableIs"><block type="text"><field name="VariableIs">AA</field></block></value></block></category><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/core/serial_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/core/serial_Arduino.js"></script><category id="catMicroduinoCore" colour="1"><block type="serialBegin"></block><block type="serialPrint"></block></category><!-- type="company" block="block/dfrobot.js" generator="generator/dfrobot.js"  lib="" --><script type="text/javascript" src="../../blocks/company/dfrobot.js"></script><script type="text/javascript" src="../../generators/arduino/company/dfrobot.js"></script><category id="catDFRobot" name="DFRobot" colour="20"><block type="df_romeo_motor"><value name="speed"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="df_romeo_motor_stop"></block><block type="df_led"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_buzzer"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_buzzer2"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_buzzer3"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_relay"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_btn"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_vibration"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_tilt"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_touch"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_magnetic"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_pyroelectric_infrared"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_joystick_d"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="df_joystick_a"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_potentiometer"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_rotation"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_voltage"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_piezo_disk_virbration"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_sound"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_light"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_grayscale"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_flame"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_temperature"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_accelerometer"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_moisture"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_water"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_co"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_Sharp_GP2Y0A21"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="df_lcd_print"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><value name="TEXT2"><block type="text"><field name="TEXT"></field></block></value></block><block type="df_lcd_power"></block></category><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/extended/OLED_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/OLED_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/extended/Motor_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/extended/Motor_Arduino.js"></script><category id="catMicroduinoExtended" colour="120"><block type="group_lcd_begin">//pkj</block><block type="group_lcd_print"><value name="x"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="text"><block type="text"><field name="TEXT">hello Microduino</field></block></value></block><block type="mCookie_Motor"><value name="speed"><block type="math_number"><field name="NUM">100</field></block></value></block></category><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/function/Audio_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/Audio_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/RTC_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/RTC_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/function/motion_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/function/motion_Arduino.js"></script><category id="catMicroduinoFunction" colour="65"><!--Motion妯″潡--><block type="motionBegin"></block><block type="accX"></block><block type="accY"></block><block type="accZ"></block><block type="gyroX"></block><block type="gyroY"></block><block type="gyroZ"></block><block type="tabSpace"></block><block type="motionDoing"><value name="ax"><block type="accX"></block></value><value name="ay"><block type="accY"></block></value><value name="az"><block type="accZ"></block></value><value name="gx"><block type="gyroX"></block></value><value name="gy"><block type="gyroY"></block></value><value name="gz"><block type="gyroZ"></block></value></block><!--audio妯″潡--><block type="mCookie_Audio_Serial"><value name="Vol"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block><block type="mCookie_Audio_Play"></block><block type="mCookie_Audio_Pose"></block><block type="mCookie_Audio_Next"></block><block type="mCookie_Audio_Prev"></block><block type="mCookie_Audio_VolUp"></block><block type="mCookie_Audio_VolDown"></block><!--RTC妯″潡--><block type="mCookie_RTC_set"><value name="Year"><block type="math_number"><field name="NUM">15</field></block></value><value name="Mouth"><block type="math_number"><field name="NUM">10</field></block></value><value name="Day"><block type="math_number"><field name="NUM">5</field></block></value><value name="Week"><block type="math_number"><field name="NUM">1</field></block></value><value name="Hour"><block type="math_number"><field name="NUM">10</field></block></value><value name="Minute"><block type="math_number"><field name="NUM">5</field></block></value><value name="Second"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="mCookie_RTC_date"></block><block type="mCookie_RTC_time"></block><block type="mCookie_RTC_Week"></block><block type="mCookie_RTC_Hour"></block><block type="mCookie_RTC_Minute"></block><block type="mCookie_RTC_Second"></block></category><!-- type="company" block="block/makeblock.js" generator="generator/makeblock.js"  lib="" --><script type="text/javascript" src="../../blocks/company/makeblock.js"></script><script type="text/javascript" src="../../generators/arduino/company/makeblock.js"></script><category id="catMakeBlock" name="MakeBlock" colour="120"><block type="mb_servo_move"><value name="DEGREE"><block type="math_number"><field name="NUM">0</field></block></value><value name="DELAY_TIME"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="controls_if"><value name="IF0"><block type="mb_bluetooth_available"></block></value><statement name="DO0"><block type="serial_println"><value name="CONTENT"><block type="mb_bluetooth_readString"></block></value></block></statement></block><block type="mb_display"><value name="num"><block type="math_number"><field name="NUM">1234</field></block></value></block><block type="mb_motor"><value name="speed"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="mb_sound"></block><block type="mb_temperature"></block><block type="mb_joystick"></block><block type="mb_potentiometer"></block><block type="mb_pyroelectric_infrared"></block><block type="mb_chaoshengbo"></block><block type="mb_light_grayscale"></block><block type="mb_light_grayscale_led"></block></category><!-- type="company" block="block/mbot.js" generator="generator/mbot.js"  lib="" --><script type="text/javascript" src="../../blocks/company/mbot.js"></script><script type="text/javascript" src="../../generators/arduino/company/mbot.js"></script><category id="catmBot" name="mBot" colour="210"><block type="mbot_move"><value name="speed"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="mbot_motor"><value name="speed"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="mbot_servo_move"><value name="DEGREE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="mbot_led"><value name="R"><block type="math_number"><field name="NUM">0</field></block></value><value name="G"><block type="math_number"><field name="NUM">0</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="mbot_tone"><value name="FREQUENCY"><block type="math_number"><field name="NUM">1000</field></block></value></block><block type="mbot_notone"></block><block type="mbot_showface_text"><value name="x"><block type="math_number"><field name="NUM">0</field></block></value><value name="y"><block type="math_number"><field name="NUM">0</field></block></value><field name="text">Hello</field></block><block type="mbot_showface_time"><value name="h"><block type="math_number"><field name="NUM">10</field></block></value><value name="m"><block type="math_number"><field name="NUM">20</field></block></value></block><block type="mbot_display"><value name="value"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="mbot_set_light_senser_led"></block><block type="mbot_set_camera"></block><block type="mbot_light_sensor"></block><block type="mbot_button"></block><block type="mbot_chaoshengbo"></block><block type="mbot_line_follower"></block><block type="mbot_joystick"></block><block type="mbot_potentiometer"></block><block type="mbot_sound_sensor"></block><block type="mbot_limit_switch"></block><block type="mbot_temperature"></block><block type="mbot_pir_motion_sensor"></block><block type="mbot_ir_remote"></block><block type="mbot_send_message"><value name="text"><block type="text"><field name="TEXT">hello</field></block></value></block><block type="mbot_message_received"></block></category><!-- type="company" block="block/seeed.js" generator="generator/seeed.js"  lib="" --><script type="text/javascript" src="../../blocks/company/seeed.js"></script><script type="text/javascript" src="../../generators/arduino/company/seeed.js"></script><category id="catSeeed" name="SeeedStudio" colour="65"><block type="seeed_servo_move"><value name="PIN"><shadow type="pins_digital"></shadow></value><value name="DEGREE"><block type="math_number"><field name="NUM">0</field></block></value><value name="DELAY_TIME"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="seeed_servo_read_degrees"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_led"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_buzzer"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_relay"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_btn"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_tilt"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_touch"><value name="PIN"><shadow type="pins_digital"></shadow></value></block><block type="seeed_rotation"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="seeed_sound"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="seeed_light"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="seeed_temperature"><value name="PIN"><shadow type="pins_analog"></shadow></value></block><block type="grove_serial_lcd_print"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><value name="TEXT2"><block type="text"><field name="TEXT"></field></block></value></block><block type="grove_serial_lcd_print2"><value name="row"><block type="math_number"><field name="NUM">1</field></block></value><value name="column"><block type="math_number"><field name="NUM">1</field></block></value><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value></block><block type="grove_serial_lcd_power"></block><block type="grove_serial_lcd_setrgb"><value name="R"><block type="math_number"><field name="NUM">255</field></block></value><value name="G"><block type="math_number"><field name="NUM">255</field></block></value><value name="B"><block type="math_number"><field name="NUM">255</field></block></value></block></category><!-- type="company" block="block/Microduino.js" generator="generator/Microduino.js"  lib="" --><script type="text/javascript" src="../../blocks/company/sensor/colorLED_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/colorLED_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/IR_Receiver_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/IR_Receiver_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/Buzzer_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/Buzzer_Arduino.js"></script><script type="text/javascript" src="../../blocks/company/sensor/Tem_Hum_Blocks.js"></script><script type="text/javascript" src="../../generators/arduino/company/sensor/Tem_Hum_Arduino.js"></script><category id="catMicroduinoSensor" colour="518"><!--colorLED--><block type="ws2812Begin"><value name="LEDNumber"><block type="math_number"><field name="NUM">1</field></block></value><value name="LEDPin"><block type="math_number"><field name="NUM">6</field></block></value></block><block type="ws2812Doing"><value name="LEDIndex"><block type="math_number"><field name="NUM">0</field></block></value><value name="R"><block type="math_number"><field name="NUM">255</field></block></value><value name="G"><block type="math_number"><field name="NUM">255</field></block></value><value name="B"><block type="math_number"><field name="NUM">255</field></block></value></block><!--IR Reciver--><block type="Microduino_ir_remote_begin"><value name="Pin"><block type="math_number"><field name="NUM">6</field></block></value></block><block type="controls_if"><value name="IF0"><block type="Microduino_ir_remote"></block></value><statement name="DO0"></statement></block><!--TEMP HUM--><block type="mCookie_AM2321"></block><!--BUZZER--><block type="Buzzer"><value name="BuzzerPin"><block type="math_number"><field name="NUM">6</field></block></value><value name="Frequency"><block type="math_number"><field name="NUM">200</field></block></value></block></category><!-- type="company" block="block/labplusrobot.js" generator="generator/labplusrobot.js"  lib="" --><script type="text/javascript" src="../../blocks/company/labplusrobot.js"></script><script type="text/javascript" src="../../generators/arduino/company/labplusrobot.js"></script><category id="catSense2" colour="330"><block type="labplusrobot_movement"></block><block type="labplusrobot_turn"><value name="degree"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="labplusrobot_display"></block><block type="labplusrobot_led_top"></block><block type="labplusrobot_led_side"><value name="R"><block type="math_number"><field name="NUM">0</field></block></value><value name="G"><block type="math_number"><field name="NUM">0</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></category><!-- type="company" block="block/sense.js" generator="generator/sense.js"  lib="" --><script type="text/javascript" src="../../blocks/company/sense.js"></script><script type="text/javascript" src="../../generators/arduino/company/sense.js"></script><category id="catSense" colour="160"><block type="sense_motor_speed"><value name="speed"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="sense_motor_stop"></block><block type="sense_servo"><value name="angle"><block type="math_number"><field name="NUM">180</field></block></value></block><block type="sense_led_digital_display"><value name="value"><block type="math_number"><field name="NUM">99</field></block></value></block><block type="sense_led_digital_display_close"></block><block type="sense_rgbled"><value name="R"><block type="math_number"><field name="NUM">255</field></block></value><value name="G"><block type="math_number"><field name="NUM">0</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="sense_traffic_led"></block><block type="sense_buzzer"></block><block type="sense_ledmatrix"><value name="value"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="sense_ledmatrix_close"></block><block type="sense_ultrasonic"></block><block type="sense_sound"></block><block type="sense_light"></block><block type="sense_temperature"></block><block type="sense_humidity"></block><block type="sense_sliding"></block><block type="sense_weight"></block><block type="sense_ir"><statement name="DO"><block type="serial_print_hex"><value name="CONTENT"><block type="variables_get"><field name="VAR">sense_value</field></block></value></block></statement></block><block type="sense_button"></block><block type="sense_motion"></block></category>';
