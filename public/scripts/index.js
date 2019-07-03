import { getEpisodeData } from './data.js';
import { Player } from './player.js';
import { Volume } from './volume.js';
import { Progress } from './progress.js';
import { Markers } from './markers.js';

const AudioDevice = function () {
  this.create = () => {
    return Object.assign(
      {},
      new Player(),
      new Volume(),
      new Progress(),
      new Markers()
    )
  }

  this.create().initPlayer();
  this.create().initVolume();
  this.create().initProgress();
  getEpisodeData(this.create().initMarkers);
}

new AudioDevice()