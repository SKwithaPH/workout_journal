# Workout Journal

A lightweight, offline-capable progressive web application for tracking strength training blocks, managing exercise libraries, and logging workouts. Built with a zero-build-step architecture using vanilla JavaScript, Tailwind CSS, and Dexie.js.

## Features

* **Workout Logger:** Dynamic set tracking with automatic ramping warmups, working weight calculations based on Training Maxes, and AMRAP performance detection.
* **Plate Calculator:** Quick bar loading visualizer mapped to custom plate inventory pairs.
* **Exercise Library:** Categorized movement database with support for custom exercise creation and metric types (loaded vs. bodyweight/reps).
* **Calendar History:** Monthly grid view to review past session dates, durations, and training notes.
* **Routine & Data Management:** Full JSON backup export and additive import tools to merge custom routines without overwriting local history.

## Technology Stack

* HTML5 / Vanilla JavaScript (ES6+)
* Tailwind CSS (via Play CDN)
* Dexie.js (Client-side IndexedDB wrapper)

## Local Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
