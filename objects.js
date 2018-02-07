var playlist = {
  Madonna: "Like A Virgin"
}


function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song} )
}

function removeFromPlaylist() {}
