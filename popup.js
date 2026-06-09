const skipTime = document.getElementById("skipTime");
const volumeStep = document.getElementById("volumeStep");
const notifications = document.getElementById("notifications");
const playbackSpeed = document.getElementById("playbackSpeed");
const statusMessage = document.getElementById("statusMessage");
const liveSeekStep =     document.getElementById("liveSeekStep");


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

    skipTime.value = data.skipTime;
    volumeStep.value = data.volumeStep;
    notifications.checked = data.notifications;
    playbackSpeed.value = data.playbackSpeed;
    liveSeekStep.value = data.liveSeekStep;

});
    
// Save settings
document.getElementById("saveBtn").addEventListener("click", () => {

    chrome.storage.sync.set({
        skipTime: Number(skipTime.value),
        volumeStep: Number(volumeStep.value),
        notifications: notifications.checked,
        playbackSpeed: Number(playbackSpeed.value),
        liveSeekStep: Number(liveSeekStep.value)
    });

    // Show success message
    statusMessage.innerText = "Settings Saved";

    setTimeout(() => {
        statusMessage.innerText = "";
    }, 2000);

});