basic.showString("Roll!")

basic.forever(function () {
   
    input.onGesture(Gesture.Shake, function() {
        let number = randint(1, 6); 
        basic.showNumber(number); 
        music.play(music.tonePlayable(Note.FSharp5, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
  
    })
})


