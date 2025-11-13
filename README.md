# 🥋 Panamerican Taekwondo Academy Website

Official landing page for Panamerican Taekwondo Academy in Winston-Salem, NC.

## Academy Information
- **Phone:** 336-624-8499
- **Address:** 3712 Reynolda Rd, Winston-Salem, NC 27106
- **Website:** https://panamericantaekwondoacademy.com
- **Email:** panamericantkd22@gmail.com

## Features

### 🎨 Modern Design
- Clean, professional aesthetic with Taekwondo branding colors (red, gold, black)
- Fully responsive design that works on all devices
- Smooth animations and transitions
- Eye-catching hero section with gradient background

### 📱 Mobile-First Responsive Design
- Optimized for mobile devices, tablets, and desktops
- Breakpoints at 768px and 480px
- Hamburger menu navigation for mobile
- Touch-friendly interface

### 🧭 Navigation
- Sticky navigation bar
- Smooth scrolling to sections
- Active link highlighting
- Mobile-responsive menu with hamburger toggle

### 📄 Content Sections

#### Hero Section
- Compelling headline and call-to-action
- Bilingual messaging (English/Spanish: "Mejora tu conexión cuerpo-mente")
- Two prominent CTA buttons

#### About Us
- Academy mission and values
- Three feature highlights:
  - 🥇 Expert Instructors
  - 👨‍👩‍👧‍👦 All Ages Welcome
  - 🏆 Proven Results

#### Services & Programs
Six comprehensive program offerings:
1. **Kids Classes** (ages 4-12) - Building confidence and discipline
2. **Teen & Adult Classes** - Fitness, self-defense, and personal development
3. **Competition Training** - Tournament preparation and advanced techniques
4. **Fitness & Conditioning** - Martial arts-based fitness classes
5. **Belt Advancement** - Structured curriculum from white to black belt
6. **Family Classes** - Train together as a family

#### Contact Section
- Contact information with clickable phone/email
- Interactive contact form with validation
- Professional information cards

### ✉️ Contact Form Features
- Real-time validation
- Email format checking
- Required field indicators
- Success/error messaging
- Phone number auto-formatting
- Fully accessible with ARIA labels

### ♿ Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Proper heading hierarchy
- Focus indicators

### 🎯 Technical Stack
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, lightweight and fast
- **Mobile-First** - Responsive design approach

## File Structure
```
src/
├── index.html        # Main landing page
├── css/
│   └── custom.css    # Styles and responsive design
└── js/
    └── main.js       # Interactive features and form validation
```

## Local Development

### Quick Start
```bash
# Navigate to the src directory
cd src

# Start a local server (Python 3)
python3 -m http.server 8080

# Or use any static file server
# Then open http://localhost:8080 in your browser
```

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The site is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Deployment
```bash
npm run deploy
```

## Customization

### Colors
The academy's brand colors are defined in CSS variables in `src/css/custom.css`:
```css
--tkd-red: #c41e3a;
--tkd-gold: #ffd700;
--tkd-black: #1a1a1a;
```

### Content
Edit `src/index.html` to update:
- Academy information
- Service descriptions
- Contact details
- Any text content

### Styling
Modify `src/css/custom.css` to adjust:
- Layout and spacing
- Colors and typography
- Responsive breakpoints
- Animations

## Performance

- ✅ No external dependencies
- ✅ Optimized CSS
- ✅ Efficient JavaScript
- ✅ Fast load times
- ✅ Mobile-optimized

## Security

- ✅ CodeQL security scan passed (0 vulnerabilities)
- ✅ No sensitive data in code
- ✅ Form validation on client-side
- ⚠️ Server-side validation recommended when implementing backend

## Future Enhancements

Consider adding:
- Backend API for form submissions
- Class schedule calendar
- Student testimonials section
- Photo gallery
- Blog integration
- Online registration system

🥋 Built with martial arts precision and modern web standards!
