# Pixel-Perfect Cloning Protocol

When instructed to copy or clone a section from a reference website (e.g., Orbix Studio, another SaaS site, etc.), **you must execute the following strict protocol iteratively until absolute perfection is achieved**. Do not stop, guess, or estimate. 

### Step 1: Establish the Baseline (Reference Site)
1. **Navigate**: Use the Chrome MCP `navigate_page` tool to open the reference website URL.
2. **Screenshot**: Once loaded, use the Chrome MCP `take_screenshot` tool to capture the specific section you need to clone. Save this as `reference-section.png` in the scratch directory.
3. **Data Extraction**: Use the Chrome MCP `evaluate_script` tool to extract precise, computed values from the DOM. You MUST extract:
   - **Typography**: Computed `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, and text transformations.
   - **Layout/Spacing**: Exact computed `padding`, `margin`, `gap`, `width`, and `height` values for all containers and nested elements.
   - **Colors**: Exact computed `background-color`, text `color`, border colors, opacity, and gradients.
   - **Animations & Interactions**: Check for any Framer Motion attributes, CSS transitions, scroll-triggered reveals, and **crucially**, interactive states.
   - **Mandatory Hover State Check**: You MUST use the Chrome MCP `hover` tool or `evaluate_script` to trigger `:hover` states on interactive elements (buttons, cards, links). Take a screenshot of the element *while hovered* and extract the modified styles (background gradients, text color changes, opacity changes, transforms). NEVER assume a hover state is simple without verifying it visually on the reference site.

### Step 2: Implementation & Component Extraction
1. **Code Scaffold**: Scaffold the cloned section into a logical React component following our architecture (e.g., `src/components/atlas/sections/...`).
2. **Data Separation**: Extract any text copy, array data, or images into the respective data file (e.g., `src/lib/atlas-site-data.ts`). Do NOT hardcode copy in the UI file.
3. **Styling**: Implement the exact extracted CSS values using Tailwind CSS v4. Map specific px values (like `padding: 108px`) to precise Tailwind brackets (e.g., `pt-[108px]`) or variables if standard spacing doesn't match perfectly.
4. **Animation**: Implement animations using Framer Motion to exactly match the reference site (e.g., stagger delays, spring vs tween curves, hover scaling).

### Step 3: The Verification Loop (Crucial)
1. **Navigate to Local**: Use the Chrome MCP `navigate_page` tool to open `http://localhost:3000`.
2. **Capture Local Snapshot**: Use the Chrome MCP `take_screenshot` tool to capture your newly coded section. Save this as `local-implementation.png`.
3. **Compare**: Visually analyze and compare `reference-section.png` vs `local-implementation.png` side-by-side. 
   - *Are the fonts rendering correctly?*
   - *Are margins and paddings perfectly aligned?*
   - *Are line breaks happening at the exact same words?*
   - *Do hover interactions and entrance animations mimic the reference flawlessly?*
3. **Verify Interactive States**: You MUST trigger the hover state on your local implementation using Chrome MCP and take a screenshot to compare side-by-side with the reference site's hover state screenshot. Verify background color/gradient swaps, icon visibility, text color changes, and transform values perfectly match the original.

### Step 4: Iterative Refinement
1. **Iterate**: If *any* discrepancy exists, no matter how small, modify the component code to correct it.
2. **Repeat**: Go back to Step 3 and take a new local screenshot. 
3. **Do Not Stop**: You must repeat this loop (Code → Screenshot → Compare) until the design is a 1:1 pixel-perfect match, including all micro-animations.

### Step 5: Finalization
1. **Commit and Push**: Once perfection is achieved, immediately commit the new files/changes and push to `https://github.com/tejastelkar/atlastudio.git` with a descriptive commit message.
