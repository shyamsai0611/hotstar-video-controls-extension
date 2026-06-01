# 🎬 Hotstar Keyboard Controls Extension

A Chrome Extension that enables keyboard shortcuts for video playback on JioHotstar, providing a smoother and more accessible viewing experience.

---

## 📌 Problem Statement

Many users prefer controlling video playback using keyboard shortcuts. However, on some streaming platforms, common controls such as seeking forward/backward, adjusting volume, and play/pause may not be readily available through keyboard interactions.

The goal of this project is to improve the user experience by introducing intuitive keyboard controls for video playback through a lightweight Chrome Extension.

---

## 🚀 Features

### Playback Controls

| Shortcut  | Action              |
| --------- | ------------------- |
| →         | Forward 10 seconds  |
| ←         | Backward 10 seconds |
| Shift + → | Forward 30 seconds  |
| Shift + ← | Backward 30 seconds |
| Space     | Play / Pause        |
| ↑         | Volume Up           |
| ↓         | Volume Down         |

### Highlights

* Automatically detects video elements.
* Lightweight and efficient.
* Built using Chrome Extension Manifest V3.
* No external dependencies.
* Easy to install and use.

---

## 🛠️ Tech Stack

* JavaScript (ES6)
* Chrome Extensions API
* Manifest V3
* DOM Manipulation
* Event Handling

---

## 📂 Project Structure

```text
Hotstar-Control-Extension/
│
├── manifest.json
├── content.js
├── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Hotstar-Control-Extension.git
```

### 2. Open Chrome Extensions

Navigate to:

```text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on **Developer Mode** in the top-right corner.

### 4. Load the Extension

Click:

```text
Load Unpacked
```

Select the project folder.

### 5. Start Using

Open JioHotstar, play a video, and use the keyboard shortcuts.

---

## 🎮 Usage Example

While watching a video:

* Press **→** to jump forward 10 seconds.
* Press **←** to jump backward 10 seconds.
* Press **Shift + →** to jump forward 30 seconds.
* Press **Shift + ←** to jump backward 30 seconds.
* Press **Space** to play or pause.
* Press **↑** or **↓** to adjust volume.

---

## 🔍 How It Works

The extension injects a content script into supported pages.

The content script:

1. Detects the active HTML5 video element.
2. Listens for keyboard events.
3. Updates playback position, volume, or playback state.
4. Applies the action directly to the video player.

---

## 🎯 Future Enhancements

* On-screen playback notifications.
* Customizable skip intervals.
* Extension settings popup.
* User-defined keyboard shortcuts.
* Support for additional streaming platforms.
* Chrome Web Store publication.


---

## ⭐ Acknowledgements

This project was created as a learning exercise to explore Chrome Extension development and enhance the video streaming experience through keyboard accessibility.
