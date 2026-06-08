const skipTime = document.getElementById("skipTime");
const volumeStep = document.getElementById("volumeStep");
const notifications = document.getElementById("notifications");
const playbackSpeed = document.getElementById("playbackSpeed");

chrome.storage.sync.get(
{
    skipTime: 10,
    volumeStep: 0.1,
    notifications: true,
    playbackSpeed: 1
},
(data) => {
    skipTime.value = data.skipTime;
    volumeStep.value = data.volumeStep;
    notifications.checked = data.notifications;
    playbackSpeed.value = data.playbackSpeed;
});

document.getElementById("saveBtn").addEventListener("click", () => {

    chrome.storage.sync.set({
        skipTime: Number(skipTime.value),
        volumeStep: Number(volumeStep.value),
        notifications: notifications.checked,
        playbackSpeed: Number(playbackSpeed.value)
    });

    alert("Settings Saved!");
});