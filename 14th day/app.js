const video = document.querySelector('#video');
const playVideo = document.querySelector('#play');
const stopVideo = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// play and pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// update play & pause Icons
const updatePlayIcon = () => {
  if (video.paused) {
    playVideo.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    playVideo.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
};

// update progress & timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  // get secends
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
};

// stop video
const stopVideoPlayer = () => {
  video.currentTime = 0;
  video.pause();
};

//set video time progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// all EventListners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playVideo.addEventListener('click', toggleVideoStatus);

stopVideo.addEventListener('click', stopVideoPlayer);

progress.addEventListener('change', setVideoProgress);
