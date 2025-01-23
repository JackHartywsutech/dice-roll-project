
basic.forever(function () {
    input.onGesture(Gesture.Shake, function() {
        let number = randint(1, 6); 
        basic.showNumber(number)
    })
})
