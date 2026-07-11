# Image Editor

A lightweight browser-based image editor built with HTML, CSS, and vanilla JavaScript. It lets you upload an image, preview it on a canvas, adjust common visual filters, apply one of several presets, reset changes, and download the edited result as a PNG.

## Features

- Upload any local image file supported by the browser.
- Preview the image on an HTML canvas.
- Adjust live filters with sliders:
  - Brightness
  - Contrast
  - Saturation
  - Hue rotation
  - Blur
  - Grayscale
  - Sepia
  - Opacity
  - Invert
- Apply one of the built-in presets:
  - Normal
  - Drama
  - Vintage
  - OldSchool
  - NoirFilm
  - Sunburn
  - CoolTone
  - Retro70s
  - HighKey
  - Moody
  - Vivid
  - FadedMemory
  - Polaroid
  - DarkMystery
- Reset all filters back to their defaults.
- Download the edited image as `edited-image.png`.

## Project Structure

- `index.html` - Main page markup and layout.
- `style.css` - Base layout, controls, canvas container, and slider styles.
- `theme.css` - CSS variables for colors, spacing, and sizing.
- `script.js` - Filter state, preset logic, canvas rendering, and download handling.

## How It Works

1. Choose an image from your device.
2. The image is loaded into a canvas element.
3. Slider changes update the canvas using the browser canvas `filter` API.
4. Presets update multiple filters at once.
5. Download exports the canvas content as a PNG file.

## Getting Started

1. Open `index.html` in a browser.
2. Click `Choose Image` and select a file.
3. Use the filter sliders or preset buttons to edit the image.
4. Click `Reset` to restore default filter values.
5. Click `Download` to save the result.

## Requirements

- A modern browser with HTML5 canvas support.
- Internet access for the Remix Icon CDN used in `index.html`.

## Notes

- The editor works entirely on the client side.
- The edited image is not persisted between page refreshes.
- The canvas export uses the current canvas content only, so any edits are applied to the loaded image in memory.

## Known Implementation Details

- The filter controls are generated dynamically from the filter configuration in `script.js`.
- Presets are defined as objects in `script.js` and update the same filter state used by the sliders.
- The UI is split into a left work area for the image canvas and a right panel for filters and presets.

## Future Improvements

- Add a stronger responsive layout for smaller screens.
- Show the current slider values beside each filter.
- Allow saving and restoring custom presets.
- Add crop, rotate, and resize tools.
- Improve accessibility for keyboard-only use.
