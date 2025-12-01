-- Seed blog_posts table with existing frontend blog content
INSERT INTO blog_posts (title, slug, category, excerpt, content, featured_image, status, published_at)
VALUES 
  (
    'How AI is Transforming Government Services',
    'ai-government-services',
    'AI & Government',
    'Exploring how artificial intelligence is revolutionizing public sector operations, from automated document processing to predictive analytics for policy planning.',
    'Artificial intelligence is fundamentally changing how governments operate and deliver services to citizens. From automated document processing to predictive analytics for policy planning, AI technologies are enabling more efficient, transparent, and responsive public sector organizations.

Key areas of transformation include:

1. **Automated Document Processing** - AI-powered systems can process applications, permits, and other documents in a fraction of the time required by manual review.

2. **Predictive Analytics** - Machine learning models help government agencies anticipate needs, optimize resource allocation, and make data-driven policy decisions.

3. **Citizen Services** - Chatbots and virtual assistants provide 24/7 support for common inquiries, freeing staff for complex cases.

4. **Fraud Detection** - AI algorithms identify patterns and anomalies that may indicate fraudulent activity in benefits programs.

At Devmart, we specialize in implementing these AI solutions for government agencies in Suriname, helping modernize public services while maintaining security and compliance standards.',
    '/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg',
    'published',
    '2025-04-14'
  ),
  (
    'Building Secure Portals for Enterprise',
    'secure-enterprise-portals',
    'Security',
    'Best practices for developing enterprise-grade portals with robust authentication, encryption, and compliance standards for sensitive data handling.',
    'Enterprise portals handle sensitive data and critical business processes, making security a top priority in their development. This article explores the essential security measures every enterprise portal should implement.

## Authentication & Access Control

- **Multi-Factor Authentication (MFA)** - Require multiple verification methods for user login
- **Role-Based Access Control (RBAC)** - Grant permissions based on user roles and responsibilities
- **Session Management** - Implement secure session handling with appropriate timeouts

## Data Protection

- **Encryption at Rest** - All stored data should be encrypted using industry-standard algorithms
- **Encryption in Transit** - Use TLS 1.3 for all data transmission
- **Data Masking** - Protect sensitive fields in logs and non-production environments

## Compliance Standards

Depending on your industry, portals may need to comply with:
- ISO 27001 for information security management
- GDPR for data privacy (if serving EU users)
- Local regulations specific to your country

Devmart has extensive experience building secure portals for government and enterprise clients in Suriname, ensuring both robust security and excellent user experience.',
    '/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg',
    'published',
    '2025-04-14'
  ),
  (
    'Building Scalable Web Applications',
    'building-scalable-web-applications',
    'Web Development',
    'Learn the architectural patterns and best practices for building web applications that can scale to millions of users.',
    'Scalability is one of the most important considerations when building modern web applications. A well-architected application can handle growth gracefully, while a poorly designed one will struggle under load.

## Key Principles of Scalable Architecture

### 1. Horizontal Scaling
Design your application to scale out by adding more instances rather than scaling up with bigger servers.

### 2. Stateless Design
Keep your application servers stateless so any instance can handle any request.

### 3. Database Optimization
- Use appropriate indexing strategies
- Implement connection pooling
- Consider read replicas for heavy read workloads

### 4. Caching Strategies
- Application-level caching with Redis or Memcached
- CDN for static assets
- Database query caching

### 5. Asynchronous Processing
Move long-running tasks to background job queues to keep your application responsive.

## Technology Stack Recommendations

At Devmart, we recommend:
- **Frontend**: React with TypeScript for type safety and maintainability
- **Backend**: Node.js or Supabase Edge Functions for serverless scalability
- **Database**: PostgreSQL with Supabase for managed infrastructure
- **Caching**: Redis for session storage and caching

These technologies provide an excellent balance of developer experience and production scalability.',
    '/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg',
    'published',
    '2025-01-15'
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  status = EXCLUDED.status,
  published_at = EXCLUDED.published_at,
  updated_at = NOW();