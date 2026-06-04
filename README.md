# 🎬 Hotstar Keyboard Controls Extension (Version 2.0)

A Chrome Extension that enhances the JioHotstar viewing experience by providing intuitive keyboard shortcuts and real-time on-screen feedback for video playback controls.

## 📌 Overview

Hotstar Keyboard Controls Extension allows users to control video playback directly from their keyboard without relying on mouse interactions. The extension automatically detects the active video player and provides seamless playback control along with visual notifications.

Version 2.0 introduces on-screen overlay notifications, making user actions visible and improving the overall viewing experience.

---

## 🚀 Current Stable Release: Version 2.0

Version 2.0 is the first stable release of the project and includes enhanced usability features, visual feedback, and improved interaction with the video player.

---

## ✨ Features

### 🎮 Playback Controls

| Shortcut  | Action              |
| --------- | ------------------- |
| →         | Forward 10 seconds  |
| ←         | Backward 10 seconds |
| Shift + → | Forward 30 seconds  |
| Shift + ← | Backward 30 seconds |
| Space     | Play / Pause        |
| ↑         | Volume Up           |
| ↓         | Volume Down         |

### 🎨 On-Screen Overlay Notifications (New in Version 2.0)

* Visual notification when seeking forward
* Visual notification when seeking backward
* Volume percentage display
* Play notification
* Pause notification
* Smooth fade-in and fade-out effects
* Lightweight overlay implementation

### ⚡ Highlights

* Automatic video element detection
* Lightweight and efficient
* Built using Chrome Extension Manifest V3
* No external libraries or dependencies
* Easy installation and usage
* Real-time visual feedback
* Works directly on JioHotstar video pages

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

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shyamsai0611/hotstar-video-controls-extension.git
```

### 2. Open Chrome Extensions

Navigate to:

```text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on Developer Mode from the top-right corner.

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

* Press → to jump forward 10 seconds
* Press ← to jump backward 10 seconds
* Press Shift + → to jump forward 30 seconds
* Press Shift + ← to jump backward 30 seconds
* Press Space to play or pause
* Press ↑ to increase volume
* Press ↓ to decrease volume

Every action displays a visual notification on the screen.

---

## 🔍 How It Works

The extension injects a content script into supported pages.

The content script:

* Detects the active HTML5 video element
* Listens for keyboard events
* Updates playback position
* Adjusts volume levels
* Controls play/pause functionality
* Displays on-screen notifications for user actions

All actions are performed directly on the video element without modifying the streaming platform itself.

---

## 📦 Release History

### Version 2.0 (Current Stable Release)

#### New Features

* Added on-screen overlay notifications
* Added play/pause status feedback
* Added volume level notifications
* Added forward/backward seek notifications
* Improved overall user experience
* Enhanced accessibility and usability

### Version 1.0

#### Initial Release

* Forward 10 seconds
* Backward 10 seconds
* Forward 30 seconds
* Backward 30 seconds
* Play/Pause control
* Volume Up/Down control
* Automatic video detection

---

## 🎯 Future Enhancements

Planned improvements include:

* Customizable skip intervals
* User-defined keyboard shortcuts
* Extension settings popup
* Multiple streaming platform support
* Dark and light notification themes
* Chrome Web Store publication

---

## 📈 Project Goals

The purpose of this project is to:

* Improve keyboard accessibility for video streaming
* Learn Chrome Extension development
* Explore DOM manipulation and event handling
* Build practical browser productivity tools

---

## ⭐ GitHub Release

### Stable Release

**Tag:** v2.0

**Release Name:** Hotstar Keyboard Controls Extension v2.0 - Stable Release

### What's New

* On-screen playback notifications
* Visual feedback for all controls
* Better user experience
* Improved extension stability

---

## 🤝 Contributions

Suggestions, improvements, and feature requests are welcome.

Feel free to fork the repository, submit issues, or create pull requests.

---

## ⭐ Acknowledgements

Created as a learning project to explore Chrome Extension development and improve keyboard accessibility for video streaming platforms.
