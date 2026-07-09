# Atlas Studio - Agent Guidelines and Coding Standards

## 1. Core Technologies
- **Framework**: Next.js (App Router), React, TypeScript.
- **Styling**: Tailwind CSS (v4).
- **Animations**: Framer Motion for scroll reveals, micro-interactions, and page transitions.

## 2. Architecture & File Structure
- **Strict Componentization**: UI elements must be separated into logical, reusable components (e.g., `src/components/atlas/sections`, `src/components/atlas/heroes`, `src/components/atlas/layout`).
- **Data/Content Separation**: Hardcoded copy/content must be extracted into data files (e.g., `src/lib/atlas-homepage-data.ts`, `src/lib/atlas-about-data.ts`). This allows non-developers to edit copy without touching UI components.
- **Page Shells**: Consistent layouts must be wrapped in page shells (like `AtlasPageShell`) which encapsulate standard elements such as headers, footers, and smooth scrolling wrappers.

## 3. Design & Styling Principles
- **Aesthetic Excellence**: Designs must feel premium and state-of-the-art. Maintain typography consistency, exact spacing (margin/padding), and use curated palettes. 
- **Mobile-First**: Always build components mobile-first and use Tailwind's responsive prefixes (`md:`, `lg:`, `xl:`) for larger screens.
- **No Global CSS Clutter**: Rely on Tailwind utility classes for styling. Only use `globals.css` for essential global tokens, animations, and `@font-face` definitions.
- **Animations**: Use Framer Motion to add life to the interface without making it overwhelming. Staggered fade-ins, hover scaling (`hover:scale-105`), and smooth transitions are preferred.

## 4. Codebase Maintenance
- **Clean Codebase**: Immediately delete unused components, redundant images, and unused data objects. No dead code should remain in the repository.
- **Component Naming**: Prefix components belonging to the main Atlas Studio theme with `Atlas` or `atlas-` to avoid collision and maintain organization.

## 5. Agent Workflow Rules
- **Automatic Commits**: After EVERY completed task or significant file modification, the agent MUST automatically commit the changes and push them to the remote repository. 
- **Git Push Destination**: Code must be pushed to `https://github.com/tejastelkar/atlastudio.git`.
- **Commit Messages**: Use clear, descriptive commit messages summarizing the changes made.
