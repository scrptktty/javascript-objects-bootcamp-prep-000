var playlist = {}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song} )
}

function removeFromPlaylist() {}
