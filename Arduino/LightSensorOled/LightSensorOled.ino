#include <TheThingsNetwork.h>
#include <U8g2lib.h>

//#ifdef U8X8_HAVE_HW_SPI
//#include <SPI.h>
//#endif
//#ifdef U8X8_HAVE_HW_I2C
//#include <Wire.h>
//#endif

U8G2_SH1106_128X32_VISIONOX_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE); 

// Set your AppEUI and AppKey
const char *appEui = "0000000000000000";
const char *appKey = "672F08DA6B5A1F2D7DD8F91EB1000D6B";

//define AnalogPin for sensor
#define LightPin A0

#define loraSerial Serial1
#define debugSerial Serial

// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan TTN_FP_US915

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);

void setup()
{ 
  loraSerial.begin(57600);
  debugSerial.begin(9600);

  // Wait a maximum of 10s for Serial Monitor
  while (!debugSerial && millis() < 10000)
    ;

  pinMode(LightPin, INPUT);

//  debugSerial.println("-- STATUS");
//  ttn.showStatus();
//
//  debugSerial.println("-- JOIN");
//  ttn.join(appEui, appKey);
//
//  ttn.showStatus();
//  debugSerial.println("Setup for The Things Network complete");
  u8g2.begin();
}

void loop()
{

  uint16_t light = analogRead(LightPin);

  // Split word (16 bits) into 2 bytes of 8
  byte payload[2];
  payload[0] = highByte(light);
  payload[1] = lowByte(light);

  debugSerial.print("Transmitting Light level: ");
  debugSerial.println(light);

  ttn.sendBytes(payload, sizeof(payload));

  char buf[256];
  dtostrf(light,3,0,buf);
  String message = String(light);
  u8g2.clearBuffer();          // clear the internal memory
  u8g2.setFont(u8g2_font_inr21_mf);
  u8g2.drawGlyph(5, 20, 0x2615);
  u8g2.drawStr(15, 20, light);
//  u8g2.print(analogRead(LightPin));
  u8g2.sendBuffer();          // transfer internal memory to the display
  

  delay(20000);
}
