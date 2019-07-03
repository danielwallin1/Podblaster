import { throttle } from './helpers.js';
import { Player } from './player.js';

export const Markers = function() {

  const that = Object.assign(
    this, Markers.prototype, Player.call(Markers.prototype)
  );

  this.forwardSkip = document.querySelector('.skip-forward');
  this.audioPlayer = document.querySelector('.audio');
  this.podHeading = document.querySelector('.pod-heading');
  this.markerArea = document.querySelector('.marker-area');

  const initMarkers = data => {
    const { markers } = JSON.parse(data);
    bindEvents(markers);
  }

  const bindEvents = markers => {
    this.forwardSkip.addEventListener('click', () => {
      setTimeout(() => that.fastForward(), getRemainingTime());
    }, false);

    this.audioPlayer.addEventListener("timeupdate", throttle(() => {
      if (this.audioPlayer.currentTime > 0) {
        selectMarker(markers);
      }
    }, 1000));
  }

  const getRemainingTime = () => {
    const { duration, start, type } = this.marker;
    const { currentTime } = this.audioPlayer;
    return type === 'ad' ? (((start + duration) - currentTime) * 1000) : 0;
  }

  const selectMarker = markers => {
    const { currentTime } = this.audioPlayer;

    const getMarker = item => {
      let { start, duration } = item;
      return currentTime >= start && currentTime <= start + duration;
    }

    const marker = markers.filter(getMarker)[0];

    if (marker) {
      if (this.marker !== marker) {
        showMarker(marker);
        this.marker = marker;
        this.currentType = marker.type;
        this.markerArea.style.display = 'flex';
        this.podHeading.style.display = 'none';
      }

    } else {
      this.markerArea.innerHTML = '';
      this.markerArea.style.display = 'none';
      this.podHeading.style.display = 'block';
    }
  }

  const showMarker = marker => {
    let element = '';

    switch (marker.type) {
      case 'text':
        element = document.createElement('p');
        element.innerHTML = marker.content;
        break;

      case 'ad':
        const text = document.createTextNode(marker.content);
        element = document.createElement('a');
        element.appendChild(text);
        element.href = marker.link;
        break;

      case 'image':
        element = new Image();
        element.src = marker.content;
        break;
    }

    while (this.markerArea.firstChild) {
      this.markerArea.removeChild(this.markerArea.firstChild);
    }

    this.markerArea.appendChild(element);
  }

  return {
    initMarkers
  }
}