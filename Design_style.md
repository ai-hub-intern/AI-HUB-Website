# STARTPLATZ AI HUB — Design Style Guide (`Design_style.md`)
Version: 1.0 • Owner: STARTPLATZ AI HUB • Status: Working System (Web + Print + Motion)

---

## 0) What this document is
This is the **single source of truth** for the STARTPLATZ AI HUB visual system.  
It defines how to build **logos, ribbons, patterns, UI components, and motion** so the brand feels:

- **High‑tech & always in motion**
- **Mathematically precise**
- **Structured & reliable**
- **Bold but clean** (lots of whitespace, crisp geometry)

> Core metaphor: **The Geometric Flow** — a ribbon folded through 3D space with sharp creases and clear direction.

---

## 1) Brand pillars (what the system must communicate)
**AI HUB** = the ecosystem core (unifying + energetic)  
**AI ACADEMY** = learning & growth (fresh + accessible)  
**AI BUSINESS** = implementation & trust (solid + professional)

**Design translation**
- HUB = central anchor (hero / center alignment)
- ACADEMY = forward movement & onboarding cues
- BUSINESS = stability, baseline, strong contrast

---

## 2) The Geometric Flow (ribbon rules)
### 2.1 Non‑negotiables (Golden Rules)
1. **Sharpness over softness**  
   - Folds are **45° / 90°** only.
   - No round U‑turns. No “soft cloth” behavior.
2. **Consistent ribbon weight**  
   - Ribbon thickness is constant across all assets.
3. **Real fold logic**  
   - Every over/under crossing must be physically plausible.
4. **Hard‑edge shadow at folds**  
   - Shadow is strongest at crease vertices, softens outward.
5. **Background restraint**  
   - Prefer **off‑white / light grey**. Use black only for strong contrast hero moments.
6. **Single‑color logo rule**  
   - Each sub‑logo uses **one pillar color** (plus its shading).  
   - The collage/pattern carries the multi‑color story.

### 2.2 Geometry spec
- **Fold angles:** 45° and 90°  
- **Perspective:** mild 3D, not extreme (avoid “wide-angle” warping)
- **Edge treatment:** crisp, slightly beveled highlight (digital/industrial feel)
- **Corner radius:** near‑zero (micro bevel is allowed; no rounded corners)
- **Lighting:** studio-like top-left key light + gentle ambient fill  
- **Shadow:** soft but present; never heavy blur

### 2.3 Ribbon “thickness” spec (relative units)
Define a unit `t` (ribbon thickness). Use this ratio everywhere:
- Ribbon thickness: `t`
- Inner shadow depth: `0.25t`
- Fold highlight band: `0.18t`
- Drop shadow blur: `0.35t` (subtle)
- Drop shadow opacity: 12–18% (depends on background)

---

## 3) Logo system
### 3.1 Master lockup
**STARTPLATZ (wordmark)** remains stable and anchored.  
The **ribbon** is the active component that carries motion and category color.

**Lockup components**
- Wordmark: `STARTPLATZ`
- Ribbon: category label (AI HUB / AI ACADEMY / AI BUSINESS)

### 3.2 Sub‑brand logos (current)
- `STARTPLATZ + AI HUB` (purple ribbon)
- `STARTPLATZ + AI ACADEMY` (teal/cyan ribbon)
- `STARTPLATZ + AI BUSINESS` (deep blue ribbon)

> Future sub‑brands (e.g., AI DEVELOPMENT) must follow the same structure: same ribbon geometry, same type, one pillar color.

### 3.3 Clear space & placement
**Clear space** around the entire lockup:  
- Minimum: **1× ribbon thickness (`t`)** on all sides  
- Recommended: **2× `t`** on hero/landing sections

**Alignment**
- Wordmark centered over ribbon in standalone lockup.
- On websites: wordmark may be top-left in nav while ribbon becomes section divider or hero element.

### 3.4 Minimum sizes
- Digital lockup minimum width: **240 px**
- Ribbon-only badge minimum width: **160 px**
- Print minimum width: **45 mm**

### 3.5 Background usage
**Preferred**
- Off‑white / cool grey gradient background
- Very subtle grain/noise (2–4%) allowed

**Allowed**
- Solid black background for high-contrast hero/key visuals

**Avoid**
- Busy photography directly behind the ribbon without separation
- Low-contrast backgrounds that reduce legibility

---

## 4) Color architecture
### 4.1 Pillar colors (primary)
These are the canonical pillar colors for the ribbon system.

| Pillar | Role | Primary | Deep Shade | Highlight |
|---|---|---:|---:|---:|
| AI HUB | Core | **#8F4DD8** | #38196B | #A86CF0 |
| AI ACADEMY | Growth | **#03B0B4** | #005D5F | #43D7D5 |
| AI BUSINESS | Foundation | **#07418F** | #011451 | #2E67C7 |

