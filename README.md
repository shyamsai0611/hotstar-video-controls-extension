# 🎬 Hotstar Keyboard Controls Extension (Version 4.0)

A Chrome Extension that enhances the JioHotstar viewing experience by providing keyboard shortcuts, on-screen notifications, customizable playback controls, and playback speed management through a user-friendly settings panel.

---

## 📌 Overview

Hotstar Keyboard Controls Extension allows users to control video playback directly from their keyboard without relying on mouse interactions. The extension automatically detects the active video player and provides seamless playback control, visual feedback, persistent settings, and customizable playback preferences.

Version 4.0 introduces Playback Speed Controls, allowing users to set a preferred default playback speed that is automatically applied whenever a video loads.

---

## 🚀 Current Stable Release: Version 4.0

Version 4.0 is the latest stable release and expands the extension into a more complete video control solution by adding playback speed customization.

---

## ✨ Features

### 🎮 Playback Controls

| Shortcut | Action |
|-----------|----------|
| → | Forward (Custom Duration) |
| ← | Backward (Custom Duration) |
| Shift + → | Forward 3× Skip Duration |
| Shift + ← | Backward 3× Skip Duration |
| Space | Play / Pause |
| ↑ | Volume Up |
| ↓ | Volume Down |

---

### ⚙️ Custom Settings Panel

Users can configure extension behavior directly from the popup.

#### Skip Duration Options

- 5 seconds
- 10 seconds
- 30 seconds
- 60 seconds

#### Volume Step Options

- 5%
- 10%
- 20%

#### Playback Speed Options (New in Version 4.0)

- 0.5x
- 0.75x
- 1x
- 1.25x
- 1.5x
- 1.75x
- 2x

#### Additional Controls

- Enable / Disable Overlay Notifications
- Persistent Settings Storage using Chrome Storage API

All settings remain saved even after restarting Chrome.

---

### 🚀 Playback Speed Controls (New in Version 4.0)

- Set preferred playback speed from extension popup
- Automatically applied to detected videos
- Settings persist across browser sessions
- Works with all supported JioHotstar videos

Example:

```text
Playback Speed = 1.5x
```

All newly loaded videos will automatically play at 1.5x speed.

---

### 🎨 On-Screen Overlay Notifications

- Forward / Backward notifications
- Play / Pause status
- Volume percentage display
- Playback speed notifications
- Real-time visual feedback

Examples:

```text
⏩ +30s
⏪ -30s
▶️ Playing
⏸ Paused
🔊 80%
🚀 1.5x
```

---

### ⚡ Highlights

- Automatic video element detection
- Lightweight and efficient
- Built using Chrome Extension Manifest V3
- No external dependencies
- Customizable user experience
- Real-time visual feedback
- Persistent user preferences
- Playback speed management
- Works directly on JioHotstar video pages

---

## 🛠️ Tech Stack

- JavaScript (ES6)
- Chrome Extensions API
- Chrome Storage API
- Manifest V3
- DOM Manipulation
- Event Handling

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
Playback Speed = 1.5x
Notifications = Enabled
```

Result:

- → jumps forward 30 seconds
- ← jumps backward 30 seconds
- Shift + → jumps forward 90 seconds
- Shift + ← jumps backward 90 seconds
- ↑ increases volume by 20%
- ↓ decreases volume by 20%
- Videos automatically play at 1.5x speed

---

## 🔍 How It Works

The extension injects a content script into supported pages.

The content script:

- Detects the active HTML5 video element
- Listens for keyboard events
- Updates playback position
- Adjusts volume levels
- Controls play/pause functionality
- Applies saved playback speed settings
- Displays overlay notifications
- Reads user settings from Chrome Storage

All actions are performed directly on the video element without modifying the streaming platform itself.

---

## 📦 Release History

### 🚀 Version 4.0 (Current Stable Release)

#### New Features

- Playback Speed Controls
- Default Playback Speed Setting
- Persistent Playback Speed Preferences
- Automatic Speed Application on Video Load
- Improved User Experience

---

### ⚙️ Version 3.0

#### Features

- Settings Popup UI
- Custom Skip Duration
- Custom Volume Step
- Chrome Storage API Integration
- Persistent User Preferences
- Notification Toggle

---

### 🎨 Version 2.0

#### Features

- On-Screen Overlay Notifications
- Play/Pause Feedback
- Volume Notifications
- Seek Notifications

---

### 🎬 Version 1.0

#### Initial Release

- Forward 10 seconds
- Backward 10 seconds
- Forward 30 seconds
- Backward 30 seconds
- Play/Pause Controls
- Volume Up/Down Controls
- Automatic Video Detection

---

## 🔖 Release Information

| Version | Tag | Status |
|----------|------|---------|
| 4.0 | v4.0 | Current Stable Release |
| 3.0 | v3.0 | Previous Release |
| 2.0 | v2.0 | Previous Release |
| 1.0 | v1.0 | Initial Release |

### Release Name

**Hotstar Keyboard Controls Extension v4.0 – Playback Speed Controls & Enhanced User Preferences**

---

## 🎯 Future Enhancements

Planned improvements include:

- Keyboard Shortcut Customization
- Fullscreen Toggle
- Mute / Unmute Shortcut
- Picture-in-Picture Mode
- Multiple Streaming Platform Support
- Dark / Light Notification Themes
- Chrome Web Store Publication

---

## 📈 Project Goals

The purpose of this project is to:

- Improve keyboard accessibility for video streaming
- Learn Chrome Extension development
- Explore Chrome Storage API
- Build practical browser productivity tools
- Create a configurable user-focused extension

---

## 🤝 Contributions

Suggestions, improvements, and feature requests are welcome.

Feel free to fork the repository, submit issues, or create pull requests.

---

## ⭐ Acknowledgements

Created as a learning project to explore Chrome Extension development, browser automation concepts, Chrome Storage API integration, playback speed controls, and keyboard accessibility for video streaming platforms.