# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:5173+ if ports are available)
- **Build for production**: `npm run build`  
- **Lint code**: `npm run lint` (ESLint with React rules, max 0 warnings)
- **Preview production build**: `npm run preview`
- **Quick startup**: Run `start.bat` to launch dev server directly

## Architecture Overview

This is a **React + Vite + React Router** marketing website for Prism Labs with a focus on **mouse-controlled spectral design elements** that embody the brand's core metaphor of "light through a prism."

### Pages & Routing
- **Home Page** (`/`): Hero section with products and tagline
- **Manifesto Page** (`/manifesto`): Brand philosophy and vision statement
- **React Router**: Clean client-side routing between pages

### Core Design System
- **Mouse-Controlled Spectral System**: All gradient elements respond to mouse position via `spectralMouse.js`
- **Brand Colors**: Sky Blue (#60A5FA), Violet (#A78BFA), Magenta (#F472B6), Amber (#F59E0B), Emerald (#34D399)
- **Spectral Classes**: 
  - `.spectral-gradient` for backgrounds (borders, buttons)
  - `.spectral-text` for text with gradient effect
- **Interactive Animation**: Mouse X position drives unified gradient across entire site via CSS custom properties

### Key Components
- **SpectralCard**: Reusable component with gray borders (simplified from spectral borders)
- **Motion Integration**: Framer Motion provides staggered page load animations (0.2s delays between elements)
- **Product Cards**: Feature live links to https://prism.ami-nigam.com/ and https://prism-viz.ami-nigam.com/
- **Navigation**: Clean header with "PRISM LABS" branding and manifesto link

### Brand Guidelines Integration
The design strictly follows `brand-guidelines.txt` and `brand-manifesto.txt`:
- **Primary tagline**: "Amplifying Human Intent through AI" (always use)
- **Visual metaphor**: Light refraction through prism (clarity, amplification, spectrum)
- **Tone**: Clean white backgrounds, minimal design, spectral gradients used sparingly
- **Typography**: Inter font family, geometric sans approach
- **Content**: Manifesto content sourced from brand-manifesto.txt with selective bold formatting

### Technical Implementation
- **Mouse Tracking**: `src/spectralMouse.js` handles cursor position and updates CSS custom properties
- **Unified Gradient**: Single gradient system controlled by `--spectral-x` and `--spectral-y` CSS variables
- **Performance**: Uses `will-change` and `background-attachment: fixed` for smooth rendering
- **Dependencies**: Minimal stack - React, React Router, Framer Motion, Lucide React icons

### Content Strategy
- Products showcase real applications with "Launch Application" buttons
- Copy emphasizes "research lab × creative studio" positioning
- All spectral text and UI elements reinforce the prism/refraction metaphor
- Beta tags and feature classifications maintain transparency about product status
- Manifesto page delivers core brand philosophy in poetic, philosophical tone