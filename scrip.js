//Chat Widget Open
document.addEventListener("DOMContentLoaded", () => {
    const chatWidget = document.getElementById("chat-widget");
    const videoThumbnail = document.getElementById("video-container");
    const closeBtn = document.getElementById("close-btn");

    // Close chat and show thumbnail again
    closeBtn.addEventListener("click", () => {
        chatWidget.style.display = "none";
        videoThumbnail.style.display = "block";
    });

    // Optional: clicking the thumbnail opens the chat
    videoThumbnail.addEventListener("click", () => {
        chatWidget.style.display = "block";
        videoThumbnail.style.display = "none";
    });
});

//Play/Pause

document.addEventListener("DOMContentLoaded", () => {
    const playPauseBtn = document.getElementById("play-pause-btn");
    const playPauseIcon = document.getElementById("play-pause-icon");
    const backgroundVideo = document.getElementById("background-video");

    let isPlaying = true;

    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            backgroundVideo.pause();
            playPauseIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png"; // play icon
        } else {
            backgroundVideo.play();
            playPauseIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png"; // pause icon
        }
        isPlaying = !isPlaying;
    });
});

// Mute/Unmute

document.addEventListener("DOMContentLoaded", () => {
    const muteUnmuteBtn = document.getElementById("mute-unmute-btn");
    const muteUnmuteIcon = document.getElementById("mute-unmute-icon");
    const backgroundVideo = document.getElementById("background-video");

    muteUnmuteBtn.addEventListener("click", () => {
        if (backgroundVideo.muted) {
            backgroundVideo.muted = false;
            muteUnmuteIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png"; // Unmuted icon
        } else {
            backgroundVideo.muted = true;
            muteUnmuteIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png"; // Muted icon
        }
    });
});

// Refresh
document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh-btn");
    const loadingOverlay = document.getElementById("loading-overlay");
    const progressBar = document.getElementById("progress-bar");

    refreshBtn.addEventListener("click", () => {
        // Show loader
        loadingOverlay.style.display = "flex";
        progressBar.style.width = "0%";

        // Animate progress bar to 100%
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                location.reload(); // Page refresh after progress completes
            }
        }, 15); // Adjust speed as needed
    });
});

