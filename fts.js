const playButton = document.getElementById("play-sound"),
  pauseButton = document.getElementById("pause-sound"),
  audioWin = document.getElementById("sound-two"),
  audioLose = document.getElementById("sound-three"),
  audioDistance = document.getElementById("sound");

let counter = document.getElementById("find-counter"),
  birdImage = document.getElementById("bird-image"),
  score = 0,
  arrayOfXCoords = [],
  arrayOfYCoords = [];

const setTargetObjectLocation = () => {
  targetObject = document.getElementById("target-object");
  let x = Math.round(Math.random() * 100) - 30,
    y = Math.round(Math.random() * 100) - 30;
  if (x < 0) {
    x = 0;
  }
  if (y < 0) {
    y = 0;
  }
  targetObject.style.left = x + "%";
  targetObject.style.top = y + "%";
  arrayOfXCoords.push(x);
  arrayOfYCoords.push(y);
};

const getPlaybackRate = (distance) => {
  distance = Math.round((9 - distance / 200) / 2);
  if (distance < 1) {
    return 1;
  } else return distance;
};

const lose = () => {
  decreaseCounter();
};

const decreaseCounter = () => {
  score += -1;
  counter.innerHTML = score;
  audioLose.playbackRate = 6;
  audioLose.play();
};

const win = () => {
  revealBird(arrayOfXCoords, arrayOfYCoords);
  increaseCounter();
  setTargetObjectLocation();
};
const revealBird = (arrayOfXCoords, arrayOfYCoords) => {
  getRandomBirdImage();
  birdImage.style.display = "unset";
  // console.log('x array: ' + arrayOfXCoords, 'y array: ' + arrayOfYCoords)
  let xStorage = arrayOfXCoords[arrayOfXCoords.length - 1];
  let yStorage = arrayOfYCoords[arrayOfYCoords.length - 1];
  document.getElementById("bird-image").style.left = xStorage + "%";
  document.getElementById("bird-image").style.top = yStorage + "%";
  hideImageDelay();
};
const getRandomBirdImage = () => {
  const arrayOfBirdImages = [
    "bird-found.png",
    "bird-found-2.png",
    "bird-found-3.png",
    "bird-found-4.png",
  ];
  birdImage.src =
    arrayOfBirdImages[Math.floor(Math.random() * arrayOfBirdImages.length)];
};

function hideImageDelay() {
  setTimeout(doHide, 1000);
}

function doHide() {
  birdImage.style.display = "none";
}

const increaseCounter = () => {
  score += 10;
  counter.innerHTML = score;
  audioWin.play();
};

const playSound = () => {
  audioDistance.play();
  audioDistance.volume = 0.3;
  pauseButton.classList.add("active");
  pauseButton.classList.remove("inactive");
  playButton.classList.add("inactive");
};

const pauseSound = () => {
  audioDistance.pause();
  playButton.classList.add("active");
  playButton.classList.remove("inactive");
  pauseButton.classList.add("inactive");
};

const resetScore = () => {
  score = 0;
  counter.innerHTML = score;
  pauseSound();
};

window.addEventListener("click", (e) => {
  if (
    !targetObject.contains(e.target) &&
    !document.getElementById("reset-button").contains(e.target) &&
    !document.getElementById("play-sound").contains(e.target) &&
    !document.getElementById("pause-sound").contains(e.target)
  ) {
    lose();
  }
});

window.addEventListener("mousemove", () => {
  let targetObjectPosition = targetObject.getBoundingClientRect();
  let distanceX = Math.round(Math.pow(event.pageX - targetObjectPosition.x, 2)),
    distanceY = Math.round(Math.pow(event.pageY - targetObjectPosition.y, 2)),
    distance = Math.round(Math.pow(distanceX + distanceY, 0.5));
  // console.log('x^2: ' + distanceX, 'y^2: ' + distanceY, 'distance^0.5: ' + distance);
  audioDistance.playbackRate = getPlaybackRate(distance);
  // console.log('playback multiplier: ' + getPlaybackRate(distance));
});

document.getElementById("target-object").addEventListener("click", win);
document.getElementById("play-sound").addEventListener("click", playSound);
document.getElementById("pause-sound").addEventListener("click", pauseSound);
document.getElementById("reset-button").addEventListener("click", resetScore);
