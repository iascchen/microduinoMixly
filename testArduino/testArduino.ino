#include <Adafruit_NeoPixel.h>

long i;

Adafruit_NeoPixel strip = Adafruit_NeoPixel(1, 6, NEO_GRB + NEO_KHZ800);
void setup()
{
  strip.begin();
  strip.show();
}


void loop()
{
  for (i = 0; i <= 10; i = i + (1)) {
    strip.setPixelColor(i-1, strip.Color(255, 255, 255));
    strip.show();
  }

}