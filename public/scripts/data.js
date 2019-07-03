export function getEpisodeData(callback) {
  const segment = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

  var http = new XMLHttpRequest();
    http.open( "GET", '/episodes/data/' + segment, true ); // false for synchronous request
    http.send( null );

    http.onreadystatechange = (e) => {
      if (http.readyState == 4 && http.status == 200) {
        callback(http.responseText);
      }
    }
}