class SongSprite {
    constructor(songData) {
        this.title = songData.title;
        this.artist = songData.artist;
        this.releaseYear = songData.releaseYear;
        this.createSprite();
    }

    createSprite() {
        const songContainer = document.querySelector('.song-container');
        if (!songContainer) {
            console.error("Error: .song-container not found.");
            return;
        }
        const sprite = document.createElement('div');
        sprite.classList.add('song-sprite');

        sprite.innerHTML = `
            <h3>${this.title}</h3>
            <p>Artist: ${this.artist}</p>
            <p>Year: ${this.releaseYear}</p>
        `;
        songContainer.appendChild(sprite);
    }
}

//fetch and display songs

function displaySongData(songData) {
    const songContainer = document.querySelector('.song-container');
    if (!songContainer) {
        console.error("Error: .song-container not found.");
        return;
    }
    songContainer.innerHTML = '';
    songData.forEach(song => {
        new SongSprite(song);
    });
}

fetch('data.json')
    .then(response => response.json())
    .then(data => displaySongData(data))
    .catch(error => console.error("Error fetching song data:", error));

