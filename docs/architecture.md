# Architecture Documentation - Devmart Marko v1

## Phase 1A: HTML to React Frontend Conversion (COMPLETED)

### Project Structure

```
devmart-marko-v1/
├── marko-digital-marketing-agency-html/  # Original HTML template (preserved)
│   ├── css/                               # Bootstrap + custom CSS
│   ├── js/                                # jQuery + vendor scripts
│   ├── image/                             # All template images
│   ├── webfonts/                          # Font files
│   ├── DOCUMENTATION/                     # Template documentation
│   └── *.html                             # Original HTML pages
│
├── src/                                   # React application
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx                 # Converted header with nav
│   │       └── Footer.tsx                 # Converted footer
│   ├── layouts/
│   │   └── MainLayout.tsx                 # Main layout wrapper
│   ├── pages/                             # All page components
│   │   ├── HomePage.tsx                   # index.html → React
│   │   ├── AboutPage.tsx                  # about.html → React
│   │   ├── ServicesPage.tsx               # service.html → React
│   │   ├── SingleServicePage.tsx          # single_services.html → React
│   │   ├── BlogPage.tsx                   # blog.html → React
│   │   ├── SinglePostPage.tsx             # single_post.html → React
│   │   ├── CaseStudiesPage.tsx            # case_studies.html → React
│   │   ├── TeamPage.tsx                   # team.html → React
│   │   ├── PartnershipPage.tsx            # partnership.html → React
│   │   ├── PricingPage.tsx                # pricing.html → React
│   │   ├── FaqPage.tsx                    # faq.html → React
│   │   ├── TestimonialsPage.tsx           # testimonial.html → React
│   │   ├── ContactPage.tsx                # contact.html → React
│   │   └── NotFoundPage.tsx               # 404_page.html → React
│   ├── utils/
│   │   └── templateScripts.ts             # jQuery script initialization
│   ├── App.tsx                            # Route configuration
│   └── main.tsx                           # React entry point
│
├── index.html                             # Vite entry (loads template CSS/JS)
├── docs/                                  # Project documentation
└── public/                                # Static assets
```

### Technology Stack

**Frontend Framework:**
- React 18 with TypeScript
- Vite for build tooling
- React Router v6 for client-side routing

**Styling (Original Template):**
- Bootstrap 5.x (Grid, utilities, components)
- Custom CSS from template (style.css)
- Font Awesome icons
- Plus Jakarta Sans font family
- Original template animations and transitions

**JavaScript Dependencies (Template):**
- jQuery 3.x (for template functionality)
- Bootstrap JS bundle
- Swiper.js (for sliders/carousels)
- YouTube IFrame API (for video backgrounds)

### Routing Structure

All routes use React Router's client-side navigation:

| Route | Component | Original HTML |
|-------|-----------|---------------|
| `/` | HomePage | index.html |
| `/about` | AboutPage | about.html |
| `/services` | ServicesPage | service.html |
| `/services/:slug` | SingleServicePage | single_services.html |
| `/blog` | BlogPage | blog.html |
| `/blog/:slug` | SinglePostPage | single_post.html |
| `/case-studies` | CaseStudiesPage | case_studies.html |
| `/team` | TeamPage | team.html |
| `/partnership` | PartnershipPage | partnership.html |
| `/pricing` | PricingPage | pricing.html |
| `/faq` | FaqPage | faq.html |
| `/testimonials` | TestimonialsPage | testimonial.html |
| `/contact` | ContactPage | contact.html |
| `/*` | NotFoundPage | 404_page.html |

### Design System Preservation

**Theme:**
- Default: Light mode (as per original template)
- Dark mode: Available via theme switcher (functionality preserved)
- Color variables: Using original CSS custom properties
- Spacing: Bootstrap spacing utilities + custom classes

**Typography:**
- Font family: Plus Jakarta Sans (from template)
- Heading hierarchy: Preserved from original
- Text sizes: Using template's CSS classes

**Components:**
- All Bootstrap components maintained
- Custom card styles preserved
- Button variants from template
- Form styling unchanged
- Animation classes intact

### Asset Management

**Images:**
- Path: `/marko-digital-marketing-agency-html/image/`
- All original images accessible via public serving
- Logo variants: Light and dark mode versions

**Fonts:**
- Webfonts served from: `/marko-digital-marketing-agency-html/webfonts/`
- Font Awesome icons loaded via CSS

**CSS:**
- Main stylesheet: `/marko-digital-marketing-agency-html/css/style.css`
- Vendor CSS: Bootstrap, animations, Swiper
- All CSS loaded in index.html

**JavaScript:**
- jQuery and Bootstrap loaded globally
- Template scripts initialized in MainLayout
- Video player, sliders, animations functional

### Key Features Implemented

1. **Navigation:**
   - Responsive navbar with mobile toggle
   - Dropdown menus for Services, Pages, Archive
   - Active route highlighting
   - Theme switcher (light/dark mode)

2. **Animations:**
   - Intersection Observer for scroll animations
   - Counter animations on visibility
   - Fade/slide transitions preserved
   - data-animate attributes functional

3. **Interactive Elements:**
   - YouTube video background (home page)
   - Video modal player
   - Swiper partner logo carousel
   - Form layouts (no backend yet)

4. **Responsive Design:**
   - Bootstrap grid system
   - Mobile-first approach
   - Breakpoint-based layouts
   - Touch-friendly interactions

### Phase 1A Constraints (Followed)

✅ **No backend functionality**
- Forms have UI only (no submission)
- No database connections
- No authentication system
- No API integrations

✅ **Original design preserved**
- No new colors or gradients
- No custom UI library (Tailwind, shadcn, etc.)
- Bootstrap + original CSS only
- Font Awesome icons only

✅ **Content unchanged**
- All text from original template
- Image placeholders maintained
- Lorem ipsum content kept
- No Devmart-specific content yet

### Build and Deployment

**Development:**
```bash
npm install
npm run dev
```

**Production Build:**
```bash
npm run build
# Output: dist/ folder ready for static hosting
```

**Target Hosting:**
- Hostinger (static site hosting)
- All assets bundled and optimized
- No server-side rendering required

### Next Phases (NOT IMPLEMENTED YET)

**Phase 1B:** Content Swap
- Replace Marko branding with Devmart
- Update copy, images, contact info
- Localize for Suriname market

**Phase 2:** Backend Integration
- Supabase/PostgreSQL database
- User authentication
- CMS for content management
- Form submission handling

**Phase 3:** Advanced Features
- Blog with dynamic content
- Case studies portfolio
- Team member profiles
- Client testimonials system

### Verification Checklist

✅ All pages render correctly
✅ Routing works without page reloads
✅ Header/footer appear on all pages
✅ Theme switcher functional
✅ Animations trigger on scroll
✅ Responsive on mobile/tablet/desktop
✅ No build errors
✅ Original styling preserved
✅ Images load correctly
✅ Bootstrap components work

### Notes for Future Development

- Original HTML templates remain in `marko-digital-marketing-agency-html/` folder
- All template assets accessible via public path
- jQuery integration maintained for template functionality
- React components use className (not class) for JSX compatibility
- Links converted to React Router Link components
- No state management library needed yet (add Redux/Zustand in Phase 2 if needed)
