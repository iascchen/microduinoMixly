#include "audio.h"
#include <SoftwareSerial.h>

#include <Adafruit_NeoPixel.h>

#include <Servo.h>
#define val_max 4
#define val_min 1
#define INTERVAL_Time 10

#define humanHotSensor 4//PIR传感器D4
#define buttonPin 12
#define PIN 6//彩灯
#define SERVOPIN SDA//舵机

Adafruit_NeoPixel strip = Adafruit_NeoPixel(2, PIN, NEO_GRB + NEO_KHZ800);

Servo myservo;
bool isUP = true;

//unsigned long lcd_time = millis(); //刷新时间计时器
int val = 0;
int music_vol = 26; //初始音量0~30
bool humanHotState = false;
boolean on_off;
boolean statusChange;
bool playing = false;

int pos = 0;
int soundNum = 1;

unsigned long Time_millis = millis();


void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
  pinMode(humanHotSensor, INPUT);
  audio_init(DEVICE_Flash,4,music_vol);    //初始化mp3模块
  //audio_init(DEVICE_TF, MODE_loopOne, music_vol);

  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  myservo.attach(SERVOPIN);
}

void loop() {
  humanHotState = digitalRead(humanHotSensor);
  // print out the state of the button:
  //Serial.println(humanHotState);
  //delay(1);        // delay in between reads for stability

  if (humanHotState) {
    colorWipe(strip.Color(125, 125, 125));
    updateServo();

    if (!playing) {
      Serial.println("play sound.....");
     // audio_play();
     audio_choose(1);
      playing = true;
    }
  }
  else
  {
    playing = false;
    //audio_pause();
    Serial.println("stop sound.....");
    colorWipe(strip.Color(0, 0, 0));
    //myservo.write(90);
  }
}

void updateServo() {
  if (Time_millis > millis()) Time_millis = millis();
  if (millis() - Time_millis > INTERVAL_Time) {

    if (pos == 30) {
      isUP = true;
    } else if (pos == 130) {
      isUP = false;
    }

    if (isUP) {
      pos++;
    } else {
      pos--;
    }
    //Serial.println(pos);
    myservo.write(pos);
    Time_millis = millis();
  }
}

// Fill the dots one after the other with a color
void colorWipe(uint32_t c) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    //delay(wait);
  }
}