**Neutral system**
- Off‑white: `#F7F6F7`
- Warm off‑white (pattern base): `#F3E6E0`
- Cool grey (UI): `#D4D3D8`
- Text charcoal: `#1A1A1A`
- Wordmark grey: `#6E6E70`
- Black: `#0B0B0D`

### 4.2 Support palette (for patterns, hero visuals, highlights — not for single‑color logos)
Use sparingly as accents in backgrounds, patterns, and motion layers.
- Orange: `#FC9929`
- Coral/Pink: `#E95167`
- Magenta: `#E72D90`

### 4.3 Gradient rules
Gradients are **structural** (to show 3D), not decorative.
- 2–3 stops max per surface
- Direction follows surface plane (top plane lighter, underside darker)
- Avoid rainbow gradients inside one logo ribbon

**Example ribbon gradient (AI HUB)**
- Top/front: `#8F4DD8 → #8243CB`
- Underside: `#7036B9 → #38196B`

### 4.4 Accessibility (contrast)
- Ribbon text is **white** and must stay readable (aim for WCAG AA where possible).
- When ribbon sits on light backgrounds, add subtle outline/shadow to text (2–6% black).

---

## 5) Typography
### 5.1 Primary typeface
- **Inter** (Web, UI, Slides)
- Fallbacks: `system-ui, -apple-system, Segoe UI, Roboto, Arial`

### 5.2 Wordmark
The `STARTPLATZ` wordmark is a brand asset. Do not recreate it with a random font for final outputs.

### 5.3 Typographic behavior
**Ribbon labels**
- Uppercase
- Bold / ExtraBold
- Tight tracking: `-1%` to `-2%`
- Strong vertical centering within ribbon

**Body text**
- Regular / Medium
- Comfortable line height: 140–160%
- Avoid long all‑caps paragraphs

### 5.4 Suggested type scale (web)
- H1: 56 / 64 (Bold)
- H2: 40 / 48 (Bold)
- H3: 28 / 36 (SemiBold)
- Body: 18 / 28 (Regular)
- Small: 14 / 22 (Regular)

---

## 6) Layout system (Swiss/grid discipline)
### 6.1 Grid
- Desktop: **12‑column grid**
- Max content width: **1200–1280 px**
- Gutters: 24 px
- Outer margins: 64–96 px

### 6.2 Spacing
Use an **8‑pt system** (8, 16, 24, 32, 48, 64…).

### 6.3 Composition rules
- Large whitespace zones are intentional.
- One strong focal element per section: ribbon, headline, or CTA (not all competing).
- Keep UI “quiet” so the ribbon reads as the brand signature.

---

## 7) Pattern & wallpaper system
Patterns are used for:
- Backgrounds for subpages
- Section dividers
- Posters, flyers, social tiles
- Subtle motion layers

### 7.1 Pattern types
**A) Geometric Fold Tessellation (preferred)**  
- Sharp folds, 45°/90°
- Clean off‑white base
- Works well at low opacity behind content

**B) Woven Ribbon (secondary)**  
- Rich, immersive, more “material”
- Use for hero-only moments, not behind dense text

### 7.2 Pattern usage rules
- Default opacity behind text: **6–14%**
- Keep scale large enough to avoid visual noise (no “micro pattern” behind paragraphs).
- For UI sections: prefer monochrome or two‑tone variants.
- Avoid strong contrast edges directly behind small typography.

### 7.3 Seamless tiling requirements
When creating a “wallpaper” pattern:
- Edges must match perfectly (left/right and top/bottom)
- No visible seams at 1× and 2× scale
- Export at:
  - Web: 2048×2048 (PNG/WebP), plus 1024×1024
  - Print: 6000×6000 (300 DPI target use)

---

## 8) Iconography & micro‑motifs
### 8.1 Icon style
- Geometric, crisp, minimal
- Prefer 45° and 90° geometry
- Stroke: 2 px at 24 px icon size (scale proportionally)
- Use folded corner motif in cards and buttons

### 8.2 Allowed motifs
- Folded corner
- Ribbon notch / crease
- Node‑graph (but simplified, not “sci‑fi web” chaos)
- Arrows with 45° corners (no curves)

---

## 9) UI components (web)
### 9.1 Buttons
**Primary**
- Solid pillar color (depending on page)
- White label
- Subtle folded‑corner highlight on hover

**Secondary**
- Outline (pillar color)
- Transparent fill

**Hover motion**
- 120–180 ms
- Ease: `cubic-bezier(0.2, 0.8, 0.2, 1)`

### 9.2 Cards
- Off‑white base with soft shadow
- Optional folded-corner overlay (2–6% opacity)
- Ribbon can “pass behind” or “over” cards (parallax layers)

