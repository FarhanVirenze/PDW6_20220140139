const myAudio = document.getElementById('myAudio'); // Memuat suara
const myVideo = document.getElementById('myVideo'); // Memuat video

window.onload = function() { // Mengatur suara dan video agar berhenti ketika halaman dimuat
    myAudio.pause();
    myVideo.pause();
};

function toggleAudio() { // Fungsi untuk memutar dan memberhentikan suara
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}

function toggleVideo() { // Fungsi untuk memutar dan memberhentikan video
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}
