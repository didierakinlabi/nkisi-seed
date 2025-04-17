// pico_mesh_bead.ino  –  Nkisi BLE mesh starter stub
#include <Arduino.h>
#include <BLEDevice.h>

const uint8_t SYNC = 0xFF;
const uint8_t XOR_KEY = 0xA5;
const uint8_t griot_packet[27] = {
  0xFF, 0x00, 0x0F, 0x15,
  0x68,0x74,0x74,0x70,0x73,0x3A,0x2F,0x2F,0x67,0x72,0x69,0x6F,0x74,0x2E,0x6D,0x61,0x72,0x6B,0x65,0x74,
  0x2B
};

void xorEncrypt(uint8_t *buf, size_t n) {
  for (size_t i = 0; i < n; ++i) buf[i] ^= XOR_KEY;
}

void initBLE(const char *name) {
  BLEDevice::init(name);
  BLEServer *pServer = BLEDevice::createServer();
  BLEAdvertising *pAdvertising = pServer->getAdvertising();
  pAdvertising->addServiceUUID("180D"); // placeholder UUID
  pAdvertising->start();
}

bool triggered() {
  return digitalRead(0) == LOW; // button on GP0
}

void broadcastPacket() {
  uint8_t pkt[27];
  memcpy(pkt, griot_packet, 27);
  xorEncrypt(pkt, 27);
  BLEDevice::getAdvertising()->setManufacturerData(std::string((char*)pkt,27));
  BLEDevice::startAdvertising();
}

void setup() {
  pinMode(0, INPUT_PULLUP);
  Serial.begin(115200);
  initBLE("NkisiBead");
}

void loop() {
  if (triggered()) {
    broadcastPacket();
    delay(200);
  }
  delay(100);
}
