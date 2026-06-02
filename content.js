console.log("Hotstar Keyboard Controls v2.0 Loaded");

let overlayTimeout;

function showOverlay(message) {

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

        // Forward 10 sec
        if (event.key === "ArrowRight" && !event.shiftKey) {

            event.preventDefault();

            video.currentTime += 10;

            showOverlay("⏩ +10s");

            console.log("Forward 10 sec");
        }

        // Backward 10 sec
        if (event.key === "ArrowLeft" && !event.shiftKey) {

            event.preventDefault();

            video.currentTime -= 10;

            showOverlay("⏪ -10s");

            console.log("Backward 10 sec");
        }

        // Forward 30 sec
        if (event.key === "ArrowRight" && event.shiftKey) {

            event.preventDefault();

            video.currentTime += 30;

            showOverlay("⏩ +30s");
        }

        // Backward 30 sec
        if (event.key === "ArrowLeft" && event.shiftKey) {

            event.preventDefault();

            video.currentTime -= 30;

            showOverlay("⏪ -30s");
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
                video.volume + 0.1
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
                video.volume - 0.1
            );

            showOverlay(
                `🔉 ${Math.round(video.volume * 100)}%`
            );
        }
    },
    true
);