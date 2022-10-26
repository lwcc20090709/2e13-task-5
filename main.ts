let value_X = 0
let value_Y = 0
input.onButtonPressed(Button.A, function () {
    value_X = 0
    value_Y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(value_X, value_Y)
            basic.pause(500)
            value_X += 1
        }
        value_Y += 1
        value_X = 0
    }
})
input.onButtonPressed(Button.B, function () {
    value_X = 0
    value_Y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(value_X, value_Y)
        basic.pause(500)
        value_X += 1
    }
    for (let index = 0; index < 2; index++) {
        value_X = 4
        value_Y += 1
        for (let index = 0; index < 5; index++) {
            led.plot(value_X, value_Y)
            basic.pause(500)
            value_X += -1
        }
        value_X = 0
        value_Y += 1
        for (let index = 0; index < 5; index++) {
            led.plot(value_X, value_Y)
            basic.pause(500)
            value_X += 1
        }
    }
})
