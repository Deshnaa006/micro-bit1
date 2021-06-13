let heading_angle = 0
basic.forever(function () {
    heading_angle = input.compassHeading()
    if (heading_angle > 45 && heading_angle <= 135) {
        basic.showString("E")
    } else if (heading_angle > 135 && heading_angle <= 225) {
        basic.showString("S")
    } else if (heading_angle > 255 && heading_angle <= 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
