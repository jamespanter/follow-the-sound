const setTargetObjectLocation = () => {
    targetObject = document.getElementById('target-object');
    const x = (Math.random() * 100) - 5,
        y = (Math.random() * 100) - 5;
    targetObject.style.left = x + '%';
    targetObject.style.top = y + '%';
}
const getPlaybackRate = (distance) => {
    distance = 10 - (distance / 100)
    console.log(distance)

    if (distance < 1) {
        return 1
    } else return distance;
}

window.addEventListener('mousemove', () => {
    let targetObjectPosition = targetObject.getBoundingClientRect();
    let distanceX = Math.round(Math.pow(event.pageX - targetObjectPosition.x, 2));
    let distanceY = Math.round(Math.pow(event.pageY - targetObjectPosition.y, 2));
    let distance = Math.round(Math.pow((distanceX + distanceY), 0.5));

    console.log('x: ' + distanceX, 'y: ' + distanceY, 'distance: ' + distance)

    const audio = document.getElementById('sound');
    audio.playbackRate = getPlaybackRate(distance);
})

const win = () => {
    alert('YOU FOUND THE SOUND')
}