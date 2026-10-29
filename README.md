# Brücken - Landing Page

A high-performance, conversion-focused landing page for Brücken, a decisions engine that transforms data into business intelligence.

## Overview

This landing page showcases Brücken's core offering: an intelligent decisions engine that bridges the gap between complex data and actionable business insights. Built with pure HTML, CSS, and JavaScript for maximum performance and minimal dependencies.

## Features

- **Modern, Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **High Performance**: No frameworks, minimal JavaScript, optimized for fast loading
- **SEO Optimized**: Semantic HTML5 markup with proper meta tags
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Conversion Focused**: Clear CTAs, contact form, and benefit-driven content
- **Professional Typography**: Using Inter font for clean, modern appearance

## Project Structure

```
brucken-web/
├── index.html              # Main landing page
├── favicon.svg             # Site icon
├── robots.txt              # Crawler rules
├── sitemap.xml             # Sitemap for search engines
├── CNAME                   # Custom domain (brucken.com.br) for GitHub Pages
├── assets/
│   ├── css/styles.css      # Complete stylesheet with responsive design
│   ├── js/main.js          # Scroll animations and GA4 event tracking
│   ├── images/             # Logo
│   └── docs/               # Privacy policy (LGPD)
└── README.md               # This file
```

## Getting Started

### View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/brucken-co/brucken-web.git
   cd brucken-web
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (with npx)
     npx serve
     ```

3. Visit `http://localhost:8000` in your browser

### Customize Content

#### Logo

The logo used on the page is `assets/images/remove_bg_para_fundo_claro.png`. It is also the Open Graph image used when the link is shared.

#### Modify Colors

All colors are defined as CSS custom properties in `assets/css/styles.css`:

```css
:root {
    --primary-blue: #2B7AB5;
    --accent-orange: #F5A623;
    --dark-navy: #1a1a2e;
    /* ... more colors */
}
```

Change these values to match your brand.

## Deployment

### GitHub Pages (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Brücken landing page"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select `main` branch and `/` (root) folder
   - Click "Save"

3. Your site will be available at:
   ```
   https://brucken-co.github.io/brucken-web/
   ```

### Other Hosting Options

**Netlify:**
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository
3. Deploy with default settings
4. Automatic deployments on every push

**Vercel:**
1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic previews for pull requests

**Traditional Hosting:**
- Upload all files to your web server via FTP/SFTP
- Ensure the server supports static HTML files
- Point your domain to the server

## Customization Guide

### Page Sections

The landing page includes these sections:

1. **Hero Section** - Main headline and primary CTAs
2. **Value Proposition** - Explains what Brücken does
3. **Benefits** - Four key benefit cards
4. **How It Works** - Three-step process visualization
5. **Engagement Models** - Consultoria, Motor de Decisão and Full Service
6. **Sectors** - Target verticals
7. **Contact** - Meeting booking, WhatsApp and LinkedIn links
8. **Footer** - Links, privacy policy (LGPD) and copyright

To modify content, edit the HTML in `index.html` for each section.

### Analytics

Google Analytics 4 (`G-LMKF2JBQ64`) is loaded in `<head>`. `main.js` sends a `cta_click` event for every CTA and the floating WhatsApp button.

### SEO Optimization

The page includes:
- Semantic HTML5 (`<main>`, heading hierarchy)
- Meta description, canonical URL and favicon
- Open Graph / Twitter tags for link previews
- JSON-LD `Organization` structured data
- `robots.txt` and `sitemap.xml`

Remember to update `<lastmod>` in `sitemap.xml` when the content changes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Target metrics (based on Lighthouse):
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Optimization features:**
- Minimal JavaScript (< 5KB)
- CSS Custom Properties for theming
- No external dependencies except fonts
- Responsive images with proper sizing

## Maintenance

### Regular Updates

- Review and update content quarterly
- Test forms monthly to ensure proper function
- Update testimonials and statistics as available
- Monitor analytics to optimize conversion rates

### Adding New Sections

1. Add HTML markup in `index.html`
2. Style in `assets/css/styles.css`
3. Add interactions in `assets/js/main.js` if needed
4. Update navigation/footer links

## Support

For questions or issues:
- Review the [GitHub Issues](https://github.com/brucken-co/brucken-web/issues)
- Contact the development team

## License

© 2026 Brücken. All rights reserved.

---

Built with performance and conversion in mind. No frameworks, no bloat, just clean code that works.
