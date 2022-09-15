#include <LoRa.h>
#include "boards.h"
#include <SafeString.h>
#include <millisDelay.h>


//elapsedMillis timeElapsed;
//unsigned int interval = 20000;
millisDelay codetimer;
int counter = 0;
int percent = 0;
int prevPercent = 0;
long futuretime = 0;
long timetowait = 1000 * 3; //thelast number is the seconds 
int secretcode = 55;
int addedRandom = 0;


void setup()
{   
  Serial.begin( 9600 );
    initBoard();
    // When the power is turned on, a delay is required.
    delay(1500);
    Serial.println("LoRa Sender");
    LoRa.setPins(RADIO_CS_PIN, RADIO_RST_PIN, RADIO_DI0_PIN);
    if (!LoRa.begin(LoRa_frequency)) {
        Serial.println("Starting LoRa  failed!");
        while (1);
    }
}

void loop(){
  percent = round(analogRead(2) / 4095.00 * 100 + addedRandom);
  
    if(percent != prevPercent) {
      Serial.println(percent);
      LoRa.beginPacket();
      LoRa.print("node5 ");
      LoRa.print(percent);
      LoRa.endPacket();
      prevPercent = percent;
      futuretime = millis() + timetowait; // current time plus the timetowait
    }
    
    
//    delay(100);
//    Serial.print("Sending packet: ");
//    Serial.println(percent);

    // send packet




#ifdef HAS_DISPLAY

    if (u8g2) {
        char buf[256];
        dtostrf(percent,3,0,buf);
        u8g2->clearBuffer();
        String message = String(percent);
        u8g2->drawStr(0, 20, " Gateway code:");
//        snprintf(buf, sizeof(buf), "Sending: %d", counter);
        u8g2->drawStr(0, 40, buf);
        if(futuretime > millis()){ // checks the current time with the future time -> count down
      u8g2->drawStr(0, 60, " connecting...");
    }


        
        if(percent == secretcode && futuretime+10000 < millis()){
        u8g2->drawStr(0, 60, "   connecting...");
        addedRandom = random(0,10);
        }

        else if(percent == secretcode && futuretime < millis()) {
         u8g2->drawStr(0, 60, "PORT: 9.1.13.");
        }
//        u8g2->print(percent);
        u8g2->sendBuffer();
    }
#endif
    counter++;
}
