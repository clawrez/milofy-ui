const _ = document

const displayingArtist = _.getElementById("displaying-artist")
const songListDisplay = _.getElementById("song-list")

function displayArtist(artist) {
    songListDisplay.innerHTML = ""
    if (artist == "all") {
        displayingArtist.textContent = "All Tracks"
        for (let i = 0; i < DISCOGRAPHY.length; i++) {
            let element = _.createElement("div")
            element.id = "song-list-item-" + i
            element.classList.add("song-list-item")
            let title = DISCOGRAPHY[i].title
            let artists = DISCOGRAPHY[i].artists.map(String).join(', ');
            let album = DISCOGRAPHY[i].album
            let genre = DISCOGRAPHY[i].genre
            let releaseDate = new Date(DISCOGRAPHY[i].releaseDate).toLocaleDateString('en-us', {
                year: "numeric",
                month: "short",
                day: "numeric"
            })

            element.innerHTML =
                `
                        <div>
                            <img class="song-list-cover" src="img/placeholderS.png">
                        </div>
                        <div class="song-list-first-column">
                            <div class="song-list-title">
                                ` + title + `
                            </div>
                            <div class="song-list-artists">
                                ` + artists + `
                            </div>
                        </div>
                        <div class="song-list-album">
                            ` + album + `
                        </div>
                        <div class="song-list-genre">
                            ` + genre + `
                        </div>
                        <div class="song-list-release-date">
                            ` + releaseDate + `
                        </div>
                        <div class="song-list-buttons">
                            <i class="fa-solid fa-heart song-list-button"></i>
                            <i class="fa-solid fa-indent song-list-button"></i>
                            <i class="fa-solid fa-circle-info song-list-button"></i>
                        </div>
                    `
            document.getElementById("song-list").appendChild(element)

        }
        addCushion()
    }
}

function addCushion() {
    let pillow = _.createElement("div")
    pillow.id = "stupid-pillow"
    document.getElementById("song-list").appendChild(pillow)
}