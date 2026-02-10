# BRÜCKEN - Landing Page

A high-performance, conversion-focused landing page for BRÜCKEN, a decisions engine that transforms data into business intelligence.

## Overview

This landing page showcases BRÜCKEN's core offering: an intelligent decisions engine that bridges the gap between complex data and actionable business insights. Built with pure HTML, CSS, and JavaScript for maximum performance and minimal dependencies.

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
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete stylesheet with responsive design
│   ├── js/
│   │   └── main.js         # Interaction scripts and form handling
│   └── images/
│       ├── logo.svg        # BRÜCKEN logo (placeholder - replace with actual)
│       └── README.md       # Instructions for logo replacement
├── .gitignore              # Git ignore patterns
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

#### Replace the Logo

1. Place your actual BRÜCKEN logo in `assets/images/`
2. Supported formats: SVG (recommended), PNG, or JPG
3. Update the `src` attribute in `index.html` if using a different filename:
   ```html
   <img src="assets/images/your-logo.svg" alt="BRÜCKEN Logo">
   ```

#### Update Contact Form

The contact form currently uses client-side validation and logs data to console. To connect to a backend:

1. Open `assets/js/main.js`
2. Find the form submission handler (line ~30)
3. Uncomment and customize the `fetch()` call to your API endpoint

**Alternative: Use a Form Service**

Popular options:
- [Formspree](https://formspree.io/) - Simple form handling
- [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify
- [Google Forms](https://www.google.com/forms/about/) - Free with Google account

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
   git commit -m "Initial commit: BRÜCKEN landing page"
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

1. **Hero Section** - Main headline and primary CTA
2. **Value Proposition** - Explains what BRÜCKEN does
3. **Benefits** - Four key benefit cards
4. **How It Works** - Three-step process visualization
5. **Social Proof** - Statistics and testimonials
6. **Contact Form** - Lead capture with validation
7. **Footer** - Links and copyright

To modify content, edit the HTML in `index.html` for each section.

### Adding Analytics

To add Google Analytics or other tracking:

1. Add tracking script to `<head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. The `main.js` file includes a `trackEvent()` function ready for custom event tracking

### SEO Optimization

The page includes basic SEO optimization:
- Semantic HTML5 elements
- Meta descriptions and keywords
- Open Graph tags (add if needed for social sharing)
- Fast loading performance

**To improve SEO:**
1. Add Open Graph meta tags in `<head>`
2. Create a `sitemap.xml` file
3. Add a `robots.txt` file
4. Submit to Google Search Console

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

© 2026 BRÜCKEN. All rights reserved.

---

Built with performance and conversion in mind. No frameworks, no bloat, just clean code that works.
