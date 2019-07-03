export const getPlayTime = (currentTime) => {
  const currentMinute = parseInt(currentTime / 60) % 60;
  const currentSecondsLong = currentTime % 60;
  const currentSeconds = currentSecondsLong.toFixed();
  currentTime = (currentMinute < 10
    ? "0" + currentMinute : currentMinute) + ":" + (currentSeconds < 10 ? "0" + currentSeconds
    : currentSeconds);

  return currentTime;
}