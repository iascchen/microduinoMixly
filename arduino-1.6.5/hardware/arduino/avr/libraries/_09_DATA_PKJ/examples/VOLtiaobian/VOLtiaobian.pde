#include <PKJ.h>

PKJ pkj;

void setup() 
{    
  Serial.begin(9600);
}
 
void loop() 
{
  int val = analogRead(A0);
  val = map(val,0,1023,0,99);    //ʹ��map����������ֵӳ��
  
  val=pkj.VOLtiaobian(val,20,50);

  Serial.print("  val: ");
  Serial.println(val);
  delay(100);}
