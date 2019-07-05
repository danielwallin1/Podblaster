import { getPlayTime } from './helpers/time.js'

export const Player = function() {
  this.playButton = document.querySelector('.play');
  this.endTime = document.querySelector('.total-time');
  this.markerArea = document.querySelector('.marker-area');
  this.podHeading = document.querySelector('.pod-heading');
  this.backwardSkip = document.querySelector('.skip-backward');
  this.audioPlayer = document.querySelector('.audio');

  const initPlayer = () => {
    this.playButton.addEventListener('click', handlePlayButton, false);
    this.backwardSkip.addEventListener('click', rewind, false);
  }

  const playAudio = () => {
    this.audioPlayer.play();
    this.playButton.innerHTML = 'pause_arrow';
    this.endTime.innerHTML = getPlayTime(this.audioPlayer.duration);
  }

  const handlePlayButton = () => {
    if (this.audioPlayer.paused) {
      this.podHeading.style.display = 'none';
      this.markerArea.style.display = 'flex';
      playAudio();
    } else {
      this.playButton.innerHTML = 'play_arrow';
      this.podHeading.style.display = 'block';
      this.markerArea.style.display = 'none';
      this.audioPlayer.pause();
    }
  }

  const fastForward = () => {
    this.audioPlayer.currentTime += 5;
  }

  const rewind = () => {
    this.audioPlayer.currentTime -= 5;
  }

  return {
    fastForward,
    rewind,
    initPlayer
  }
}