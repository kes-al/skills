# Tag Component Library

Production-ready component patterns for Tag brand interfaces. Copy, adapt, and compose these building blocks.

---

## Base Setup

Always include at the start of any Tag interface:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tag</title>
  
  <!-- Space Grotesk Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
  
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: #000000;
      background: #FFFFFF;
    }
  </style>
</head>
```

---

## Navigation

### Standard Header Navigation

```html
<nav class="tag-nav">
  <a href="/" class="tag-nav-logo">
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
      <!-- Tag logo SVG path -->
      <path d="M0 0h80v32H0z" fill="currentColor"/>
    </svg>
  </a>
  
  <div class="tag-nav-links">
    <a href="/services" class="tag-nav-link">What we do</a>
    <a href="/work" class="tag-nav-link">Our work</a>
    <a href="/about" class="tag-nav-link">Who we are</a>
    <a href="/insights" class="tag-nav-link">Insights</a>
  </div>
  
  <a href="/contact" class="tag-btn tag-btn-yellow">Contact</a>
</nav>

<style>
.tag-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(5vmin, 7.5vmin, 10vmin);
  background: #000000;
  color: #FFFFFF;
}

.tag-nav-logo {
  color: #FFFFFF;
  text-decoration: none;
}

.tag-nav-links {
  display: flex;
  gap: 2rem;
}

.tag-nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  position: relative;
  padding: 0.25rem 0;
}

.tag-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #F8E600;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .tag-nav-links {
    display: none;
  }
}
</style>
```

---

## Buttons

### Primary Button (CTA)

```html
<!-- Blue CTA (light backgrounds) -->
<button class="tag-btn tag-btn-blue">Make it land</button>

<!-- Orange CTA (light backgrounds) -->
<button class="tag-btn tag-btn-orange">Get started</button>

<!-- Yellow CTA (dark backgrounds) -->
<button class="tag-btn tag-btn-yellow">Contact us</button>

