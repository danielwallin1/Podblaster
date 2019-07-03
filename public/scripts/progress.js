
import { getPlayTime } from './helpers/time.js'

export const Progress = function() {
  this.soundline = document.querySelector('.soundline');
  this.progressbar = document.querySelector('.progress');
  this.startTime = document.querySelector('.starttime');
  this.audioPlayer = document.querySelector('.audio');
  this.timer = 0;

  const initProgress = () => {
    this.audioPlayer.addEventListener("timeupdate", setCurrentTime);
    this.audioPlayer.addEventListener("pause", clearTimer);

    this.audioPlayer.addEventListener("playing", event => {
      const { duration } = event.target;
      advance(duration, this.audioPlayer);
    });

    this.soundline.addEventListener("click", event => {
      seek(event, this.audioPlayer);
    });
  }

  const startTimer = (duration, element, percent) => {
    if (percent < 100) {
      this.timer = setTimeout(() => {
        advance(duration, element)
      }, 100);
    }
  }

  const clearTimer = () => clearTimeout(this.timer);

  const setCurrentTime = () => {
    const currentTime = getPlayTime(this.audioPlayer.currentTime);
    this.startTime.innerHTML = currentTime;
  }

  const advance = (duration, element) => {
    const increment = 10 / duration
    const percent = Math.min(increment * element.currentTime * 10, 100);
    this.progressbar.style.width = percent+'%';
    startTimer(duration, element, percent);
  }

  const seek = (event, audioPlayer) => {
    const percent = event.offsetX / this.soundline.offsetWidth;
    this.audioPlayer.currentTime = percent * audioPlayer.duration;
    this.progressbar.value = percent / 100;
  }

  return {
    initProgress
  }
}