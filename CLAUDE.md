# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Sorteio Online" is a complete web-based lottery/draw system built with vanilla HTML, CSS, and JavaScript. The system is designed for monetization through Google AdSense and offers multiple types of draws/lotteries.

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **CSS Framework**: Bootstrap 5.3.0
- **Icons**: Font Awesome 6.0.0
- **Hosting**: Static site (GitHub Pages, Netlify compatible)
- **No build process required** - pure client-side application

## Project Structure

```
sorteio/
├── index.html              # Landing page with hero section and features
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with responsive design
│   ├── js/
│   │   ├── main.js         # Core utilities and shared functions
│   │   ├── sorteio-nomes.js   # Name lottery functionality
│   │   ├── sorteio-numeros.js # Number lottery functionality
│   │   └── roleta.js       # Wheel/roulette functionality
│   ├── images/             # Images and icons (empty)
│   └── sounds/             # Sound effects (empty)
├── pages/
│   ├── nomes.html          # Name lottery page
│   ├── numeros.html        # Number lottery page
│   ├── roleta.html         # Roulette wheel page
│   ├── premios.html        # Prize lottery page (not implemented)
│   └── times.html          # Team generator page (not implemented)
├── blog/                   # SEO content directory (empty)
├── examples/               # Example templates (empty)
└── CLAUDE.md              # This file
```

## Architecture Patterns

### JavaScript Architecture
- **Class-based modules**: Each lottery type has its own class (SorteioNomes, SorteioNumeros, Roleta)
- **Shared utilities**: Common functions in `SorteioUtils` global object
- **Local storage**: History and settings persistence
- **Event-driven**: DOM event handling with method binding

### CSS Architecture
- **CSS Custom Properties**: Color scheme defined in `:root`
- **Bootstrap integration**: Custom styles complement Bootstrap components
- **Responsive design**: Mobile-first approach with breakpoints
- **Animation system**: CSS animations for interactions and feedback

### Data Management
- **LocalStorage**: User history, preferences (key: 'sorteio_history')
- **No backend**: Fully client-side application
- **JSON structure**: Standardized data format for all lottery types

## Core Features Implemented

### 1. Name Lottery (`pages/nomes.html`)
- Add participants individually or in bulk
- Remove participants
- Random selection with animation
- History tracking
- Share functionality (WhatsApp, Telegram)

### 2. Number Lottery (`pages/numeros.html`)
- Configurable number ranges
- Multiple number generation
- Duplicate control
- Quick presets (Mega-Sena, Lotofácil, etc.)
- Statistics display

### 3. Roulette Wheel (`pages/roleta.html`)
- Visual canvas-based wheel
- Up to 15 options
- Animated spinning with physics
- Quick presets (Yes/No, Rock/Paper/Scissors, etc.)
- Color-coded sections

## Development Guidelines

### Adding New Lottery Types
1. Create HTML page in `pages/` directory
2. Create corresponding JavaScript class in `assets/js/`
3. Follow naming convention: `sorteio-[type].js`
4. Update navigation in all HTML files
5. Add to main landing page features section

### CSS Conventions
- Use Bootstrap classes when possible
- Custom classes follow BEM-like naming
- Color variables from CSS custom properties
- Responsive breakpoints: 576px, 768px, 992px, 1200px

### JavaScript Conventions
- ES6+ syntax (classes, arrow functions, async/await)
- Error handling with user-friendly messages
- Accessibility considerations (ARIA labels, keyboard navigation)
- Performance optimizations (event delegation, animation frames)

## AdSense Integration

### Current Ad Placements
- Banner 728x90 on landing page (hero section)
- Banner 300x250 on landing page (features section)  
- Banner 728x90 on all lottery pages (below form)

### AdSense Optimization
- Semantic HTML structure for content targeting
- Meta tags optimized for lottery/games niche
- Fast loading times (no external dependencies except CDNs)
- Mobile-responsive ad units

## SEO Considerations

### Technical SEO
- Semantic HTML5 structure
- Meta descriptions and keywords for each page
- Open Graph tags for social sharing
- Portuguese language targeting (`lang="pt-BR"`)

### Content Strategy
- Blog directory prepared for content marketing
- Examples directory for tutorial content
- FAQ and help sections planned
- Social sharing integration

## Browser Support

- Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support (uses modern JavaScript features)

## Performance Notes

- No build process required
- Minimal external dependencies (Bootstrap, Font Awesome via CDN)
- Lazy loading for images (when implemented)
- Efficient canvas operations for roulette
- LocalStorage for data persistence (no server calls)

## Common Tasks

### Testing the Application
Open `index.html` in a web browser or serve with any local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if http-server is installed)
npx http-server

# PHP
php -S localhost:8000
```

### Adding Sound Effects
Place audio files in `assets/sounds/` and reference in JavaScript:
```javascript
const audio = new Audio('../assets/sounds/win.mp3');
```

### Customizing Colors
Modify CSS custom properties in `assets/css/style.css`:
```css
:root {
    --primary-color: #0d6efd;
    --success-color: #198754;
    /* etc */
}
```