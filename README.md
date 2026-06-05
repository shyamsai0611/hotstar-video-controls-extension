# 🎬 Hotstar Keyboard Controls Extension (Version 3.0)

A Chrome Extension that enhances the JioHotstar viewing experience by providing keyboard shortcuts, on-screen notifications, and customizable playback controls through a user-friendly settings panel.

---

## 📌 Overview

Hotstar Keyboard Controls Extension allows users to control video playback directly from their keyboard without relying on mouse interactions. The extension automatically detects the active video player and provides seamless playback control, visual feedback, and user-configurable settings.

Version 3.0 introduces a dedicated settings popup, customizable skip durations, adjustable volume controls, and persistent user preferences using Chrome Storage API.

---

## 🚀 Current Stable Release: Version 3.0

Version 3.0 is the latest stable release and transforms the extension from a simple keyboard utility into a configurable Chrome Extension product.

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

---

### ⚙️ Custom Settings Panel (New in Version 3.0)

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

#### Additional Controls

* Enable / Disable Overlay Notifications
* Persistent Settings Storage using Chrome Storage API

All settings remain saved even after restarting Chrome.

---

### 🎨 On-Screen Overlay Notifications

* Forward / Backward notifications
* Play / Pause status
* Volume percentage display
* Real-time visual feedback
* Lightweight implementation

Examples:

```text
⏩ +30s
⏪ -30s
▶️ Playing
⏸ Paused
🔊 80%
```

---

### ⚡ Highlights

* Automatic video element detection
* Lightweight and efficient
* Built using Chrome Extension Manifest V3
* No external dependencies
* Customizable user experience
* Real-time visual feedback
* Persistent user preferences
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
Notifications = Enabled
```

Result:

* → jumps forward 30 seconds
* ← jumps backward 30 seconds
* Shift + → jumps forward 90 seconds
* Shift + ← jumps backward 90 seconds
* ↑ increases volume by 20%
* ↓ decreases volume by 20%

---

## 🔍 How It Works

The extension injects a content script into supported pages.

The content script:

* Detects the active HTML5 video element
* Listens for keyboard events
* Updates playback position
* Adjusts volume levels
* Controls play/pause functionality
* Displays overlay notifications
* Reads user settings from Chrome Storage

All actions are performed directly on the video element without modifying the streaming platform itself.

---

## 📦 Release History

### 🚀 Version 3.0 (Current Stable Release)

#### New Features

* Settings Popup UI
* Custom Skip Duration
* Custom Volume Step
* Chrome Storage API Integration
* Persistent User Preferences
* Notification Toggle
* Improved User Experience
* Enhanced Extension Architecture

---

### 🎨 Version 2.0

#### Features

* On-Screen Overlay Notifications
* Play/Pause Feedback
* Volume Notifications
* Seek Notifications
* Improved Accessibility

---

### 🎬 Version 1.0

#### Initial Release

* Forward 10 seconds
* Backward 10 seconds
* Forward 30 seconds
* Backward 30 seconds
* Play/Pause Controls
* Volume Up/Down Controls
* Automatic Video Detection

---

## 🔖 Release Information

### Current Stable Release

| Version | Tag  | Status                 |
| ------- | ---- | ---------------------- |
| 3.0     | v3.0 | Current Stable Release |
| 2.0     | v2.0 | Previous Release       |
| 1.0     | v1.0 | Initial Release        |

### Release Name

**Hotstar Keyboard Controls Extension v3.0 – Custom Settings & User Preferences**

---

## 🎯 Future Enhancements

Planned improvements include:

* Playback Speed Controls
* Keyboard Shortcut Customization
* Fullscreen Toggle
* Mute / Unmute Shortcut
* Multiple Streaming Platform Support
* Dark / Light Notification Themes
* Chrome Web Store Publication

---

## 📈 Project Goals

The purpose of this project is to:

* Improve keyboard accessibility for video streaming
* Learn Chrome Extension development
* Explore Chrome Storage API
* Build practical browser productivity tools
* Create a configurable user-focused extension

---

## 🤝 Contributions

Suggestions, improvements, and feature requests are welcome.

Feel free to fork the repository, submit issues, or create pull requests.

---

## ⭐ Acknowledgements

Created as a learning project to explore Chrome Extension development, browser automation concepts, Chrome Storage API integration, and keyboard accessibility for video streaming platforms.
