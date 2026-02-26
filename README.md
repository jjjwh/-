# Immersive Narrative (Vue 3 + GSAP)

This project is a responsive, immersive website built based on extracted assets from `毕设.ai`. It features scroll-driven animations, a hero slider, and a flexible CMS structure.

## Features

- **Vue 3 + TypeScript**: Modern, type-safe development.
- **GSAP ScrollTrigger**: High-performance scroll animations and parallax effects.
- **Swiper**: Touch-friendly hero slider.
- **Tailwind CSS**: Utility-first styling for rapid UI development.
- **Responsive Design**: Optimized for 1200px, 768px, and 375px breakpoints.
- **CMS-driven**: Content managed via `src/content.json`.

## Project Structure

- `src/components/`: Vue components (HeroSlider, ScrollSection).
- `src/assets/`: Styles and static assets.
- `public/assets/images/`: Images extracted from the AI/PDF file.
- `src/content.json`: Configuration file for text and image paths.

## Setup & Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Importing New Assets

If you have a new version of `毕设.ai`:

1.  **Ensure Python is installed** with `pymupdf`:
    ```bash
    pip install pymupdf
    ```

2.  **Run the extraction script** (from the parent directory `d:\desktop\网站`):
    ```bash
    python extract_ai_assets.py
    ```
    This will extract images to `assets/extracted/images` and SVGs to `assets/extracted/svgs`.

3.  **Copy Assets**:
    Copy the extracted images to the public folder:
    ```bash
    cp -r ../assets/extracted/images/* public/assets/images/
    ```

4.  **Update Content**:
    Update `src/content.json` to reference the new image filenames if they have changed.

## Performance Optimization

- Images are loaded lazily where possible.
- GSAP animations are optimized for performance using `will-change` properties (handled by GSAP).
- Tailwind purges unused CSS in production builds.

## License

Private / Academic Use.
