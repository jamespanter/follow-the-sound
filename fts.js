const setTargetObjectLocation = () => {
    targetObject = document.getElementById('target-object');
    const x = (Math.random() * 100) - 5,
        y = (Math.random() * 100) - 5;
    targetObject.style.left = x + '%';
    targetObject.style.top = y + 'px';

    console.log(x, y)
}