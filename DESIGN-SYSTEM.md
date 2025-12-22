# STARTPLATZ AI Hub – Design System
**Version 1.0** | Stand: Dezember 2024

---

## Inhaltsverzeichnis

1. [Einführung](#einführung)
2. [Designprinzipien](#designprinzipien)
3. [Farben](#farben)
4. [Typografie](#typografie)
5. [Spacing](#spacing)
6. [Border Radius](#border-radius)
7. [Schatten](#schatten)
8. [Motion & Animation](#motion--animation)
9. [Layout & Grid](#layout--grid)
10. [Komponenten](#komponenten)
    - [Buttons](#buttons)
    - [Cards](#cards)
    - [Forms](#forms)
    - [Navigation](#navigation)
    - [Badges & Tags](#badges--tags)
    - [Icons](#icons)
11. [Patterns](#patterns)
12. [Accessibility](#accessibility)
13. [Responsive Breakpoints](#responsive-breakpoints)
14. [Code Guidelines](#code-guidelines)

---

## Einführung

Dieses Design System definiert die visuellen und funktionalen Bausteine der STARTPLATZ AI Hub Website. Es dient als Single Source of Truth für Designer und Entwickler, um konsistente, hochwertige Benutzeroberflächen zu erstellen.

### Warum ein Design System?

- **Konsistenz**: Einheitliches Look & Feel über alle Seiten
- **Effizienz**: Wiederverwendbare Komponenten sparen Zeit
- **Skalierbarkeit**: Neue Seiten lassen sich schnell erstellen
- **Zusammenarbeit**: Gemeinsame Sprache für Designer & Entwickler

---

## Designprinzipien

### 1. Klarheit
Inhalte sind leicht verständlich und scanbar. Wir nutzen visuelle Hierarchie, um wichtige Informationen hervorzuheben.

### 2. Vertrauen
Professionelles, hochwertiges Design vermittelt Kompetenz. Wir vermeiden "AI-Slop" und generische Lösungen.

### 3. Zugänglichkeit
Unsere Produkte sind für alle nutzbar – unabhängig von Fähigkeiten oder Geräten.

### 4. Conversion-Fokus
Jedes Element dient einem Zweck. CTAs sind prominent, der Weg zur Conversion ist klar.

---

## Farben

### CSS Custom Properties

```css
:root {
  /* ========================================
     PRIMARY BRAND COLORS
     ======================================== */
  
  /* Teal/Cyan - Primäre Akzentfarbe */
  --color-teal: #00B5B6;
  --color-teal-dark: #005B63;
  --color-teal-light: #22D3EE;
  --color-teal-glow: #00E5E6;
  
  /* Purple - Sekundäre Akzentfarbe */
  --color-primary: #9836FF;
  --color-primary-light: #B366FF;
  --color-primary-dark: #7B2BD9;
  
  /* Orange - Tertiäre Akzentfarbe (KI-Start) */
  --color-orange: #F97316;
  --color-orange-dark: #EA580C;
  
  /* ========================================
     NEUTRAL PALETTE
     ======================================== */
  
  --color-white: #FFFFFF;
  --color-bg: #FAFBFC;
  --color-bg-subtle: #F3F4F6;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;
  
  --color-border: rgba(0, 0, 0, 0.08);
  --color-border-strong: rgba(0, 0, 0, 0.12);
  
  /* ========================================
     TEXT COLORS
     ======================================== */
  
  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-text-tertiary: #94A3B8;
  --color-text-inverse: #FFFFFF;
  
  /* ========================================
     SEMANTIC COLORS
     ======================================== */
  
  --color-success: #10B981;
  --color-success-light: #D1FAE5;
  --color-info: #3B82F6;
  --color-info-light: #DBEAFE;
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;
  
  /* ========================================
     ACCENT COLORS
     ======================================== */
  
  --color-mint: #BAF6E2;
  --color-green: #10B981;
  --color-yellow: #FBBF24;
}
```

### Farbpalette Übersicht

| Name | Hex | Verwendung |
|------|-----|------------|
| Teal | `#00B5B6` | Primäre CTAs, Links, Akzente |
| Teal Dark | `#005B63` | Hover-States, Text auf hellem Grund |
| Purple | `#9836FF` | Sekundäre Akzente, AI-Automation Branding |
| Orange | `#F97316` | KI-Start Branding, Aktionen |
| Text | `#0F172A` | Überschriften, wichtiger Text |
| Text Secondary | `#475569` | Fließtext, Beschreibungen |
| Text Tertiary | `#94A3B8` | Meta-Informationen, Platzhalter |

### Gradienten

```css
:root {
  /* Primärer Gradient - Teal (für CTAs, Hero) */
  --gradient-teal: linear-gradient(135deg, #005B63 0%, #00B5B6 100%);
  
  /* Sekundärer Gradient - Purple (für AI-Automation) */
  --gradient-primary: linear-gradient(135deg, #9836FF 0%, #B366FF 100%);
  
  /* Tertiärer Gradient - Orange (für KI-Start) */
  --gradient-orange: linear-gradient(135deg, #EA580C 0%, #F97316 100%);
  
  /* Dark Gradient (für B2B-Seiten) */
  --gradient-dark: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  
  /* Glow Gradient (für spezielle Effekte) */
  --gradient-glow: linear-gradient(135deg, #00B5B6 0%, #22D3EE 50%, #00E5E6 100%);
  
  /* Hero Background Gradient */
  --gradient-hero-bg: radial-gradient(
    ellipse 80% 50% at 50% -20%, 
    rgba(0, 181, 182, 0.15) 0%, 
    transparent 50%
  );
}
```

### Farbzuweisung nach Seite

| Seite | Primärfarbe | Gradient |
|-------|-------------|----------|
| Homepage | Teal | `--gradient-teal` |
| KI-Manager | Teal | `--gradient-teal` |
| AI-Automation | Purple | `--gradient-primary` |
| KI-Start | Orange | `--gradient-orange` |
| B2B/Unternehmen | Dark | `--gradient-dark` |
| Förderung | Teal | `--gradient-teal` |

---

## Typografie

### Font Families

```css
:root {
  --font-display: 'Outfit', sans-serif;  /* Headlines, Buttons */
  --font-body: 'Inter', sans-serif;       /* Fließtext, UI */
  --font-mono: 'JetBrains Mono', monospace; /* Code */
}
```

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 2rem;      /* 32px */
  --text-4xl: 2.5rem;    /* 40px */
  --text-5xl: 3.5rem;    /* 56px */
  --text-6xl: 4.5rem;    /* 72px */
  --text-7xl: 5.5rem;    /* 88px */
}
```

### Typografie-Klassen

```css
/* Überschriften */
h1, .h1 {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7vw, var(--text-6xl));
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

h2, .h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, var(--text-5xl));
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

h3, .h3 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, var(--text-3xl));
  font-weight: 600;
  line-height: 1.2;
}

h4, .h4 {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, var(--text-2xl));
  font-weight: 600;
  line-height: 1.3;
}

h5, .h5 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.4;
}

h6, .h6 {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}

/* Fließtext */
p, .body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.lead {
  font-size: clamp(1.125rem, 2vw, var(--text-xl));
  font-weight: 400;
  line-height: 1.65;
  color: var(--color-text-secondary);
}

.small {
  font-size: var(--text-sm);
  line-height: 1.5;
}

.caption {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Code */
code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--color-bg-subtle);
  padding: 0.2em 0.5em;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-primary);
}
```

### Text-Highlight-Klassen

```css
/* Gradient Text */
.text-gradient {
  background: var(--gradient-glow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-purple {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-orange {
  background: var(--gradient-orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Spacing

### Spacing Scale

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Spacing-Anwendung

| Kontext | Spacing | Variable |
|---------|---------|----------|
| Button Padding (klein) | 8px 20px | `--space-2` `--space-5` |
| Button Padding (normal) | 16px 32px | `--space-4` `--space-8` |
| Card Padding | 32px | `--space-8` |
| Section Padding | 80-100px | `--space-20` bis `--space-24` |
| Container Max-Width | 1200-1280px | - |
| Container Padding | 24px | `--space-6` |
| Grid Gap (klein) | 16px | `--space-4` |
| Grid Gap (normal) | 24px | `--space-6` |
| Grid Gap (groß) | 32px | `--space-8` |

---

## Border Radius

```css
:root {
  --radius-sm: 6px;      /* Kleine Elemente (Tags, Inputs) */
  --radius-md: 10px;     /* Mittlere Elemente (Buttons klein) */
  --radius-lg: 14px;     /* Standard (Cards, Inputs) */
  --radius-xl: 20px;     /* Große Elemente (Cards, Modals) */
  --radius-2xl: 28px;    /* Hero-Elemente, Feature-Cards */
  --radius-full: 9999px; /* Pill-Buttons, Avatare */
}
```

### Radius-Anwendung

| Element | Radius |
|---------|--------|
| Pill-Buttons | `--radius-full` |
| Standard-Cards | `--radius-xl` |
| Feature-Cards | `--radius-2xl` |
| Input-Felder | `--radius-full` (für Pill-Style) oder `--radius-lg` |
| Tags/Badges | `--radius-full` |
| Icons (Container) | `--radius-lg` bis `--radius-xl` |
| Avatare | `--radius-full` (50%) |

---

## Schatten

```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  
  --shadow-sm: 
    0 2px 4px rgba(0, 0, 0, 0.04), 
    0 1px 2px rgba(0, 0, 0, 0.06);
  
  --shadow-md: 
    0 4px 12px rgba(0, 0, 0, 0.06), 
    0 2px 4px rgba(0, 0, 0, 0.04);
  
  --shadow-lg: 
    0 8px 24px rgba(0, 0, 0, 0.08), 
    0 4px 8px rgba(0, 0, 0, 0.04);
  
  --shadow-xl: 
    0 16px 48px rgba(0, 0, 0, 0.1), 
    0 8px 16px rgba(0, 0, 0, 0.06);
  
  --shadow-2xl:
    0 24px 64px rgba(0, 0, 0, 0.14),
    0 12px 24px rgba(0, 0, 0, 0.08);
  
  /* Glow Shadows */
  --shadow-glow-teal: 
    0 0 40px rgba(0, 181, 182, 0.3), 
    0 0 80px rgba(0, 181, 182, 0.15);
  
  --shadow-glow-purple: 
    0 0 40px rgba(152, 54, 255, 0.25), 
    0 0 80px rgba(152, 54, 255, 0.1);
  
  --shadow-glow-orange:
    0 0 40px rgba(249, 115, 22, 0.3),
    0 0 80px rgba(249, 115, 22, 0.15);
}
```

### Schatten-Anwendung

| Element | Schatten |
|---------|----------|
| Cards (Standard) | `--shadow-lg` |
| Cards (Hover) | `--shadow-xl` |
| Buttons (Hover) | Custom mit Farbton |
| Navbar (scrolled) | `--shadow-md` |
| Hero Images | `--shadow-2xl` |
| Dropdowns | `--shadow-xl` |

---

## Motion & Animation

### Easing Functions

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);      /* Standard für die meisten Animationen */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* Für subtile Übergänge */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Für "bouncy" Effekte */
}
```

### Duration

```css
:root {
  --duration-fast: 150ms;    /* Hover-States */
  --duration-normal: 300ms;  /* Standard-Transitions */
  --duration-slow: 500ms;    /* Größere Animationen */
  --duration-slower: 800ms;  /* Page-Transitions */
}
```

### Standard-Transitions

```css
/* Für alle interaktiven Elemente */
.interactive {
  transition: all var(--duration-normal) var(--ease-out);
}

/* Für Hover-States */
.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

### Keyframe Animations

```css
/* Fade In Up - für Scroll Reveals */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Blur - für Hero-Elemente */
@keyframes fadeInBlur {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

/* Scale In - für Icons/Badges */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse - für Urgency Badges */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

/* Float - für decorative Elemente */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Animation-Klassen

```css
.anim-fade-up {
  animation: fadeInUp var(--duration-slow) var(--ease-out) both;
}

.anim-fade-blur {
  animation: fadeInBlur var(--duration-slow) var(--ease-out) both;
}

.anim-scale-in {
  animation: scaleIn var(--duration-normal) var(--ease-spring) both;
}

.anim-slide-left {
  animation: slideInLeft var(--duration-slow) var(--ease-out) both;
}

.anim-slide-right {
  animation: slideInRight var(--duration-slow) var(--ease-out) both;
}

/* Stagger Delays */
.anim-delay-1 { animation-delay: 100ms; }
.anim-delay-2 { animation-delay: 200ms; }
.anim-delay-3 { animation-delay: 300ms; }
.anim-delay-4 { animation-delay: 400ms; }
.anim-delay-5 { animation-delay: 500ms; }
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Layout & Grid

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6); /* 24px */
}

/* Schmalerer Container für Text-fokussierte Seiten */
.container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Breiterer Container für Hero-Bereiche */
.container-wide {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}
```

### Grid-Systeme

```css
/* 2-Column Grid */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

/* 3-Column Grid */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

/* 4-Column Grid */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

/* Auto-Fit Grid (responsive) */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

/* Hero Grid (Content links, Visual rechts) */
.grid-hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-16);
  align-items: center;
}

/* Feature Grid (Icon + Content) */
.grid-feature {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
}
```

### Section Spacing

```css
.section {
  padding: var(--space-20) 0; /* 80px */
}

.section-lg {
  padding: var(--space-24) 0; /* 96px */
}

/* Mit Background */
.section-surface {
  background: var(--color-surface);
}

.section-subtle {
  background: var(--color-bg-subtle);
}

.section-gradient {
  background: linear-gradient(180deg, rgba(0, 181, 182, 0.06) 0%, var(--color-bg) 100%);
}
```

---

## Komponenten

### Buttons

#### Varianten

```css
/* Base Button */
.btn {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--text-sm);
  padding: var(--space-4) var(--space-8);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

/* Primary Button - Teal Gradient */
.btn-primary {
  background: var(--gradient-teal);
  color: var(--color-text-inverse);
  box-shadow: 
    0 1px 2px rgba(0, 91, 99, 0.2),
    0 4px 12px rgba(0, 91, 99, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px rgba(0, 91, 99, 0.25),
    0 12px 24px rgba(0, 91, 99, 0.2),
    0 0 40px rgba(0, 181, 182, 0.2);
}

/* Accent Button - Purple Gradient */
.btn-accent {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  box-shadow: 
    0 1px 2px rgba(152, 54, 255, 0.2),
    0 4px 12px rgba(152, 54, 255, 0.2);
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px rgba(152, 54, 255, 0.3),
    0 12px 24px rgba(152, 54, 255, 0.25);
}

/* Secondary Button */
.btn-secondary {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-teal);
  color: var(--color-teal-dark);
}

/* Outline Button */
.btn-outline {
  background: transparent;
  border: 1.5px solid var(--color-text);
  color: var(--color-text);
}

.btn-outline:hover {
  background: var(--color-text);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

/* White Button (für dunkle Hintergründe) */
.btn-white {
  background: var(--color-white);
  color: var(--color-teal-dark);
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Ghost Button (für dunkle Hintergründe) */
.btn-ghost {
  background: transparent;
  color: var(--color-white);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}
```

#### Größen

```css
.btn-sm {
  padding: var(--space-2) var(--space-5);
  font-size: var(--text-xs);
}

.btn-lg {
  padding: var(--space-5) var(--space-10);
  font-size: var(--text-base);
}
```

#### Focus State

```css
.btn:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}
```

#### Button mit Icon

```html
<a href="#" class="btn btn-primary">
  <i class="ph ph-calendar"></i> Termin buchen
</a>
```

---

### Cards

#### Standard Card

```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(0, 181, 182, 0.2);
}
```

#### Featured Card (mit Gradient-Border)

```css
.card-featured {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  border: 2px solid var(--color-teal);
}

.card-featured::before {
  content: 'Beliebteste Wahl';
  position: absolute;
  top: -12px;
  left: var(--space-8);
  background: var(--gradient-teal);
  color: white;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}
```

#### Glass Card

```css
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

#### Accent Card (mit Left Border)

```css
.card-accent {
  background: linear-gradient(135deg, rgba(0, 181, 182, 0.04) 0%, rgba(186, 246, 226, 0.06) 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  padding-left: var(--space-10);
  position: relative;
  border: 1px solid rgba(0, 181, 182, 0.15);
}

.card-accent::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient-glow);
  border-radius: var(--radius-xl) 0 0 var(--radius-xl);
}
```

---

### Forms

#### Input Fields

```css
.input {
  width: 100%;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: var(--text-base);
  background: var(--color-surface);
  transition: all var(--duration-fast) var(--ease-out);
}

.input:focus {
  outline: none;
  border-color: var(--color-teal);
  box-shadow: 0 0 0 3px rgba(0, 181, 182, 0.1);
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

/* Input mit Icon */
.input-group {
  position: relative;
}

.input-group .input {
  padding-left: var(--space-12);
}

.input-group .input-icon {
  position: absolute;
  left: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: 20px;
}
```

#### Select

```css
.select {
  appearance: none;
  width: 100%;
  padding: var(--space-4) var(--space-6);
  padding-right: var(--space-12);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: var(--text-base);
  background: var(--color-surface) url("data:image/svg+xml,...") no-repeat right var(--space-4) center;
  cursor: pointer;
}
```

#### Checkbox / Radio

```css
.checkbox-group {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
}

.checkbox-group input {
  width: 20px;
  height: 20px;
  accent-color: var(--color-teal);
}
```

---

### Navigation

#### Navbar

```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: var(--space-4) 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--color-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-text);
  background: var(--color-bg-subtle);
}
```

#### Mega Menu

```css
.mega-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  min-width: 600px;
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}

.nav-item:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.mega-menu-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
}

.mega-menu-link:hover {
  background: var(--color-bg-subtle);
}

.mega-menu-link .mega-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-bg-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-teal);
}

.mega-menu-link:hover .mega-icon {
  background: var(--gradient-teal);
  color: white;
}
```

---

### Badges & Tags

#### Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}

.badge-teal {
  background: rgba(0, 181, 182, 0.1);
  color: var(--color-teal-dark);
}

.badge-purple {
  background: rgba(152, 54, 255, 0.1);
  color: var(--color-primary-dark);
}

.badge-success {
  background: var(--color-success);
  color: white;
}

.badge-warning {
  background: var(--color-warning-light);
  color: #92400E;
}

/* Urgency Badge (animiert) */
.badge-urgency {
  background: linear-gradient(135deg, #FEF3C7, #FDE68A);
  color: #92400E;
  animation: pulse 2s infinite;
}
```

#### Tag

```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
}
```

---

### Icons

#### Icon Library

Wir verwenden **Phosphor Icons** (https://phosphoricons.com/)

```html
<!-- CDN einbinden -->
<script src="https://unpkg.com/@phosphor-icons/web@2.0.3"></script>
```

#### Icon Styles

```html
<!-- Regular (Outline) -->
<i class="ph ph-brain"></i>

<!-- Fill -->
<i class="ph-fill ph-star"></i>

<!-- Bold -->
<i class="ph-bold ph-check"></i>
```

#### Icon Container

```css
.icon-container {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background: rgba(0, 181, 182, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--color-teal);
}

/* Größen */
.icon-container-sm {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: var(--radius-md);
}

.icon-container-lg {
  width: 80px;
  height: 80px;
  font-size: 36px;
  border-radius: var(--radius-xl);
}
```

#### Häufig verwendete Icons

| Icon | Klasse | Verwendung |
|------|--------|------------|
| 🧠 | `ph-brain` | KI, Manager |
| 🤖 | `ph-robot` | Automation |
| 🚀 | `ph-rocket-launch` | Start, Launch |
| 📅 | `ph-calendar` | Termine, Events |
| 📞 | `ph-phone` | Kontakt |
| ✉️ | `ph-envelope` | E-Mail |
| ✓ | `ph-check` / `ph-check-circle` | Bestätigung |
| → | `ph-arrow-right` | Links, CTAs |
| 🎓 | `ph-graduation-cap` | Bildung |
| 📜 | `ph-certificate` | Zertifikate |
| 📍 | `ph-map-pin` | Standorte |
| ⏱ | `ph-clock` | Dauer, Zeit |
| 💼 | `ph-briefcase` | Karriere, Jobs |
| 👥 | `ph-users` / `ph-users-three` | Community, Team |
| ⭐ | `ph-star` | Bewertungen |
| 🏢 | `ph-buildings` | Unternehmen |

---

## Patterns

### Hero Section

```html
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <!-- Content Left -->
      <div class="hero-content">
        <span class="badge badge-urgency">
          <i class="ph ph-lightning"></i>
          Nur noch X Plätze
        </span>
        
        <h1>Headline mit <span class="text-gradient">Highlight</span></h1>
        
        <p class="lead">Subheadline mit Beschreibung...</p>
        
        <div class="hero-meta">
          <span class="meta-item"><i class="ph ph-clock"></i> 12 Wochen</span>
          <span class="meta-item"><i class="ph ph-map-pin"></i> Köln</span>
        </div>
        
        <div class="hero-cta">
          <a href="#" class="btn btn-primary">Primary CTA</a>
          <a href="#" class="btn btn-secondary">Secondary CTA</a>
        </div>
      </div>
      
      <!-- Visual Right -->
      <div class="hero-visual">
        <img src="..." alt="..." />
      </div>
    </div>
  </div>
</section>
```

### Section Header

```html
<header class="section-header">
  <h2>Section Headline</h2>
  <p>Supporting text that explains the section</p>
</header>
```

```css
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-12);
}

.section-header h2 {
  margin-bottom: var(--space-4);
}

.section-header p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}
```

### Before/After Transformation

```html
<div class="transformation-grid">
  <div class="transformation-card before">
    <h3><i class="ph ph-x-circle"></i> Vorher</h3>
    <ul>
      <li><i class="ph ph-x"></i> Pain Point 1</li>
      <li><i class="ph ph-x"></i> Pain Point 2</li>
    </ul>
  </div>
  
  <div class="transformation-arrow">
    <i class="ph ph-arrow-right"></i>
  </div>
  
  <div class="transformation-card after">
    <h3><i class="ph ph-check-circle"></i> Nachher</h3>
    <ul>
      <li><i class="ph ph-check"></i> Benefit 1</li>
      <li><i class="ph ph-check"></i> Benefit 2</li>
    </ul>
  </div>
</div>
```

### Testimonial Card

```html
<article class="testimonial-card">
  <div class="testimonial-rating">
    <i class="ph-fill ph-star"></i>
    <i class="ph-fill ph-star"></i>
    <i class="ph-fill ph-star"></i>
    <i class="ph-fill ph-star"></i>
    <i class="ph-fill ph-star"></i>
  </div>
  <blockquote>"Testimonial text..."</blockquote>
  <div class="testimonial-author">
    <div class="avatar">JS</div>
    <div class="author-info">
      <h5>Name</h5>
      <p>Position</p>
    </div>
  </div>
</article>
```

### FAQ Accordion

```html
<div class="faq-item">
  <div class="faq-question">
    <h4>Question?</h4>
    <i class="ph ph-plus-circle"></i>
  </div>
  <div class="faq-answer">
    <p>Answer...</p>
  </div>
</div>
```

```javascript
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
  });
});
```

### CTA Banner

```html
<section class="cta-banner">
  <div class="container">
    <h2>CTA Headline</h2>
    <p>Supporting text</p>
    <a href="#" class="btn btn-white">
      <i class="ph ph-calendar"></i> Button Text
    </a>
  </div>
</section>
```

```css
.cta-banner {
  background: var(--gradient-teal);
  color: white;
  padding: var(--space-20) 0;
  text-align: center;
  border-radius: var(--radius-2xl);
}
```

---

## Accessibility

### Grundregeln

1. **Kontrast**: Mindestens 4.5:1 für normalen Text, 3:1 für großen Text
2. **Focus States**: Alle interaktiven Elemente müssen sichtbare Focus-States haben
3. **Semantisches HTML**: Korrekte Verwendung von Heading-Hierarchie, Landmarks
4. **Alt-Texte**: Alle Bilder benötigen beschreibende Alt-Texte
5. **Keyboard Navigation**: Alle Funktionen müssen per Tastatur erreichbar sein

### Focus Styles

```css
/* Globaler Focus-Style */
:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}

/* Button Focus */
.btn:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}

/* Link Focus */
a:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Skip Link

```html
<a href="#main-content" class="skip-link">
  Zum Hauptinhalt springen
</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-teal);
  color: white;
  padding: var(--space-2) var(--space-4);
  z-index: 9999;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 0;
}
```

### ARIA Labels

```html
<!-- Navigation -->
<nav aria-label="Hauptnavigation">...</nav>

<!-- Buttons mit nur Icons -->
<button aria-label="Menü öffnen">
  <i class="ph ph-list"></i>
</button>

<!-- Externe Links -->
<a href="..." target="_blank" rel="noopener noreferrer">
  Link <span class="sr-only">(öffnet in neuem Tab)</span>
</a>
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones) */
/* Default styles */

/* Medium devices (tablets) */
@media (min-width: 640px) {
  /* sm: 640px */
}

/* Large devices (tablets landscape, small laptops) */
@media (min-width: 768px) {
  /* md: 768px */
}

/* Extra large devices (desktops) */
@media (min-width: 1024px) {
  /* lg: 1024px */
}

/* 2X large devices (large desktops) */
@media (min-width: 1280px) {
  /* xl: 1280px */
}
```

### Responsive Utilities

```css
/* Hide on mobile, show on desktop */
.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* Show on mobile, hide on desktop */
.mobile-only {
  display: block;
}

@media (min-width: 1024px) {
  .mobile-only {
    display: none;
  }
}
```

### Grid Responsive Patterns

```css
/* 4 columns → 2 columns → 1 column */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Code Guidelines

### CSS Organisation

```css
/* 1. Reset & Base */
/* 2. CSS Variables */
/* 3. Typography */
/* 4. Layout */
/* 5. Components */
/* 6. Utilities */
/* 7. Animations */
/* 8. Media Queries */
```

### Naming Convention

```css
/* BEM-inspiriert für Komponenten */
.card { }
.card-header { }
.card-body { }
.card-footer { }

/* Modifiers */
.card-featured { }
.card-compact { }

/* States */
.card.is-active { }
.card.is-loading { }
```

### CSS Custom Properties Best Practices

```css
/* ✓ DO: Semantic naming */
--color-text-primary
--color-background-elevated

/* ✗ DON'T: Literal naming */
--dark-gray
--light-blue-hover
```

### HTML Structure

```html
<!-- Semantische Struktur -->
<header>
  <nav>...</nav>
</header>

<main>
  <section aria-labelledby="section-title">
    <h2 id="section-title">...</h2>
    <article>...</article>
  </section>
</main>

<footer>
  <nav aria-label="Footer Navigation">...</nav>
</footer>
```

---

## Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-nav: 1000;
  --z-toast: 1100;
  --z-tooltip: 1200;
}
```

---

## Changelog

### Version 1.0 (Dezember 2024)
- Initial Release
- Vollständiges Farbsystem
- Typografie-Scale
- Alle Kernkomponenten
- Responsive Patterns
- Accessibility Guidelines

---

*Erstellt für STARTPLATZ AI Hub | © 2025*

