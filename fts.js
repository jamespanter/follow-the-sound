const setTargetObjectLocation = () => {
    targetObject = document.getElementById('target-object');
    const x = (Math.random() * 100) - 5,
        y = (Math.random() * 100) - 5;
    targetObject.style.left = x + '%';
    targetObject.style.top = y + 'px';

    console.log(x, y)
}

window.addEventListener('mousemove', () => {
    console.log('Cursor x: ' + event.pageX, 'y: ' + event.pageY)
    var targetObjectPosition = targetObject.getBoundingClientRect();

    console.log('Object x: ' + targetObjectPosition.x, 'y: ' + targetObjectPosition.y)
    let distance = event.pageX - targetObjectPosition.x;
    console.log(distance)
    const audio = new Audio('sound.wav');
    audio.play();
})

const win = () => {
    alert('YOU FOUND THE SOUND')
}