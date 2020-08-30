input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C C G G A A G G ", 120)
    music.playMelody("F F E E D D C C ", 120)
    music.playMelody("G G F F E E D D ", 120)
    music.playMelody("G G F F E E D D ", 120)
    music.playMelody("C C G G A A G G ", 120)
    music.playMelody("F F E E D D C C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . #
        . # # # #
        . # . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E C E C E G G - ", 120)
    music.playMelody("F D D - E C C - ", 120)
    music.playMelody("E C E C E G G - ", 120)
    music.playMelody("F D D - C E C - ", 120)
    music.playMelody("F F A A G G E E ", 120)
    music.playMelody("F D D D C E G - ", 120)
    music.playMelody("F F A A G G E E ", 120)
    music.playMelody("F D D D C E C - ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E - C D E - ", 120)
    music.playMelody("G E D C D E D - ", 120)
    music.playMelody("C D E - C D E - ", 120)
    music.playMelody("G E D C D E C - ", 120)
    music.playMelody("G G E G A A G - ", 120)
    music.playMelody("E E D D C C - - ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # . # . #
        # # # # #
        . # # # .
        # . # . #
        . # # # .
        `)
})
basic.showNumber(20200829)
