const PLAYER = document.querySelector('.player');
const VIDEO = PLAYER.querySelector('.viewer');
const PROGRESS = PLAYER.querySelector('.progress');
const PROGRESSBAR = PLAYER.querySelector('.progress__filled');
const TOGGLE = PLAYER.querySelector('.toggle');
const SKIPBTN = PLAYER.querySelectorAll('[data-skip]');
const RANGES = PLAYER.querySelectorAll('.player__slider');

const togglePlay = () => {
  if (VIDEO.paused) {
    VIDEO.play();
  } else {
    VIDEO.pause();
  }
}

function updateBtn() {
  const ICON = this.paused ? '►' : '❚ ❚';
  TOGGLE.textContent = ICON;
}

function skip() {
  VIDEO.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  VIDEO[this.name] = this.value;
}

const handleProgress = () => {
  const percent = (VIDEO.currentTime / VIDEO.duration) * 100;
  PROGRESSBAR.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / PROGRESS.offsetWidth) * VIDEO.duration;
  VIDEO.currentTime = scrubTime;
}

VIDEO.addEventListener('click', togglePlay);
VIDEO.addEventListener('play', updateBtn);
VIDEO.addEventListener('pause', updateBtn);
VIDEO.addEventListener('timeupdate', handleProgress);

TOGGLE.addEventListener('click', togglePlay);

SKIPBTN.forEach(button => button.addEventListener('click', skip));

RANGES.forEach(range => range.addEventListener('click', handleRangeUpdate));
RANGES.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

PROGRESS.addEventListener('click', scrub);
PROGRESS.addEventListener('mousemove', (e) => mousedown && scrub(e));
PROGRESS.addEventListener('mousedown', () => mousedown = true);
PROGRESS.addEventListener('mouseup', () => mousedown = false);