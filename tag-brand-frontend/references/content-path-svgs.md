# Content Path SVG Reference

The Content Path is Tag's signature graphical element—a curved pathway derived from the geometric angles of the logo. Use these pre-built variations or adapt them to your layout.

## Core Principles

1. **One path per composition** — Never use multiple Content Paths
2. **Grid-aligned** — Position within the 4×4 grid system
3. **Filled, never stroked** — Always solid fill, no outlines
4. **Proportional thickness** — 1 to 1.5 grid rows
5. **Simple journey** — Top-to-bottom or side-to-side flow

---

## Variation 1: Top-to-Bottom (Standard)

The most common variation. Flows from top edge to bottom edge with a characteristic curve.

```html
<svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 0 0 
       L 250 0 
       Q 350 0, 350 100 
       L 350 500 
       Q 350 600, 250 600 
       L 100 600
       Q 0 600, 0 700
       L 0 800"
    fill="#F8E600"
  />
</svg>
```

**CSS Version:**
```css
.content-path-vertical {
  background: #F8E600;
  clip-path: polygon(
    0% 0%, 
    62.5% 0%, 
    87.5% 0%, 
    87.5% 62.5%, 
    62.5% 75%, 
    25% 75%, 
    0% 87.5%, 
    0% 100%
  );
}
```

---

## Variation 2: Side-to-Side (Horizontal)

Flows from left edge to right edge. Ideal for wide banners and headers.

```html
<svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 0 0 
       L 0 250 
       Q 0 350, 100 350 
       L 800 350 
       Q 900 350, 900 250 
       L 900 150
       Q 900 50, 1000 50
       L 1200 50
       L 1200 0
       Z"
    fill="#F8E600"
  />
</svg>
```

---

## Variation 3: Corner Flow (Top-Right to Bottom)

Enters from top-right, exits at bottom. Creates dynamic diagonal movement.

```html
<svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 600 0 
       L 600 100
       L 400 100 
       Q 300 100, 300 200 
       L 300 500 
       Q 300 600, 200 600 
       L 0 600
       L 0 800
       L 600 800
       L 600 0
       Z"
    fill="#F8E600"
  />
</svg>
```

---

## Variation 4: Side Entry (Left to Bottom)

Enters from left edge, curves down and exits at bottom.

```html
<svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 0 100 
       L 200 100 
       Q 300 100, 300 200 
       L 300 400 
       Q 300 500, 400 500 
       L 600 500
       L 600 600
       L 0 600
       Z"
    fill="#F8E600"
  />
</svg>
```

---

## Variation 5: Compact Swirl (Social/Square Formats)

Optimized for 1:1 aspect ratios like social media.

```html
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 0 50 
       L 150 50 
       Q 250 50, 250 150 
       L 250 250 
       Q 250 350, 150 350 
       L 0 350
       L 0 400
       L 400 400
       L 400 0
       L 0 0
       Z"
    fill="#F8E600"
  />
</svg>
```

---

## Implementation as Image Container

Use the Content Path as a clip-path for images:

```html
<div class="content-path-image-container">
  <img src="product.jpg" alt="Product shot" />
</div>

<style>
.content-path-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.content-path-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: url(#content-path-clip);
}
</style>

<!-- Define reusable clip path -->
<svg width="0" height="0">
  <defs>
    <clipPath id="content-path-clip" clipPathUnits="objectBoundingBox">
      <path d="M 0 0 
               L 0.625 0 
               Q 0.875 0, 0.875 0.125 
               L 0.875 0.625 
               Q 0.875 0.75, 0.75 0.75 
               L 0.25 0.75
               Q 0.125 0.75, 0.125 0.875
               L 0.125 1
               L 1 1
               L 1 0
               Z" />
    </clipPath>
  </defs>
</svg>
```

---

## React Component

```jsx
const ContentPath = ({ 
  variant = 'vertical', 
  color = '#F8E600',
  className = '' 
}) => {
  const paths = {
    vertical: `M 0 0 L 250 0 Q 350 0, 350 100 L 350 500 Q 350 600, 250 600 L 100 600 Q 0 600, 0 700 L 0 800`,
    horizontal: `M 0 0 L 0 250 Q 0 350, 100 350 L 800 350 Q 900 350, 900 250 L 900 150 Q 900 50, 1000 50 L 1200 50 L 1200 0 Z`,
    corner: `M 600 0 L 600 100 L 400 100 Q 300 100, 300 200 L 300 500 Q 300 600, 200 600 L 0 600 L 0 800 L 600 800 L 600 0 Z`,
  };
  
  const viewBoxes = {
    vertical: '0 0 400 800',
    horizontal: '0 0 1200 400',
    corner: '0 0 600 800',
  };

  return (
    <svg 
      viewBox={viewBoxes[variant]} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={paths[variant]} fill={color} />
    </svg>
  );
};

export default ContentPath;
```

---

## Animated Content Path

Reveal animation that draws the path in:

```css
@keyframes content-path-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.content-path-animated {
  animation: content-path-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

For SVG stroke animation (outline version for loading states only):

```css
.content-path-draw path {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: draw-path 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}
```

---

## Grid Placement Guidelines

When placing a Content Path, follow these steps:

1. **Set up 4×4 grid** with 5-10% margins
2. **Position path** starting at a grid intersection
3. **Scale thickness** to span 1-1.5 grid rows
4. **Extend endpoints** to frame edges where possible
5. **Ensure curves** align with grid intersections

```
┌─────┬─────┬─────┬─────┐
│     │█████│█████│     │ ← Path enters at col 2
├─────┼─────┼█████┼─────┤
│     │     │█████│     │ ← Vertical section
├─────┼─────┼█████┼─────┤
│     │█████│█████│     │ ← Curve at grid point
├─────┼█████┼─────┼─────┤
│█████│█████│     │     │ ← Path exits at col 1
└─────┴─────┴─────┴─────┘
```

---

## Don'ts — Visual Reference

**❌ Multiple paths:**
```
Bad: Two or more Content Paths in one composition
```

**❌ Outlined path:**
```css
/* WRONG */
.content-path { 
  fill: none; 
  stroke: #F8E600; 
  stroke-width: 40; 
}
```

**❌ Too thin:**
```
Bad: Path thickness less than 1 grid row
```

**❌ Overcomplicated:**
```
Bad: More than 2 direction changes
```

**❌ Random placement:**
```
Bad: Path not aligned to grid system
```
