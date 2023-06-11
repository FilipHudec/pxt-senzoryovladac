radio.setGroup(112)
radio.setTransmitPower(7)

// Nastavte správné piny pro tlačítka A a B
const buttonA = DigitalPin.P1
const buttonB = DigitalPin.P2

input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})