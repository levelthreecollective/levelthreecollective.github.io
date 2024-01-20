// background.js
document.addEventListener('DOMContentLoaded', function() {
    const fallbackImg = document.getElementById('fallbackImage');
    fallbackImg.src = randomImagePath;
});

function videoCanPlay() {
    var video = document.getElementById('background-video');
    video.play()
        .then(() => {document.getElementById('fallbackImage').style.display = 'none';})
        .catch((error) => {document.getElementById('fallbackImage').style.display = 'block';})
        ;
}
