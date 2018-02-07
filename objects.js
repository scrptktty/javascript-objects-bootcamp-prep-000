var playlist = {
  Madonna: "Like A Virgin"
}


function updatePlaylist(playlist, artist, song) {
  
  playlist[artist] = song
  
  return playlist
  
  // playlist.artist --> static property access
  
  // playlist["artist"] --> static property access
  
  
}

function removeFromPlaylist() {}
