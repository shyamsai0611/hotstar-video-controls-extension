console.log("Hotstar Keyboard Controls v4.0 Loaded");

let overlayTimeout;

// Default Settings
let SETTINGS = {
    skipTime: 10,
    volumeStep: 0.1,
    notifications: true,
    playbackSpeed: 1
};

// Load settings from Chrome Storage
chrome.storage.sync.get(
    {
        skipTime: 10,
        volumeStep: 0.1,
        notifications: true,
        playbackSpeed: 1
    },
    (data) => {
        SETTINGS = data;
        console.log("Loaded Settings:", SETTINGS);
    }
);

// Apply default playback speed when video loads
setInterval(() => {

    const video = document.querySelector("video");

    if (
        video &&
        !video.dataset.hotstarSpeedApplied
    ) {

        video.playbackRate =
            SETTINGS.playbackSpeed;

        video.dataset.hotstarSpeedApplied = "true";

        console.log(
            `Playback Speed Applied: ${SETTINGS.playbackSpeed}x`
        );
    }

}, 1000);

function showOverlay(message) {

    if (!SETTINGS.notifications) return;

    let overlay = document.getElementById("hotstar-overlay");

    if (!overlay) {

        overlay = document.createElement("div");
        overlay.id = "hotstar-overlay";

        overlay.style.position = "fixed";
        overlay.style.top = "50%";
        overlay.style.left = "50%";
        overlay.style.transform = "translate(-50%, -50%)";

        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.color = "white";

        overlay.style.padding = "20px 30px";
        overlay.style.borderRadius = "12px";

        overlay.style.fontSize = "28px";
        overlay.style.fontWeight = "bold";

        overlay.style.zIndex = "999999";
        overlay.style.pointerEvents = "none";

        document.body.appendChild(overlay);
    }

    overlay.innerText = message;
    overlay.style.display = "block";

    clearTimeout(overlayTimeout);

    overlayTimeout = setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);
}

window.addEventListener(
    "keydown",
    (event) => {

        const video = document.querySelector("video");

        if (!video) return;

        // Forward
        if (event.key === "ArrowRight" && !event.shiftKey) {

            event.preventDefault();

            video.currentTime += SETTINGS.skipTime;

            showOverlay(`⏩ +${SETTINGS.skipTime}s`);

            console.log(`Forward ${SETTINGS.skipTime} sec`);
        }

        // Backward
        if (event.key === "ArrowLeft" && !event.shiftKey) {

            event.preventDefault();

            video.currentTime -= SETTINGS.skipTime;

            showOverlay(`⏪ -${SETTINGS.skipTime}s`);

            console.log(`Backward ${SETTINGS.skipTime} sec`);
        }

        // Shift + Forward
        if (event.key === "ArrowRight" && event.shiftKey) {

            event.preventDefault();

            video.currentTime += SETTINGS.skipTime * 3;

            showOverlay(`⏩ +${SETTINGS.skipTime * 3}s`);
        }

        // Shift + Backward
        if (event.key === "ArrowLeft" && event.shiftKey) {

            event.preventDefault();

            video.currentTime -= SETTINGS.skipTime * 3;

            showOverlay(`⏪ -${SETTINGS.skipTime * 3}s`);
        }

        // Play / Pause
        if (event.code === "Space") {

            event.preventDefault();

            if (video.paused) {

                video.play();

                showOverlay("▶️ Playing");

            } else {

                video.pause();

                showOverlay("⏸ Paused");
            }
        }

        // Volume Up
        if (event.key === "ArrowUp") {

            event.preventDefault();

            video.volume = Math.min(
                1,
                video.volume + SETTINGS.volumeStep
            );

            showOverlay(
                `🔊 ${Math.round(video.volume * 100)}%`
            );
        }

        // Volume Down
        if (event.key === "ArrowDown") {

            event.preventDefault();

            video.volume = Math.max(
                0,
                video.volume - SETTINGS.volumeStep
            );

            showOverlay(
                `🔉 ${Math.round(video.volume * 100)}%`
            );
        }

        // Increase Playback Speed
        if (event.key === "]") {

            event.preventDefault();

            video.playbackRate = Math.min(
                2,
                video.playbackRate + 0.25
            );

            showOverlay(
                `⚡ ${video.playbackRate.toFixed(2)}x`
            );
        }

        // Decrease Playback Speed
        if (event.key === "[") {

            event.preventDefault();

            video.playbackRate = Math.max(
                0.5,
                video.playbackRate - 0.25
            );

            showOverlay(
                `⚡ ${video.playbackRate.toFixed(2)}x`
            );
        }

        // Reset Playback Speed
        if (event.key === "\\") {

            event.preventDefault();

            video.playbackRate = 1;

            showOverlay("⚡ 1x");
        }
    },
    true
);