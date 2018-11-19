import sys
import json
import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
outs = [37,35,33,31,29,40,38,36]
GPIO.setmode(GPIO.BOARD)
GPIO.setup(outs,GPIO.OUT)
leds = sys.argv
leds.remove(leds[0])
leds = json.loads(leds[0])
if leds["state"] == True:
    GPIO.output(outs[leds["id"]],1)
    print(1)
else:
    GPIO.output(outs[leds["id"]],0)
    print(0)