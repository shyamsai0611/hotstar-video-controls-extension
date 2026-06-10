console.log("Hotstar Keyboard Controls v6.0 Loaded");

let overlayTimeout;

// Default Settings
let SETTINGS = {
    skipTime: 10,
    volumeStep: 0.1,
    notifications: true,
    playbackSpeed: 1,
    liveSeekStep: 60
};

function applyPlaybackSpeed() {

    const video = document.querySelector("video");

    if (!video) return;

    if (video.playbackRate !== SETTINGS.playbackSpeed) {

        video.playbackRate = SETTINGS.playbackSpeed;

        console.log(
            `Playback Speed Applied: ${SETTINGS.playbackSpeed}x`
        );
    }
}

// Listen for popup setting changes
chrome.storage.onChanged.addListener((changes, area) => {

    if (area !== "sync") return;

    if (changes.skipTime)
        SETTINGS.skipTime = changes.skipTime.newValue;

    if (changes.volumeStep)
        SETTINGS.volumeStep = changes.volumeStep.newValue;

    if (changes.notifications)
        SETTINGS.notifications = changes.notifications.newValue;

    if (changes.playbackSpeed) {

        SETTINGS.playbackSpeed =
            changes.playbackSpeed.newValue;

        applyPlaybackSpeed();

        showOverlay(
            `⚡ ${SETTINGS.playbackSpeed}x`
        );
    }

    if (changes.liveSeekStep)
        SETTINGS.liveSeekStep =
            changes.liveSeekStep.newValue;

    console.log(
        "Settings Updated:",
        SETTINGS
    );
});

// Load saved settings
chrome.storage.sync.get(
{
    skipTime: 10,
    volumeStep: 0.1,
    notifications: true,
    playbackSpeed: 1,
    liveSeekStep: 60
},
(data) => {

    SETTINGS = data;

    applyPlaybackSpeed();

    console.log(
        "Loaded Settings:",
        SETTINGS
    );
});

// Keep playback speed applied
setInterval(() => {

    applyPlaybackSpeed();

}, 2000);

function showOverlay(message) {

    if (!SETTINGS.notifications) return;

    let overlay =
        document.getElementById(
            "hotstar-overlay"
        );

    if (!overlay) {

        overlay =
            document.createElement("div");

        overlay.id = "hotstar-overlay";

        overlay.style.position = "fixed";
        overlay.style.top = "50%";
        overlay.style.left = "50%";
        overlay.style.transform =
            "translate(-50%, -50%)";

        overlay.style.background =
            "rgba(0,0,0,0.8)";

        overlay.style.color = "white";

        overlay.style.padding =
            "20px 30px";

        overlay.style.borderRadius =
            "12px";

        overlay.style.fontSize =
            "28px";

        overlay.style.fontWeight =
            "bold";

        overlay.style.zIndex =
            "999999";

        overlay.style.pointerEvents =
            "none";

        document.body.appendChild(
            overlay
        );
    }

    overlay.innerText = message;

    overlay.style.display = "block";

    clearTimeout(overlayTimeout);

    overlayTimeout = setTimeout(() => {

        overlay.style.display = "none";

    }, 1000);
}

function showHelp() {

    showOverlay(
`🎬 Hotkeys

→ Forward
← Backward
Shift+→ Big Forward
Shift+← Big Back

↑ Volume Up
↓ Volume Down

] Speed Up
[ Speed Down
\\ Reset Speed

J Live Back
L Live Forward

M Mute
F Fullscreen`
    );
}

// Keyboard Controls
window.addEventListener(
    "keydown",
    (event) => {

        console.log("KEY:", event.key);
        const video = document.querySelector("video");

        if (!video) return;

        // Help Menu
        if (
            event.shiftKey &&
            event.key === "/"
        ) {

            event.preventDefault();

            showHelp();

            return;
        }

        // Forward
        if (
            event.key === "ArrowRight" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            video.currentTime +=
                SETTINGS.skipTime;

            showOverlay(
                `⏩ +${SETTINGS.skipTime}s`
            );
        }

        // Backward
        if (
            event.key === "ArrowLeft" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            video.currentTime -=
                SETTINGS.skipTime;

            showOverlay(
                `⏪ -${SETTINGS.skipTime}s`
            );
        }

        // Shift Forward
        if (
            event.key === "ArrowRight" &&
            event.shiftKey
        ) {

            event.preventDefault();

            video.currentTime +=
                SETTINGS.skipTime * 3;

            showOverlay(
                `⏩ +${SETTINGS.skipTime * 3}s`
            );
        }

        // Shift Backward
        if (
            event.key === "ArrowLeft" &&
            event.shiftKey
        ) {

            event.preventDefault();

            video.currentTime -=
                SETTINGS.skipTime * 3;

            showOverlay(
                `⏪ -${SETTINGS.skipTime * 3}s`
            );
        }

        // Play Pause
        if (event.code === "Space") {

            event.preventDefault();

            if (video.paused) {

                video.play();

                showOverlay(
                    "▶️ Playing"
                );

            } else {

                video.pause();

                showOverlay(
                    "⏸ Paused"
                );
            }
        }

        // Volume Up
        if (event.key === "ArrowUp") {

            event.preventDefault();

            video.volume = Math.min(
                1,
                video.volume +
                SETTINGS.volumeStep
            );

            showOverlay(
                `🔊 ${Math.round(
                    video.volume * 100
                )}%`
            );
        }

        // Volume Down
        if (event.key === "ArrowDown") {

            event.preventDefault();

            video.volume = Math.max(
                0,
                video.volume -
                SETTINGS.volumeStep
            );

            showOverlay(
                `🔉 ${Math.round(
                    video.volume * 100
                )}%`
            );
        }

        // Speed Up
        if (event.key === "]") {

            event.preventDefault();

            video.playbackRate =
                Math.min(
                    2,
                    video.playbackRate + 0.25
                );

            showOverlay(
                `⚡ ${video.playbackRate.toFixed(2)}x`
            );
        }

        // Speed Down
        if (event.key === "[") {

            event.preventDefault();

            video.playbackRate =
                Math.max(
                    0.5,
                    video.playbackRate - 0.25
                );

            showOverlay(
                `⚡ ${video.playbackRate.toFixed(2)}x`
            );
        }

        // Reset Speed
        if (event.key === "\\") {

            event.preventDefault();

            video.playbackRate = 1;

            showOverlay("⚡ 1x");
        }

        // Live Back
        if (event.key === "j") {

            event.preventDefault();

            video.currentTime -=
                SETTINGS.liveSeekStep;

            showOverlay(
                `⏪ ${SETTINGS.liveSeekStep}s`
            );
        }

        // Live Forward
        if (event.key === "l") {

            event.preventDefault();

            video.currentTime +=
                SETTINGS.liveSeekStep;

            showOverlay(
                `⏩ ${SETTINGS.liveSeekStep}s`
            );
        }

        // Mute
        if (event.key.toLowerCase() === "m") {

            event.preventDefault();

            video.muted = !video.muted;
            console.log("Muted:", video.muted);
            showOverlay(
                video.muted
                    ? "🔇 Muted"
                    : "🔊 Unmuted"
            );
        }

        // Fullscreen
        if (event.key.toLowerCase() === "f") {

            event.preventDefault();

            if (
                !document.fullscreenElement
            ) {

                video.requestFullscreen();

                showOverlay(
                    "🖥 Fullscreen"
                );

            } else {

                document.exitFullscreen();

                showOverlay(
                    "❌ Exit Fullscreen"
                );
            }
        }
    },
    true
);