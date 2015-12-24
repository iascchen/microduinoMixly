#include "Wire.h"
#include "I2Cdev.h"
#include "MPU6050.h"

MPU6050 accelgyro;
int16_t ax;
int16_t ay;
int16_t az;
int16_t gx;
int16_t gy;
int16_t gz;
void setup()
{
  Wire.begin();
  Serial.println("Initializing I2C devices...");
  accelgyro.initialize();
  Serial.println("Testing device connections...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");
}


void loop()
{
  accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

}