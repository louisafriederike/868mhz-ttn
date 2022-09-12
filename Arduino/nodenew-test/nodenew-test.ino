#include <TheThingsNetwork.h>
#include <SafeString.h>
#include <millisDelay.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SH1106_128X32_VISIONOX_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE); 

millisDelay codetimer;
int counter = 0;
int percent = 0;
int prevPercent = 0;
long futuretime = 0;
long timetowait = 1000 * 3; //thelast number is the seconds 
int secretcode = 66;
int addedRandom = 0;

// Set your AppEUI and AppKey
const char *appEui = "0000000000000000";
const char *appKey = "672F08DA6B5A1F2D7DD8F91EB1000D6B";

#define loraSerial Serial1
#define debugSerial Serial

// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan TTN_FP_US915

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);

void setup(void)
{
  loraSerial.begin(57600);
  debugSerial.begin(9600);
//  // Wait a maximum of 10s for Serial Monitor
//  while (!debugSerial && millis() < 10000);
  ttn.onMessage(message);
  ttn.join(appEui, appKey);
  u8g2.begin();
}


void loop(void)
{
  percent = round(analogRead(2) / 4095.00 * 100 + addedRandom);
  char buf[256];
  dtostrf(percent,3,0,buf);
  u8g2.clearBuffer(); 
  String message = String(percent);
  u8g2.setFont(u8g2_font_bitcasual_tf);
  u8g2.drawStr(0, 10, "#5 Gateway code:");
  u8g2.drawStr(0, 20, buf);
           // transfer internal memory to the display
  u8g2.sendBuffer();         
  if(percent != prevPercent) {
  Serial.println(percent);
  byte payload[1];
  payload[0] = (percent);
  ttn.sendBytes(payload, sizeof(payload));
  prevPercent = percent;
  futuretime = millis() + timetowait; // current time plus the timetowait
  }
  if(futuretime > millis()){ // checks the current time with the future time -> count down
  u8g2.drawStr(0, 30, " connecting...");

}
  }
//
//    #ifdef HAS_DISPLAY
//
//    if (u8g2) {
//        char buf[256];
//        dtostrf(percent,3,0,buf);
//        u8g2->clearBuffer();
//        String message = String(percent);
//        u8g2->drawStr(0, 20, " Gateway code:");
////        snprintf(buf, sizeof(buf), "Sending: %d", counter);
//        u8g2->drawStr(0, 40, buf);
//        if(futuretime > millis()){ // checks the current time with the future time -> count down
//        u8g2->drawStr(0, 60, " connecting...");
//    }    
//        if(percent == secretcode && futuretime+10000 < millis()){
//        u8g2->drawStr(0, 60, "   connecting...");
//        addedRandom = random(0,10);
//        }
//
//        else if(percent == secretcode && futuretime < millis()) {
//         u8g2->drawStr(0, 60, " 66");
//        }
////      u8g2->print(percent);
//        u8g2->sendBuffer();
//    }
//#endif
//    counter++;
//}



void message(const byte *payload, size_t length, port_t port)
{
  // Only handle messages of a single byte
  if (length != 1)
  {
    return;
  }

  if (payload[0] != 66)
  {
    debugSerial.println("locked");
    
  }
  else if (payload[0] == 66)
  {
    debugSerial.println("unlocked");
  }
}
