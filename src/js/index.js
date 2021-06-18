const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// let updateButton = () => {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }
