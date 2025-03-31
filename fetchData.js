function getSongData() {
    fetch('data.json')
        .then(response => response.json())
        .then(songData => {
            displaySongData(songData);
        })
        .catch(error => {
            console.error("Error fetching: ", error);
        });
}
getSongData();
