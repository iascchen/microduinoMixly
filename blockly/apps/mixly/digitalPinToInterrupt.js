function digitalPinToInterrupt(p) {return ((p) == 0 ? 2 : ((p) == 1 ? 3 : ((p) == 2 ? 4 : ((p) == 18 ? 1 : ((p) == 19 ? 0 : 'NOT_AN_INTERRUPT')))));}
profile["default"] = profile["arduino_coreusb"];