# Backend Documentation - Devmart Marko v1

## Current Status: Phase 1A (Frontend Only)

**Backend Implementation:** NOT STARTED

This document outlines the backend architecture planned for future phases. Currently, the application is a static frontend with no backend functionality.

---

## Phase 1A: No Backend (CURRENT)

### What's NOT Implemented:

- ❌ Database connections
- ❌ User authentication
- ❌ API endpoints
- ❌ Form submission handlers
- ❌ Content management system
- ❌ File uploads
- ❌ Email services
- ❌ Analytics tracking

### Current Form Behavior:

**Contact Form** (`/contact`):
- UI is fully functional
- Validation: Client-side only (HTML5 required attributes)
- Submission: No backend handler (form doesn't actually submit)
- Success/error messages: Static UI elements only

**Newsletter Form** (Footer):
- UI present but non-functional
- No email collection backend

### Static Data:

All content is hardcoded in React components:
- Blog posts
- Case studies
- Team members
- Testimonials
- Service descriptions
- Pricing plans

---

## Phase 2: Backend Implementation Plan (FUTURE)

### Proposed Technology Stack:

**Backend Service:** Supabase (or Lovable Cloud)
- PostgreSQL database
- Authentication (email/password, OAuth)
- RESTful API auto-generated
- Row Level Security (RLS)
- Real-time subscriptions
- File storage

**Alternative Considerations:**
- Firebase (if Supabase unavailable)
- Custom Node.js/Express API
- Prisma ORM for database

### Database Schema (Planned):

**Users Table:**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'client', -- 'admin', 'client'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Contact Submissions:**
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- 'new', 'read', 'responded'
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Blog Posts:**
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES users(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Case Studies:**
```sql
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[], -- ['Social', 'Influencer', 'Retargeting']
  results TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Services:**
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Team Members:**
```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  social_links JSONB, -- {linkedin: '', twitter: ''}
  display_order INTEGER,
  active BOOLEAN DEFAULT true
);
```

**Testimonials:**
```sql
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  company TEXT,
  position TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  photo_url TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Newsletter Subscribers:**
```sql
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP
);
```

### API Endpoints (Planned):

**Public Endpoints:**
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/blog` - List published blog posts
- `GET /api/blog/:slug` - Get single blog post
- `GET /api/services` - List services
- `GET /api/case-studies` - List case studies
- `GET /api/team` - List team members
- `GET /api/testimonials` - List approved testimonials

**Admin Endpoints (Authenticated):**
- `GET /api/admin/contacts` - List contact submissions
- `PATCH /api/admin/contacts/:id` - Update contact status
- `POST /api/admin/blog` - Create blog post
- `PUT /api/admin/blog/:id` - Update blog post
- `DELETE /api/admin/blog/:id` - Delete blog post
- `POST /api/admin/case-studies` - Create case study
- `PUT /api/admin/testimonials/:id/approve` - Approve testimonial

### Authentication Flow (Planned):

**Admin Users:**
1. Email/password authentication via Supabase Auth
2. Protected routes for admin panel
3. Role-based access control (RBAC)
4. Session management

**Client Area (Optional):**
- Client portal for project tracking
- OAuth providers (Google, LinkedIn)
- Password reset flow
- Email verification

### File Storage (Planned):

**Supabase Storage Buckets:**
- `blog-images/` - Blog post images
- `case-studies/` - Case study assets
- `team-photos/` - Team member photos
- `uploads/` - General file uploads

**Upload Configuration:**
- Max file size: 5MB for images
- Allowed types: JPG, PNG, WebP
- Image optimization on upload
- CDN delivery

### Email Services (Planned):

**Transactional Emails:**
- Contact form notification to admin
- Contact form confirmation to user
- Newsletter welcome email
- Password reset emails

**Email Provider Options:**
- SendGrid
- Mailgun
- Resend
- AWS SES

### Environment Variables (Future):

```env
# Supabase
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx

# Email Service
EMAIL_SERVICE_API_KEY=xxx
ADMIN_EMAIL=admin@devmart.sr

# Optional Integrations
GOOGLE_ANALYTICS_ID=xxx
RECAPTCHA_SITE_KEY=xxx
```

### Security Considerations (Future):

**Row Level Security (RLS):**
- Public read access to published content
- Admin-only write access
- User-specific data isolation

**Form Protection:**
- Rate limiting on submissions
- CAPTCHA/reCAPTCHA integration
- Input sanitization
- XSS protection

**Authentication:**
- JWT tokens with expiration
- Secure password hashing (bcrypt)
- HTTPS-only cookies
- CSRF protection

### CMS Integration (Phase 3 - Future):

**Admin Dashboard:**
- Content management interface
- Blog post editor (WYSIWYG)
- Media library
- Analytics dashboard
- Form submissions inbox

**Possible Solutions:**
- Custom React admin panel
- Payload CMS
- Strapi
- Supabase Studio

---

## Migration Path (When Backend is Added):

1. **Phase 2A: Database Setup**
   - Create Supabase project
   - Run schema migrations
   - Seed initial data (services, team)

2. **Phase 2B: API Integration**
   - Add Supabase client to React app
   - Create data fetching hooks
   - Replace static data with API calls
   - Add loading states

3. **Phase 2C: Forms**
   - Implement contact form submission
   - Add newsletter subscription
   - Email notifications

4. **Phase 2D: Authentication**
   - Admin login page
   - Protected admin routes
   - Session management

5. **Phase 3: CMS**
   - Admin dashboard UI
   - Content CRUD operations
   - File upload handling
   - Analytics integration

---

## Notes:

- All backend functionality will be added in **Phase 2** (not Phase 1A)
- Current focus: Frontend only with 1:1 visual parity
- Database schema above is **preliminary** and subject to change
- Technology choices will be finalized based on client requirements in Phase 2
