basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
