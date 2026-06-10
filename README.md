# Hotstar Keyboard Controls Extension

A Chrome Extension that enhances the JioHotstar viewing experience through customizable keyboard shortcuts, playback controls, live stream navigation, volume management, fullscreen support, and persistent user preferences.

## Overview

Hotstar Keyboard Controls Extension allows users to control video playback directly from their keyboard without relying on mouse interactions.

The extension automatically detects video players on JioHotstar and provides seamless playback control, visual feedback, customizable settings, and enhanced controls for both on-demand and live-stream content.

## Current Release

Version: 6.0

Release Name: Production Release

Status: Stable

---

## Features

### Playback Controls

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
| \         | Reset Playback Speed       |

---

### Live Stream Controls

Designed for sports and live-event streaming.

Supported Content:

* Cricket
* Football
* Formula 1
* Other JioHotstar Live Events

#### Shortcuts

| Shortcut | Action        |
| -------- | ------------- |
| J        | Jump Backward |
| L        | Jump Forward  |

#### Live Seek Duration Options

* 30 Seconds
* 60 Seconds
* 120 Seconds
* 300 Seconds

Benefits:

* Review important moments instantly
* Navigate live streams efficiently
* Faster replay access during sports events
* Works within Hotstar's available DVR buffer

---

### Audio Controls

| Shortcut | Action        |
| -------- | ------------- |
| M        | Mute / Unmute |
| ↑        | Volume Up     |
| ↓        | Volume Down   |

---

### Display Controls

| Shortcut  | Action            |
| --------- | ----------------- |
| F         | Toggle Fullscreen |

---

### Playback Speed Management

Supported Playback Speeds:

* 0.5x
* 0.75x
* 1x
* 1.25x
* 1.5x
* 1.75x
* 2x

Capabilities:

* Default playback speed configuration
* Automatic playback speed application
* Real-time speed updates
* Persistent playback preferences

---

### Settings Panel

The extension popup allows users to configure:

#### Skip Duration

* 5 Seconds
* 10 Seconds
* 30 Seconds
* 60 Seconds

#### Volume Step

* 5%
* 10%
* 20%

#### Playback Speed

* 0.5x to 2x

#### Live Seek Duration

* 30 Seconds
* 60 Seconds
* 120 Seconds
* 300 Seconds

#### Additional Options

* Enable / Disable Overlay Notifications
* Persistent Settings Storage
* Real-Time Settings Synchronization

All preferences are stored using Chrome Storage API and remain available across browser sessions.

---

### Overlay Notifications

The extension displays visual feedback for all supported actions.

Examples:

```text
+30s
-30s
Playing
Paused
80%
1.75x
Muted
Unmuted
Fullscreen
Exit Fullscreen
```

---

## Technical Features

* Chrome Extension Manifest V3
* Chrome Storage API Integration
* Keyboard Event Handling
* Automatic Video Detection
* Persistent User Preferences
* Real-Time Settings Updates
* Lightweight Architecture
* No External Dependencies

---

## Technology Stack

* JavaScript (ES6)
* Chrome Extensions API
* Chrome Storage API
* HTML5
* CSS3
* Manifest V3

---

## Project Structure

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

## Installation

### Clone Repository

```bash
git clone https://github.com/shyamsai0611/hotstar-video-controls-extension.git
```

### Load Extension

1. Open Chrome
2. Navigate to:

```text
chrome://extensions
```

3. Enable Developer Mode
4. Click Load Unpacked
5. Select the project folder

### Usage

1. Open JioHotstar
2. Play any video or live stream
3. Use keyboard shortcuts for playback control

---

## Release History

### Version 6.0 (Current)

New Features:

* Mute / Unmute Shortcut
* Fullscreen Toggle Shortcut
* Built-In Help Menu
* Improved User Experience
* Stability Improvements
* Production Release

### Version 5.0

* Live Stream Controls
* Configurable Live Seek Duration
* J/L Navigation Support
* Enhanced Sports Streaming Experience

### Version 4.5

* Redesigned Popup Interface
* Playback Speed Controls
* Real-Time Settings Synchronization

### Version 4.0

* Playback Speed Management
* Default Playback Speed Configuration

### Version 3.0

* Settings Popup
* Chrome Storage API Integration
* User Preference Persistence

### Version 2.0

* Overlay Notifications
* Playback Feedback

### Version 1.0

* Basic Keyboard Controls
* Play/Pause Support
* Volume Controls
* Video Seeking

---

## Future Roadmap

Planned Features:

* Custom Keyboard Shortcut Mapping
* Jump to Live Functionality
* Multiple Streaming Platform Support
* Chrome Web Store Publishing
* Enhanced Accessibility Features
* Analytics Dashboard

---

## Contribution

Contributions, feature requests, and bug reports are welcome.

Please open an issue or submit a pull request for proposed improvements.

---
