let currentSong = new Audio();
let songs;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify_Clone/assets/mp3/");

    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith("mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

const playMusic = (track) => {
    let trackName;

    if (track.startsWith("http")) {
        // Extract filename from URL
        trackName = track.split("/").slice(-1)[0];
        currentSong.src = track;
    } else {
        trackName = track;
        currentSong.src = "assets/mp3/" + track;
    }

    currentSong.play();
    console.log('Playing:', currentSong.src);

    // Display the song name without the ".mp3" extension
    document.querySelector(".sname").innerHTML = trackName.replace(".mp3", "").replaceAll("%20", " ");

    // Save only the track name in localStorage (encoded)
    localStorage.setItem("lastSongPlayed", encodeURIComponent(trackName));
};

async function main() {
    // Get the list of all the songs
    songs = await getSongs();

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

    for (const song of songs) {
        let songName = song.split("/mp3/")[1].replaceAll("%20", " ").replaceAll("_", " ");
        songUL.innerHTML += `
            <li>
                <img src="assets/img/music_2.svg" alt="musiclogo">
                <div class="info">
                    <div>${songName}</div>
                </div>
                <div class="playnow hover">
                    <img src="assets/img/play2.svg" alt="">
                </div>
            </li>`;
    }

    // Load the last played song from localStorage (if it exists)
    const lastSongPlayed = decodeURIComponent(localStorage.getItem("lastSongPlayed"));

    if (lastSongPlayed) {
        // Find the full URL of the last played song by comparing only the file names
        const fullURL = songs.find(song => {
            const songName = decodeURIComponent(song.split("/").slice(-1)[0]); // Extract the filename from the URL
            return songName === lastSongPlayed; // Compare with lastSongPlayed
        });

        if (fullURL) {
            currentSong.src = fullURL;
            document.querySelector(".sname").innerHTML = lastSongPlayed.replace(".mp3", "").replaceAll("%20", " ").replaceAll("_", " ");
            document.querySelector(".currentTime").innerHTML = "0:00";

            // Optionally, set the total time immediately if metadata is already loaded
            currentSong.addEventListener('loadedmetadata', () => {
                document.querySelector(".totalTime").innerHTML = formatTime(currentSong.duration);
            });
        }
    }



    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
            play.src = "assets/img/pause.svg";
        })
    })

    //Attach an even listener to play btn
    play.addEventListener("click", () => {
        if (currentSong.src == '') {
            play.src = "assets/img/play2.svg"
        } else {
            if (currentSong.paused) {
                currentSong.play()
                play.src = "assets/img/pause.svg"
            } else {
                currentSong.pause()
                play.src = "assets/img/play2.svg"
            }
        }
    })

    //Attach an even listener to previous song btn
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src);

        if (index > 0) { // Ensure we're not trying to access an invalid index
            playMusic(songs[index - 1]);
        } else {
            console.log("Already at the first song, can't go back further.");
        }
    });


    //Attach an even listener to next song btn
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src);

        if (index == songs.length - 1) { // Ensure we're not trying to access an invalid index
            console.log("Already at the last song, can't go back further.");

        } else if (index < songs.length) {
            playMusic(songs[index + 1]);
        }
    })

    //listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".currentTime").innerHTML = formatTime(currentSong.currentTime);
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    currentSong.addEventListener('loadedmetadata', () => {
        // Set the total duration of the song after the metadata is loaded
        document.querySelector(".totalTime").innerHTML = formatTime(currentSong.duration);
    });

    //add an event listenr to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let spercent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = spercent + "%";
        currentSong.currentTime = (currentSong.duration * spercent) / 100;

    })

    //add an event listener to the hamburger icon
    document.querySelector(".hamburger").addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");

        if (sidebar.style.left === "" || sidebar.style.left === "-100%") {
            sidebar.style.left = "0%";
            sidebar.style.display = "block";
            sidebar.style.position = "relative";
            hamburger.src = "assets/img/close.svg"
        } else {
            sidebar.style.left = "-100%";
            sidebar.style.display = "none";
            sidebar.style.position = "absolute";
            hamburger.src = "assets/img/menu.svg"
        }
    });

    //add an event listener to volume bar
    const volumeBar = document.getElementById('volume-bar');
    // Set the initial volume based on the range input's value
    currentSong.volume = volumeBar.value / 100;

    volumeBar.addEventListener('input', () => {
        currentSong.volume = volumeBar.value / 100;
        console.log(`Volume: ${currentSong.volume}`);
        if (currentSong.volume == 0) {
            volsvg.src = "assets/img/mute.svg"
        }
        else {
            volsvg.src = "assets/img/vol.svg"
        }
    });


    //add an event listener to mute button
    volsvg.addEventListener('click', () => {
        
        if (volsvg.src == "http://127.0.0.1:3000/Spotify_Clone/assets/img/vol.svg") {
            volsvg.src = 'assets/img/mute.svg';
            volumeBar.value = 0;
        } else {
            volsvg.src = 'assets/img/vol.svg';
            volumeBar.value = 40;
        }
    })

}

main();