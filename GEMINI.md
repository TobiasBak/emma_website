# Emma's Portfolio (emma_website)

## Project Overview

This is a portfolio website built for Emma to showcase her travel photography and interior design work. The site features a masonry layout for photo galleries, a custom lightbox for viewing images, and filtering capabilities.

## Tech Stack

*   **Framework:** [Astro v5](https://astro.build)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
*   **Language:** TypeScript
*   **Package Manager:** npm

## Key Features

*   **Masonry Gallery:** A responsive grid layout for displaying travel photos, handling different aspect ratios (wide, tall, big).
*   **Lightbox:** A custom client-side modal for viewing high-resolution images with navigation (prev/next), keyboard support, and touch swipe gestures.
*   **Theme/Filter:** Logic to filter images based on "Day" or "Night" themes.
*   **Image Optimization:** Uses `astro:assets` for image optimization. Images are loaded eagerly in the main gallery.

## Architecture & Conventions

### Directory Structure

*   `src/pages/`: Astro pages. `index.astro` is the main gallery.
*   `src/layouts/`: Layout components (e.g., `Layout.astro`).
*   `src/components/`: Reusable UI components.
*   `src/assets/images/`: Source images organized by category (`day`, `night`, etc.).
*   `src/data/`: Data files (e.g., `trips.js`) containing metadata for images (titles, locations, dates).

### Data Flow

1.  **Image Loading:** `src/pages/index.astro` imports all images from `src/assets/images/*` using `import.meta.glob`.
2.  **Metadata Mapping:** Images are mapped to metadata in `src/data/trips.js` based on the **filename**.
3.  **Rendering:** The gallery renders a list of cards. Client-side scripts handle the masonry layout visuals (often CSS grid based) and the lightbox interactivity.

### Client-Side Logic

*   Interactivity (Lightbox, Scroll Animations, Filtering) is implemented within `<script>` tags in Astro components.
*   Logic is wrapped in `setupInteractivity()` and attached to `astro:page-load` events to support Astro View Transitions.

## Development Commands

Run these commands from the project root:

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start the local development server (usually at `http://localhost:4321`). |
| `npm run build` | Build the site for production (outputs to `dist/`). |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Run `astro check` for TypeScript validation. |
| `npm run lint` | Run ESLint. |
