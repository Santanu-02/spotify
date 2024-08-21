document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.getElementById('play-pause');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;

    playPauseButton.addEventListener('click', () => {
        if (currentAudio) {
            if (currentAudio.paused) {
                currentAudio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                currentAudio.pause();
                playPauseButton.textContent = 'Play';
            }
        }
    });

    function playAudio(audioId) {
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
        }
        currentAudio = document.getElementById(audioId);
        currentAudio.play();
        playPauseButton.textContent = 'Pause';
    }

    window.playAudio = playAudio;
});
