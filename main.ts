/**
 * il faut initier une valeur lors de l'appui sur A et faire vivre une autre valeur, afin de pouvoir la réinitialiser
 */
input.onButtonPressed(Button.A, function () {
    radio.sendValue("ping", 1)
    paquetSend += 1
})
radio.onReceivedValue(function (name, value) {
    radio.sendValue("ping", 1)
    paquetSend += 1
})
function EtatLed () {
    basic.clearScreen()
}
let PaquetTemp = 0
radio.setGroup(1)
let paquetSend = 0
basic.forever(function () {
    PaquetTemp = paquetSend
    basic.showIcon(IconNames.SmallDiamond)
    if (paquetSend == PaquetTemp) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