### 9.3 Section dividers
Use ribbon segments as “flow connectors” between sections:
- They should **point** to CTAs or headlines
- Keep them sparse (1–2 per screen)

---

## 10) Motion system (the brand must feel alive)
### 10.1 Principles
- Motion communicates **flow** and **direction**, not decoration.
- Always respect readability and reduced-motion preferences.

### 10.2 Signature interactions
1. **Scroll‑triggered unfolding**  
   Ribbon segments “open” as user scrolls into a section.
2. **Depth parallax**  
   Background ribbon layer moves at 0.6× speed, foreground at 1.1×.
3. **Micro interactions**  
   Buttons/cards show a slight fold highlight on hover.

### 10.3 Timing & easing
- Micro: 120–180 ms
- Section reveals: 400–700 ms
- Parallax: continuous, low amplitude
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for ribbon unfold

### 10.4 Reduced motion
Provide a reduced-motion mode:
- Replace unfolding with opacity fade
- Disable parallax
- Keep hover changes minimal

---

## 11) Photography & imagery
- Use real workshop scenes (people learning, screens, collaboration)
- Prefer neutral color grading (cool greys), then apply pillar-color overlays sparingly
- Never place the ribbon over faces or dense detail without separation (blur/overlay)

---

## 12) AI generation guidelines (prompt recipes)
The brand relies on AI-assisted asset generation. Use these guardrails to keep outputs consistent.

### 12.1 Ribbon asset prompt template
Use for new ribbons, dividers, or logo-like tags.

**Prompt skeleton**
- “Sharp geometric folded ribbon, 45° and 90° creases, consistent thickness, subtle 3D shading with hard-edge fold shadows, studio lighting, clean off-white background, minimal composition, no rounded corners, crisp edges, modern tech brand.”

**Negative prompt**
- “rounded folds, cloth, soft ribbon, glossy plastic, extreme perspective, noisy background, text artifacts, extra logos, watermark”

### 12.2 Pattern prompt template (geometric tessellation)
- “Seamless repeating pattern of interlocking folded ribbons, sharp 45°/90° angles, clean off-white background, subtle grain, consistent ribbon thickness, modern tech identity, balanced spacing, no seams, no blur, minimal noise.”

### 12.3 Web hero background prompt template
- “Large geometric ribbon structure sweeping diagonally, layered depth parallax style, off-white to cool grey gradient background, very subtle noise, high-tech minimal, space for headline (top-left), ribbon in pillar color only.”

---

## 13) Do / Don’t checklist
### Do
- Use **one pillar color per logo**
- Keep folds **sharp**
- Maintain consistent ribbon thickness
- Keep backgrounds clean and typography readable
- Use motion to guide attention to content and CTAs

### Don’t
- Don’t use soft/rounded ribbon turns
- Don’t use multi-color gradients inside a single sub-logo ribbon
- Don’t clutter backgrounds behind small text
- Don’t distort the wordmark or rebuild it with a random font
- Don’t add unnecessary “tech noise” (particles, glow spam)

---

## 14) File structure & naming
Recommended structure:
- `/logos/` (SVG + PNG)
- `/ribbons/` (dividers, segments, animated exports)
- `/patterns/` (tileables, wallpaper sizes)
- `/ui/` (buttons, cards, icons)
- `/motion/` (Lottie, MP4 loops)

Naming convention:
`startplatz_aihub_[asset]_[variant]_[size]_[v#]`
- Example: `startplatz_aihub_ribbon-divider_purple_1920x400_v01.png`

---

## 15) Quick implementation tokens (CSS)
```css
:root{
  --sp-offwhite: #F7F6F7;
  --sp-warm-offwhite: #F3E6E0;
  --sp-grey-300: #D4D3D8;
  --sp-text: #1A1A1A;
  --sp-wordmark: #6E6E70;
  --sp-black: #0B0B0D;

  --hub-500: #8F4DD8;
  --hub-800: #38196B;
  --academy-500: #03B0B4;
  --academy-800: #005D5F;
  --business-500: #07418F;
  --business-900: #011451;

  --accent-orange: #FC9929;
  --accent-coral: #E95167;
  --accent-magenta: #E72D90;
}
```

---

## Appendix A — Reference renders (local)
- Composite: `Gemini_Generated_Image_f8ng00f8ng00f8ng.png`
- Logos (black bg):  
  - `ChatGPT Image Dec 23, 2025, 09_29_23 PM.png` (AI HUB)  
  - `ChatGPT Image Dec 23, 2025, 09_36_45 PM.png` (AI ACADEMY)  
  - `ChatGPT Image Dec 23, 2025, 09_51_34 PM.png` (AI BUSINESS)
- Patterns:  
  - `754579dd-1395-475a-81d4-fba24514acdc.png` (Geometric tessellation)  
  - `ChatGPT Image Dec 23, 2025, 10_00_32 PM.png` (Woven ribbon)
