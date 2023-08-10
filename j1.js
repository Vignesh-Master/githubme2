// script.js
const imageContainer = document.getElementById("image-container");
const audioPlayer = document.getElementById("audio-player");

const backgroundImageURL = "jailer-cinema-photo-hd-1080px-2616371.jpg";
const audioSourceURL = "Hukum - Jailer - Rajinikanth ! Tamil Song.mp3";

imageContainer.style.backgroundImage = `url(${backgroundImageURL})`;

imageContainer.addEventListener("mouseenter", () => {
    audioPlayer.src = audioSourceURL;
    audioPlayer.style.display = "none";
    audioPlayer.play();
});

imageContainer.addEventListener("mouseleave", () => {
    audioPlayer.pause();
    audioPlayer.style.display = "none";
});

// another hover
const ht= document.getElementById("hover-text");
const AudioPlayer = document.getElementById("audio");

const AudioSourceURL = "Muthuvel Pandian Arrives - Jailer - Bgm ! South.mp3";

ht.addEventListener("mouseenter",() =>{
   AudioPlayer.src = AudioSourceURL;
   AudioPlayer.play();
   AudioPlayer.style.display = "none";

});


ht.addEventListener("mouseleave", () => {
    AudioPlayer.pause();
    AudioPlayer.currentTime = 0; // Reset the audio to the beginning
});