radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    tumano = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mimano = cuento % 5
    if (mimano == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (mimano == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (mimano == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (mimano == 3) {
        basic.showIcon(IconNames.Duck)
    }
    if (mimano == 4) {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimano)
})
let escogido = false
let tumano = 0
let recibido = false
let cuento = 0
let mimano = 0
radio.setGroup(111)
mimano = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        escogido = false
        recibido = false
        if (mimano == tumano) {
            basic.showIcon(IconNames.No)
        } else {
            if (mimano == 2 && tumano == 1) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (mimano == 1 && tumano == 0) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    if (mimano == 0 && tumano == 2) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (mimano == 1 && tumano == 0) {
                            basic.showIcon(IconNames.Skull)
                        } else {
                            if (mimano == 2 && tumano == 0) {
                                basic.showIcon(IconNames.Skull)
                            } else {
                                if (mimano == 0 && tumano == 1) {
                                    basic.showIcon(IconNames.Skull)
                                }
                            }
                        }
                    }
                }
            }
        }
        basic.pause(2000)
        basic.clearScreen()
    }
})
