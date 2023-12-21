//your JS code here. If required.
var audio;

function playSound(soundFileName) {
    stopSound();  // Stop any currently playing sound

    // Create an audio element
    audio = new Audio('./sounds/' + soundFileName);

    // Play the audio
    audio.play();
}

function stopSound() {
    if (audio) {
        // Stop the audio if it's playing
        audio.pause();
        audio.currentTime = 0;
    }
}
