// Play and pause functionality
var audio = document.getElementById('audio');
var playBtn = document.getElementById('play-btn');

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}

playBtn.addEventListener('click', togglePlay);

// Volume control
var volumeSlider = document.getElementById('volume-slider');

function setVolume() {
  audio.volume = volumeSlider.value / 100;
}

volumeSlider.addEventListener('input', setVolume);

// Progress bar
var progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
  var progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + '%';
}

audio.addEventListener('timeupdate', updateProgressBar);

// Seek functionality
var seekSlider = document.getElementById('seek-slider');

function seek() {
  var seekTime = audio.duration * (seekSlider.value / 100);
  audio.currentTime = seekTime;
}

seekSlider.addEventListener('input', seek);
