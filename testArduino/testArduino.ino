#include <Adafruit_NeoPixel.h>
#include <SoftwareSerial.h>
#include <SoftwareSerial.h>

String item;

Adafruit_NeoPixel strip = Adafruit_NeoPixel(6, A0, NEO_GRB + NEO_KHZ800);
#define my_Serial Serial
void setup()
{
  strip.begin();
  strip.show();
  item = "";

  my_Serial.begin(9600);
  Serial.begin(9600);
}


void loop()
{
  if (my_Serial.available()) {
    item = my_Serial.readString();
    if (item==String("aa")) {
      strip.setPixelColor(2, strip.Color(255, 255, 255));
      strip.show();
      delay(1000);

    }

  }

}
