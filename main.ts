let persone = 0
input.onButtonPressed(Button.A, function () {
    persone = persone + 1
    basic.showNumber(persone)
})
input.onButtonPressed(Button.AB, function () {
    persone = persone - persone
    basic.showNumber(persone)
})
input.onButtonPressed(Button.B, function () {
    if (persone > 0) {
        persone = persone - 1
        basic.showNumber(persone)
    }
})
basic.forever(function () {
    if (persone >= 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
