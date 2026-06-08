# 🎬 Hotstar Keyboard Controls Extension (Version 4.5)

A Chrome Extension that enhances the JioHotstar viewing experience by providing keyboard shortcuts, on-screen notifications, customizable playback controls, playback speed management, and a cleaner user-friendly settings panel.

---

## 📌 Overview

Hotstar Keyboard Controls Extension allows users to control video playback directly from their keyboard without relying on mouse interactions.

The extension automatically detects the active video player and provides seamless playback control, visual feedback, persistent settings, and customizable playback preferences.

Version 4.5 focuses on improving the extension's user experience by introducing a cleaner popup interface, real-time settings synchronization, and enhanced playback speed controls.

---

## 🚀 Current Stable Release: Version 4.5

Version 4.5 is the latest stable release and improves usability, settings management, and overall extension polish.

---

## ✨ Features

### 🎮 Playback Controls

| Shortcut  | Action                     |
| --------- | -------------------------- |
| →         | Forward (Custom Duration)  |
| ←         | Backward (Custom Duration) |
| Shift + → | Forward 3× Skip Duration   |
| Shift + ← | Backward 3× Skip Duration  |
| Space     | Play / Pause               |
| ↑         | Volume Up                  |
| ↓         | Volume Down                |
| ]         | Increase Playback Speed    |
| [         | Decrease Playback Speed    |
| \         | Reset Playback Speed to 1x |

---

### ⚙️ Custom Settings Panel

Users can configure extension behavior directly from the popup.

#### Skip Duration Options

* 5 seconds
* 10 seconds
* 30 seconds
* 60 seconds

#### Volume Step Options

* 5%
* 10%
* 20%

#### Playback Speed Options

* 0.5x
* 0.75x
* 1x
* 1.25x
* 1.5x
* 1.75x
* 2x

#### Additional Controls

* Enable / Disable Overlay Notifications
* Persistent Settings Storage using Chrome Storage API
* Real-Time Settings Synchronization

All settings remain saved even after restarting Chrome.

---

### 🚀 Playback Speed Controls

* Set preferred playback speed from extension popup
* Automatically applied when a video loads
* Increase playback speed using keyboard shortcuts
* Decrease playback speed using keyboard shortcuts
* Reset playback speed instantly to 1x
* Settings persist across browser sessions

---

### 🎨 On-Screen Overlay Notifications

Visual feedback is displayed for:

* Forward / Backward actions
* Play / Pause status
* Volume percentage changes
* Playback speed changes

Examples:

```text
⏩ +30s
⏪ -30s
▶️ Playing
⏸ Paused
🔊 80%
⚡ 1.75x
```

---

### 🎨 Improved Popup UI (New in Version 4.5)

* Cleaner layout design
* Better section organization
* Improved spacing and readability
* Modern button styling
* Better settings visibility
* Version display inside popup
* Success confirmation after saving settings

---

### ⚡ Highlights

* Automatic video element detection
* Lightweight and efficient
* Built using Chrome Extension Manifest V3
* No external dependencies
* Customizable user experience
* Real-time visual feedback
* Persistent user preferences
* Playback speed management
* Real-time settings updates
* Works directly on JioHotstar video pages

---

## 🛠️ Tech Stack

* JavaScript (ES6)
* Chrome Extensions API
* Chrome Storage API
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
│
├── popup.html
├── popup.js
├── popup.css
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shyamsai0611/hotstar-video-controls-extension.git
```

### 2. Open Chrome Extensions

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

Configure the extension popup:

```text
Skip Duration = 30 sec
Volume Step = 20%
Playback Speed = 1.75x
Notifications = Enabled
```

Result:

* → jumps forward 30 seconds
* ← jumps backward 30 seconds
* Shift + → jumps forward 90 seconds
* Shift + ← jumps backward 90 seconds
* ↑ increases volume by 20%
* ↓ decreases volume by 20%
* Videos automatically play at 1.75x speed

---

## 📦 Release History

### 🚀 Version 4.5 (Current Stable Release)

#### New Features

* Improved Popup UI Design
* Better Layout Organization
* Real-Time Settings Synchronization
* Playback Speed Keyboard Shortcuts
* Instant Playback Speed Updates
* Enhanced User Experience

---

### 🚀 Version 4.0

* Playback Speed Controls
* Default Playback Speed Setting
* Persistent Playback Speed Preferences
* Automatic Speed Application on Video Load

---

### ⚙️ Version 3.0

* Settings Popup UI
* Custom Skip Duration
* Custom Volume Step
* Chrome Storage API Integration
* Persistent User Preferences

---

### 🎨 Version 2.0

* On-Screen Overlay Notifications
* Play/Pause Feedback
* Volume Notifications
* Seek Notifications

---

### 🎬 Version 1.0

* Basic Keyboard Controls
* Play/Pause Controls
* Volume Controls
* Video Seeking Controls

---

## 🔖 Release Information

| Version | Tag  | Status                 |
| ------- | ---- | ---------------------- |
| 4.5     | v4.5 | Current Stable Release |
| 4.0     | v4.0 | Previous Release       |
| 3.0     | v3.0 | Previous Release       |
| 2.0     | v2.0 | Previous Release       |
| 1.0     | v1.0 | Initial Release        |

### Release Name

**Hotstar Keyboard Controls Extension v4.5 – UI Improvements & Real-Time Settings Sync**

---

## 🎯 Future Enhancements (v5.0)

* Keyboard Shortcut Customization
* Fullscreen Toggle
* Mute / Unmute Shortcut
* Picture-in-Picture Mode
* Multiple Streaming Platform Support
* Dark / Light Themes
* Chrome Web Store Publication

---

## 🤝 Contributions

Suggestions, improvements, and feature requests are welcome.

Feel free to fork the repository, submit issues, or create pull requests.

---

## ⭐ Acknowledgements

Created as a learning project to explore Chrome Extension development, browser automation concepts, Chrome Storage API integration, playback speed controls, and keyboard accessibility for video streaming platforms.