<style>
.tag-btn {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-btn:hover {
  transform: translateY(-2px);
}

.tag-btn:active {
  transform: translateY(0);
}

.tag-btn-blue {
  background: #0163E5;
  color: #FFFFFF;
}

.tag-btn-blue:hover {
  box-shadow: 0 4px 14px -2px rgba(1, 99, 229, 0.4);
}

.tag-btn-orange {
  background: #FF4B00;
  color: #FFFFFF;
}

.tag-btn-orange:hover {
  box-shadow: 0 4px 14px -2px rgba(255, 75, 0, 0.4);
}

.tag-btn-yellow {
  background: #F8E600;
  color: #000000;
}

.tag-btn-yellow:hover {
  box-shadow: 0 4px 14px -2px rgba(248, 230, 0, 0.4);
}
</style>
```

### Secondary Button (Ghost)

```html
<button class="tag-btn tag-btn-ghost">Learn more</button>

<style>
.tag-btn-ghost {
  background: transparent;
  color: currentColor;
  border: 1px solid currentColor;
}

.tag-btn-ghost:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* On dark backgrounds */
.tag-dark .tag-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
```

---

## Cards

### Service Card

```html
<article class="tag-card-service">
  <span class="tag-card-number">01</span>
  <h3 class="tag-card-title">Shoot Production</h3>
  <p class="tag-card-description">
    High-quality visual content that captures your brand's essence 
    and resonates with your audience.
  </p>
  <a href="/services/shoot-production" class="tag-card-link">
    Learn more
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </a>
</article>

<style>
.tag-card-service {
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tag-card-number {
  font-size: 2.618rem;
  font-weight: 600;
  color: #F8E600;
  line-height: 1;
}

.tag-card-title {
  font-size: 1.618rem;
  font-weight: 600;
  color: #000000;
}

.tag-card-description {
  color: #666666;
  line-height: 1.6;
}

.tag-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0163E5;
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
}

.tag-card-link:hover {
  gap: 0.75rem;
}

.tag-card-link svg {
  transition: transform 0.2s ease;
}

.tag-card-link:hover svg {
  transform: translateX(4px);
}
</style>
```

### Case Study Card

```html
<article class="tag-card-case">
  <div class="tag-card-case-image">
    <img src="case-study.jpg" alt="Ralph Lauren campaign" />
  </div>
  <div class="tag-card-case-content">
    <span class="tag-card-case-client">Ralph Lauren</span>
    <h3 class="tag-card-case-title">Three-stage consulting</h3>
    <p class="tag-card-case-result">25% increase in production output</p>
  </div>
</article>

<style>
.tag-card-case {
  background: #DFE6EF;
  border-radius: 8px;
  overflow: hidden;
}

.tag-card-case-image {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.tag-card-case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-card-case:hover .tag-card-case-image img {
  transform: scale(1.05);
}

.tag-card-case-content {
  padding: 1.5rem;
}

.tag-card-case-client {
  font-size: 0.75rem;
  font-weight: 500;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tag-card-case-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.tag-card-case-result {
  font-size: 0.875rem;
  color: #0163E5;
  margin-top: 0.5rem;
  font-weight: 500;
}
</style>
```

---

## Hero Sections

### Hero with Content Path

```html
<section class="tag-hero">
  <div class="tag-hero-content">
    <h1 class="tag-hero-headline">
      From sky-high concept to street-level impact.
    </h1>
    <p class="tag-hero-subline">
      We craft high-quality content that makes your ideas land 
      everywhere they need to be.
    </p>
    <a href="/contact" class="tag-btn tag-btn-orange">Make it land</a>
  </div>
  
  <div class="tag-hero-visual">
    <!-- Content Path with image -->
    <svg class="tag-content-path" viewBox="0 0 500 700" fill="none">
      <defs>
        <clipPath id="heroClip">
          <path d="M 0 0 L 350 0 Q 450 0, 450 100 L 450 450 Q 450 550, 350 550 L 150 550 Q 50 550, 50 650 L 50 700 L 500 700 L 500 0 Z"/>
        </clipPath>
      </defs>
      <image 
        href="hero-image.jpg" 
        width="500" 
        height="700" 
        clip-path="url(#heroClip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <path 
        d="M 0 100 L 0 550 L 50 550 Q 150 550, 150 450 L 150 100 Q 150 0, 250 0 L 350 0 Q 450 0, 450 100 L 450 450"
        fill="#F8E600"
        opacity="0"
      />
    </svg>
  </div>
</section>

<style>
.tag-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: clamp(5vmin, 7.5vmin, 10vmin);
  min-height: 80vh;
  align-items: center;
  background: #DFE6EF;
}

.tag-hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tag-hero-headline {
  font-size: clamp(2.5rem, 5vw, 4.236rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.tag-hero-subline {
  font-size: 1.125rem;
  color: #333333;
  max-width: 40ch;
}

.tag-hero-visual {
  position: relative;
}

.tag-content-path {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .tag-hero {
    grid-template-columns: 1fr;
  }
  
  .tag-hero-visual {
    order: -1;
  }
}
</style>
```

---

## Stats Section

```html
<section class="tag-stats">
  <div class="tag-stat">
    <span class="tag-stat-value">50+</span>
    <span class="tag-stat-label">Years of expertise</span>
  </div>
  <div class="tag-stat">
    <span class="tag-stat-value">2,500</span>
    <span class="tag-stat-label">Specialists worldwide</span>
  </div>
  <div class="tag-stat">
    <span class="tag-stat-value">125+</span>
    <span class="tag-stat-label">Markets served</span>
  </div>
  <div class="tag-stat">
    <span class="tag-stat-value">35%</span>
    <span class="tag-stat-label">Average ROI uplift</span>
  </div>
</section>

<style>
.tag-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 4rem clamp(5vmin, 7.5vmin, 10vmin);
  background: #000000;
  color: #FFFFFF;
}

.tag-stat {
  text-align: center;
}

.tag-stat-value {
  display: block;
  font-size: 4.236rem;
  font-weight: 600;
  line-height: 1;
  color: #F8E600;
}

.tag-stat-label {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #CCCCCC;
}

@media (max-width: 768px) {
  .tag-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tag-stat-value {
    font-size: 2.618rem;
  }
}
</style>
```

---

## Footer

```html
<footer class="tag-footer">
  <div class="tag-footer-main">
    <div class="tag-footer-brand">
      <svg class="tag-footer-logo" width="100" height="40" viewBox="0 0 100 40">
        <!-- Tag logo -->
      </svg>
      <p class="tag-footer-tagline">Make it land.</p>
    </div>
    
    <nav class="tag-footer-nav">
      <div class="tag-footer-column">
        <h4 class="tag-footer-heading">What we do</h4>
        <ul class="tag-footer-links">
          <li><a href="/services/production">Production</a></li>
          <li><a href="/services/localization">Localization</a></li>
          <li><a href="/services/technology">Technology</a></li>
        </ul>
      </div>
      
      <div class="tag-footer-column">
        <h4 class="tag-footer-heading">Company</h4>
        <ul class="tag-footer-links">
          <li><a href="/about">About us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="tag-footer-column">
        <h4 class="tag-footer-heading">Connect</h4>
        <ul class="tag-footer-links">
          <li><a href="https://linkedin.com/company/tag">LinkedIn</a></li>
          <li><a href="https://twitter.com/tagww">Twitter</a></li>
          <li><a href="https://instagram.com/tagww">Instagram</a></li>
        </ul>
      </div>
    </nav>
  </div>
  
  <div class="tag-footer-bottom">
    <p class="tag-footer-copyright">© 2025 Tag. A dentsu company.</p>
    <div class="tag-footer-legal">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Use</a>
    </div>
  </div>
</footer>

<style>
.tag-footer {
  background: #000000;
  color: #FFFFFF;
  padding: 4rem clamp(5vmin, 7.5vmin, 10vmin) 2rem;
}

.tag-footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #333333;
}

.tag-footer-tagline {
  margin-top: 1rem;
  color: #F8E600;
  font-weight: 500;
}

.tag-footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.tag-footer-heading {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888888;
  margin-bottom: 1rem;
}

.tag-footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tag-footer-links a {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.tag-footer-links a:hover {
  color: #F8E600;
}

.tag-footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
}

.tag-footer-copyright {
  font-size: 0.75rem;
  color: #666666;
}

.tag-footer-legal {
  display: flex;
  gap: 1.5rem;
}

.tag-footer-legal a {
  font-size: 0.75rem;
  color: #666666;
  text-decoration: none;
}

.tag-footer-legal a:hover {
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .tag-footer-main {
    grid-template-columns: 1fr;
  }
  
  .tag-footer-nav {
    grid-template-columns: 1fr;
  }
  
  .tag-footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
```

---

## Forms

### Contact Form

```html
<form class="tag-form">
  <div class="tag-form-group">
    <label class="tag-form-label" for="name">Name</label>
    <input 
      type="text" 
      id="name" 
      class="tag-form-input" 
      placeholder="Your name"
    />
  </div>
  
  <div class="tag-form-group">
    <label class="tag-form-label" for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      class="tag-form-input" 
      placeholder="you@company.com"
    />
  </div>
  
  <div class="tag-form-group">
    <label class="tag-form-label" for="message">Message</label>
    <textarea 
      id="message" 
      class="tag-form-textarea" 
      rows="4"
      placeholder="Tell us about your project"
    ></textarea>
  </div>
  
  <button type="submit" class="tag-btn tag-btn-blue">
    Send message
  </button>
</form>

<style>
.tag-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
}

.tag-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #333333;
}

.tag-form-input,
.tag-form-textarea {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid #C9D1D8;
  border-radius: 4px;
  background: #FFFFFF;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.tag-form-input:focus,
.tag-form-textarea:focus {
  outline: none;
  border-color: #0163E5;
  box-shadow: 0 0 0 3px rgba(1, 99, 229, 0.1);
}

.tag-form-input::placeholder,
.tag-form-textarea::placeholder {
  color: #999999;
}

.tag-form-textarea {
  resize: vertical;
  min-height: 120px;
}
</style>
```

---

## Animation Utilities

```html
<style>
/* Fade Up on Scroll */
.tag-animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-animate-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.tag-stagger > * {
  opacity: 0;
  transform: translateY(20px);
}

.tag-stagger.is-visible > * {
  animation: tag-stagger-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.tag-stagger.is-visible > *:nth-child(1) { animation-delay: 0.1s; }
.tag-stagger.is-visible > *:nth-child(2) { animation-delay: 0.2s; }
.tag-stagger.is-visible > *:nth-child(3) { animation-delay: 0.3s; }
.tag-stagger.is-visible > *:nth-child(4) { animation-delay: 0.4s; }
.tag-stagger.is-visible > *:nth-child(5) { animation-delay: 0.5s; }
.tag-stagger.is-visible > *:nth-child(6) { animation-delay: 0.6s; }

@keyframes tag-stagger-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover lift */
.tag-hover-lift {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}
</style>

<script>
// Intersection Observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tag-animate-fade-up, .tag-stagger').forEach(el => {
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', observeElements);
</script>
```
