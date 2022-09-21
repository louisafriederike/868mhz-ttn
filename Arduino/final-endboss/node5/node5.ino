#include <TheThingsNetwork.h>

#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>

#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>

#endif


#include <avr/wdt.h>

U8G2_SH1106_128X32_VISIONOX_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

int counter = 0;
int percent = 0;
int prevPercent = 0;
long futuretime = 0;
long timetowait = 1000 * 5;
int secretcode = 15;
int addedRandom = 0;
//bool unlocked = false;

//ttn set up
const char *appEui = "0000000000000000";
const char *appKey = "672F08DA6B5A1F2D7DD8F91EB1000D6B";

#define loraSerial Serial1
#define debugSerial Serial
#define freqPlan TTN_FP_US915

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);

void setup(void) {
  loraSerial.begin(57600);
  debugSerial.begin(9600);
  // Wait a maximum of 10s for Serial Monitor
  while (!debugSerial && millis() < 10000);
  ttn.join(appEui, appKey);
  //ttn.onMessage(message);
  u8g2.begin();
  futuretime = millis();
}
//void(* resetFunc) (void) = 0;
void loop(void) {
  
  percent = round(analogRead(2) / 1023.00 * 100 + addedRandom);
  percent = min(percent, 100);
  percent = max(percent, 0);
  //
  //     Serial.print("counter ");
  //     Serial.println(counter);

  if (percent != prevPercent) {
    Serial.println("node2");
    Serial.println(percent);
    prevPercent = percent;
    futuretime = millis() + timetowait;

    char buf[32] = {};
    dtostrf(percent, 3, 0, buf);
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_bitcasual_tf);
    u8g2.drawStr(0, 20, buf);
    u8g2.sendBuffer();
  }
  Serial.print(futuretime);
  Serial.print(" ");
  Serial.println(millis());
  //  u8g2.drawStr(0, 30, "searching...");

  if (percent == secretcode && futuretime < millis()) {
    //      u8g2.drawStr(0, 10, "   uploaded.");or
    //      u8g2.drawStr(0, 30, "             ");
    Serial.println("unlocked");
    byte payload[1] = {};
    payload[0] = (secretcode);
    ttn.sendBytes(payload, sizeof(payload));
    counter++;
    //      delay(1000);
    addedRandom = random(-2, 3);
  }

  if (counter>2){

//      resetFunc();
      wdt_enable(WDTO_15MS);
    }

  //  counter++;
}

void message(const byte * payload, size_t length, port_t port) {
  // Only handle messages of a single byte
  if (length != 1) {
    return;
  }

  //  if (payload[0] != 11)
  //  {
  //    debugSerial.println("locked");
  //
  //  }
  //  else if (payload[0] == 11)
  //  {
  //    debugSerial.println("unlocked");
  //  }
}
