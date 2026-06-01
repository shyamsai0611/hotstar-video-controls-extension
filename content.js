console.log("Hotstar Keyboard Controls Loaded");

window.addEventListener(
    "keydown",
    (event) => {

        const video = document.querySelector("video");

        if (!video) {
            console.log("Video not found");
            return;
        }

        // Forward 10 sec
        if (event.key === "ArrowRight" && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            video.currentTime += 10;

            console.log(
                "⏩ Forward 10 sec | Current Time:",
                video.currentTime
            );
        }

        // Backward 10 sec
        if (event.key === "ArrowLeft" && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            video.currentTime -= 10;

            console.log(
                "⏪ Backward 10 sec | Current Time:",
                video.currentTime
            );
        }

        // Forward 30 sec
        if (event.key === "ArrowRight" && event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            video.currentTime += 30;

            console.log(
                "⏩⏩ Forward 30 sec | Current Time:",
                video.currentTime
            );
        }

        // Backward 30 sec
        if (event.key === "ArrowLeft" && event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            video.currentTime -= 30;

            console.log(
                "⏪⏪ Backward 30 sec | Current Time:",
                video.currentTime
            );
        }

        // Play / Pause
        if (event.code === "Space") {
            event.preventDefault();
            event.stopPropagation();

            if (video.paused) {
                video.play();
                console.log("▶️ Play");
            } else {
                video.pause();
                console.log("⏸ Pause");
            }
        }

        // Volume Up
        if (event.key === "ArrowUp") {
            event.preventDefault();
            event.stopPropagation();

            video.volume = Math.min(1, video.volume + 0.1);

            console.log(
                "🔊 Volume:",
                Math.round(video.volume * 100) + "%"
            );
        }

        // Volume Down
        if (event.key === "ArrowDown") {
            event.preventDefault();
            event.stopPropagation();

            video.volume = Math.max(0, video.volume - 0.1);

            console.log(
                "🔉 Volume:",
                Math.round(video.volume * 100) + "%"
            );
        }
    },
    true
);