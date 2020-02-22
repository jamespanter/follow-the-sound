const setTargetObjectLocation = () => {
    targetObject = document.getElementById('target-object');
    let x = (Math.random() * 100) - 15,
        y = (Math.random() * 100) - 15;

    if (x < 0) {
        x = 0
    }

    if (y < 0) {
        y = 0
    }
    targetObject.style.left = x + '%';
    targetObject.style.top = y + '%';
}
const getPlaybackRate = (distance) => {
    distance = Math.round(10 - (distance / 100));

    console.log('playback multiplier: ' + distance);

    if (distance < 1) {
        return 1;
    } else return distance;
}
const audio = document.getElementById('sound');

window.addEventListener('mousemove', () => {
    let targetObjectPosition = targetObject.getBoundingClientRect();
    let distanceX = Math.round(Math.pow(event.pageX - targetObjectPosition.x, 2));
    let distanceY = Math.round(Math.pow(event.pageY - targetObjectPosition.y, 2));
    let distance = Math.round(Math.pow((distanceX + distanceY), 0.5));

    console.log('x: ' + distanceX, 'y: ' + distanceY, 'distance: ' + distance);

    audio.playbackRate = getPlaybackRate(distance);
})

const win = () => {
    targetObject.classList.add('reveal');
    targetObject.style.color = 'limegreen';

    pauseSound()
}
const playButton = document.getElementById('play-sound');
const pauseButton = document.getElementById('pause-sound');


const playSound = () => {
    audio.play();
    pauseButton.classList.add('active');
    pauseButton.classList.remove('inactive');
    playButton.classList.add('inactive');
}

const pauseSound = () => {
    audio.pause();
    playButton.classList.add('active');
    playButton.classList.remove('inactive');
    pauseButton.classList.add('inactive');
}