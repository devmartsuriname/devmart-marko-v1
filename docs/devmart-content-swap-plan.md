# Devmart Content Swap Plan
**Date:** 2025-11-28  
**Scope:** HomePage and AboutPage content fields  
**Purpose:** Character-limit-preserving content swap preparation

---

## Overview

This document provides a human-readable summary of all text content in `HomePage.tsx` and `AboutPage.tsx` that will be swapped for Devmart-specific content in Phase 2.

**Critical Constraint:** All replacement text must respect the `maxChars` limit (equal to current character count) to preserve layout integrity.

**JSON Reference:** See `docs/devmart-content-swap-plan.json` for full machine-readable data.

---

## HomePage Content Fields

### Hero Banner Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `hero.title` | h1 | Build Powerful Digital Solutions That Drive Results | 56 | 56 |
| `hero.videoCaption` | paragraph | See how organizations across Suriname achieve digital transformation with Devmart's proven solutions. | 113 | 113 |
| `hero.description` | paragraph | Devmart empowers businesses and government with modern web apps, AI-powered tools, and enterprise-grade systems built in Suriname. | 140 | 140 |
| `hero.ctaButton` | button | Book a Strategy Call | 20 | 20 |
| `hero.reviewsLabel` | text | 2.7k Positive | 13 | 13 |
| `hero.reviewsText` | text | Reviews | 7 | 7 |

---

### Expertise Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `expertise.subHeading` | text | Our Expertise | 13 | 13 |
| `expertise.title` | h2 | Reliable Digital Products, Measurable Impact | 48 | 48 |
| `expertise.description` | paragraph | At Devmart, we specialize in building robust web applications, government portals, and AI-powered systems. Our expertise ensures your digital presence is modern, secure, and scalable. | 190 | 190 |
| `expertise.cardTitle` | h4 | Ready to Elevate Your Digital Presence? | 42 | 42 |
| `expertise.cardDescription` | paragraph | Let's create a custom strategy that fits your business goals. | 61 | 61 |
| `expertise.cardLink` | link | Get Free Consultation | 21 | 21 |
| `expertise.listTitle` | h5 | What We Do Best | 15 | 15 |
| `expertise.list1` | link | Web Development (React/Supabase) | 33 | 33 |
| `expertise.list2` | link | Government & Enterprise Portals | 31 | 31 |
| `expertise.list3` | link | Custom SaaS Platforms | 21 | 21 |
| `expertise.list4` | link | AI-Assisted Automation | 22 | 22 |
| `expertise.list5` | link | Ongoing Support & Maintenance | 29 | 29 |
| `expertise.list6` | link | UX/UI Design | 12 | 12 |
| `expertise.counterLabel` | h6 | Years Building Digital Solutions in Suriname | 44 | 44 |
| `expertise.counterDescription` | paragraph | Over two decades of building reliable web applications, government portals, and enterprise systems that transform how organizations operate in Suriname and beyond. | 172 | 172 |

---

### Partner Slider Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `partner.title` | h3 | Trusted by Organizations Across Suriname | 42 | 42 |
| `partner.description` | paragraph | From government ministries to private enterprises, leading organizations rely on Devmart to deliver secure, scalable digital solutions that drive efficiency and modernize their operations. | 189 | 189 |

---

### Why Choose Us Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `whyChooseUs.subHeading` | text | Why Choose Devmart | 18 | 18 |
| `whyChooseUs.title` | h2 | Your Digital Future is Our Priority | 37 | 37 |
| `whyChooseUs.description` | paragraph | In the fast-paced digital world, choosing the right technology partner makes all the difference. At Devmart, we don't just build applications—we craft solutions that deliver measurable impact. | 195 | 195 |
| `whyChooseUs.card1Title` | h4 | Reliable Long-Term Partnerships | 31 | 31 |
| `whyChooseUs.card1Description` | paragraph | We build lasting relationships with our clients, providing continuous support and maintenance to ensure long-term success for your digital products. | 153 | 153 |
| `whyChooseUs.card2Title` | h4 | Government-Grade Quality | 24 | 24 |
| `whyChooseUs.card2Description` | paragraph | Our development practices meet the highest standards for security, documentation, and compliance, trusted by government and enterprise clients. | 146 | 146 |
| `whyChooseUs.card3Title` | h4 | AI-Powered Efficiency | 21 | 21 |
| `whyChooseUs.card3Description` | paragraph | We leverage artificial intelligence and modern automation tools to deliver projects faster without compromising quality or user experience. | 145 | 145 |
| `whyChooseUs.ctaCardTitle` | h5 | Partner with Devmart and build your digital future. | 53 | 53 |
| `whyChooseUs.ctaCardLink` | link | Let's Discuss Your Project | 26 | 26 |

---

### Guide CTA Banner

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `guide.videoCaption` | paragraph | See How We Help Organizations Grow | 35 | 35 |
| `guide.title` | h3 | Transform Your Organization with Devmart | 41 | 41 |
| `guide.description` | paragraph | Upgrade your digital infrastructure with modern web applications, secure portals, and AI-powered tools. Let's build something powerful together. | 148 | 148 |

---

### Services Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `services.subHeading` | text | Our Core Services | 17 | 17 |
| `services.title` | h2 | Digital Solutions That Drive Real Results | 42 | 42 |
| `services.card1Title` | h4 | Custom Web Applications | 23 | 23 |
| `services.card1Description` | paragraph | Modern web apps built with React and Supabase for scalability, real-time features, and seamless user experiences. | 115 | 115 |
| `services.card2Title` | h4 | Government Portals | 18 | 18 |
| `services.card2Description` | paragraph | Secure citizen-facing portals for public services with authentication, document management, and compliance built-in. | 118 | 118 |
| `services.card3Title` | h4 | Enterprise Platforms | 20 | 20 |
| `services.card3Description` | paragraph | Internal systems for businesses to manage operations, inventory, HR, CRM, and workflows efficiently and securely. | 115 | 115 |
| `services.card4Title` | h4 | AI & Automation | 15 | 15 |
| `services.card4Description` | paragraph | Intelligent tools using AI to automate workflows, analyze data, and optimize business processes for faster decisions. | 120 | 120 |
| `services.card5Title` | h4 | Support & Maintenance | 21 | 21 |
| `services.card5Description` | paragraph | Continuous updates, bug fixes, security patches, and feature enhancements to keep your systems running smoothly. | 115 | 115 |
| `services.card6Title` | h4 | UX/UI Design | 12 | 12 |
| `services.card6Description` | paragraph | User-centered design focused on accessibility, mobile responsiveness, and intuitive interfaces for all stakeholders. | 118 | 118 |

---

### Case Studies Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `caseStudies.subHeading` | text | Case Studies | 12 | 12 |
| `caseStudies.title` | h2 | See How We Help Businesses Thrive | 34 | 34 |
| `caseStudies.description` | paragraph | We don't just talk about results—we deliver them. Here are some of our most impactful case studies showcasing how our digital solutions drive success. | 151 | 151 |
| `caseStudies.linkText` | link | More Case Studies | 17 | 17 |
| `caseStudies.case1Title` | h4 | Government Portal Implementation | 32 | 32 |
| `caseStudies.case1Description` | paragraph | 10x faster citizen services & 95% reduction in manual processing for government ministry applications. | 108 | 108 |
| `caseStudies.case2Title` | h4 | Enterprise Resource Management | 30 | 30 |
| `caseStudies.case2Description` | paragraph | 150% increase in operational efficiency & 70% reduction in administrative overhead costs. | 95 | 95 |
| `caseStudies.case3Title` | h4 | Custom SaaS Platform Launch | 27 | 27 |
| `caseStudies.case3Description` | paragraph | 3x increase in user adoption & 2x revenue growth in 6 months through modern web platform. | 96 | 96 |
| `caseStudies.case4Title` | h4 | AI-Powered Process Automation | 29 | 29 |
| `caseStudies.case4Description` | paragraph | 200% increase in data processing speed & 60% reduction in manual errors through AI implementation. | 104 | 104 |

---

### Testimonials Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `testimonials.subHeading` | text | What Our Client Says | 20 | 20 |
| `testimonials.title` | h2 | Hear from Our Satisfied Clients, Real Success Stories | 54 | 54 |
| `testimonials.description` | paragraph | Discover how businesses like yours achieved outstanding growth with Devmart's expert web development solutions. | 115 | 115 |
| `testimonials.reviewsLabel` | text | 2.7k Positive | 13 | 13 |
| `testimonials.reviewsText` | text | Reviews | 7 | 7 |

---

### Digital Process Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `digitalProcess.subHeading` | text | How it Work | 11 | 11 |
| `digitalProcess.title` | h2 | Simple Steps to Digital Success | 32 | 32 |
| `digitalProcess.description` | paragraph | Our streamlined process ensures your digital growth is seamless and effective. From discovery to deployment, we're with you every step of the way. | 147 | 147 |
| `digitalProcess.linkText` | link | Get Started Now | 15 | 15 |
| `digitalProcess.step1Title` | h5 | Discovery & Consult | 19 | 19 |
| `digitalProcess.step1Description` | paragraph | We analyze your needs, goals, and existing systems to design the perfect technical solution tailored to you. | 111 | 111 |
| `digitalProcess.step2Title` | h5 | Strategy & Planning | 19 | 19 |
| `digitalProcess.step2Description` | paragraph | Detailed roadmap with milestones, tech stack, UX mockups, and clear timelines for delivery and deployment. | 109 | 109 |
| `digitalProcess.step3Title` | h5 | Execution & Optimize | 20 | 20 |
| `digitalProcess.step3Description` | paragraph | Agile development with regular check-ins, testing, and iterations to ensure quality and meet requirements. | 108 | 108 |
| `digitalProcess.step4Title` | h5 | Launch & Support | 16 | 16 |
| `digitalProcess.step4Description` | paragraph | Smooth deployment with user training, documentation, and ongoing maintenance to keep your system running. | 108 | 108 |

---

### Pricing Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `pricing.subHeading` | text | Our Core Services | 17 | 17 |
| `pricing.title` | h2 | Flexible Pricing Plans for Every Business | 42 | 42 |
| `pricing.ctaCardTitle` | h3 | Let's Find the Right Strategy for You! | 39 | 39 |
| `pricing.ctaCardLink` | link | Book a Free Consultation | 24 | 24 |
| `pricing.plan1Title` | h4 | Starter | 7 | 7 |
| `pricing.plan1Description` | paragraph | Perfect for startups & small businesses | 39 | 39 |
| `pricing.plan1Price` | text | $99 | 3 | 3 |
| `pricing.plan2Title` | h4 | Enterprise | 10 | 10 |
| `pricing.plan2Description` | paragraph | Full scale solutions for maximum impact | 39 | 39 |
| `pricing.plan2Price` | text | $399 | 4 | 4 |
| `pricing.plan3Title` | h4 | Growth | 6 | 6 |
| `pricing.plan3Description` | paragraph | Best for growing businesses ready | 33 | 33 |
| `pricing.plan3Price` | text | $299 | 4 | 4 |

---

### Newsletter Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `newsletter.title` | h2 | Stay Updated with Devmart Insights | 35 | 35 |
| `newsletter.description` | paragraph | Subscribe to get the latest news on tech trends, development tips, and product updates from our team. | 104 | 104 |
| `newsletter.placeholder` | input | Enter your email address | 24 | 24 |
| `newsletter.buttonText` | button | Subscribe Now | 13 | 13 |

---

### Blog Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `blog.subHeading` | text | Insights & Trends | 17 | 17 |
| `blog.title` | h2 | Latest Tech Insights & Development Tips | 40 | 40 |
| `blog.description` | paragraph | Stay ahead with articles on web development, AI tools, government tech, and Suriname's digital transformation. | 112 | 112 |
| `blog.linkText` | link | View All Articles | 17 | 17 |

---

## AboutPage Content Fields

### Banner Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `banner.title` | h2 | About Devmart | 13 | 13 |

---

### About Intro Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `aboutIntro.subHeading` | text | About Us | 8 | 8 |
| `aboutIntro.title` | h2 | Who We Are & What Drives Us | 28 | 28 |
| `aboutIntro.description1` | paragraph | At Devmart, we build digital products that transform how organizations operate. Based in Suriname, we serve government, enterprise, and ambitious businesses with modern web applications, portals, and AI-powered tools. | 223 | 223 |
| `aboutIntro.description2` | paragraph | Get to know the passionate team behind the solutions, the values that guide us, and the mission that fuels our growth. | 119 | 119 |
| `aboutIntro.counterLabel` | h6 | Years Building Digital Solutions in Suriname | 44 | 44 |
| `aboutIntro.list1` | link | Government Portals | 18 | 18 |
| `aboutIntro.list2` | link | Enterprise Systems | 18 | 18 |
| `aboutIntro.list3` | link | AI Automation | 13 | 13 |
| `aboutIntro.list4` | link | Web Development | 15 | 15 |
| `aboutIntro.list5` | link | UX/UI Design | 12 | 12 |
| `aboutIntro.list6` | link | Support & Maintenance | 21 | 21 |

---

### Partner Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `partner.title` | h3 | Trusted by Organizations Across Suriname | 42 | 42 |
| `partner.description` | paragraph | From government ministries to private enterprises, leading organizations rely on Devmart to deliver secure, scalable digital solutions that drive efficiency and modernize their operations. | 189 | 189 |

---

### Core Values Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `coreValues.subHeading` | text | Our Core Values | 15 | 15 |
| `coreValues.title` | h2 | The Principles That Define Us | 30 | 30 |
| `coreValues.description` | paragraph | In the fast-paced digital world, choosing the right technology partner makes all the difference. At Devmart, we don't just write code—we build reliable systems that deliver measurable impact for your organization. | 217 | 217 |
| `coreValues.card1Title` | h4 | Reliability & Trust | 19 | 19 |
| `coreValues.card1Description` | paragraph | We build lasting partnerships with our clients, providing dependable solutions and continuous support for long-term success. | 128 | 128 |
| `coreValues.card2Title` | h4 | Partnership Approach | 20 | 20 |
| `coreValues.card2Description` | paragraph | We work closely with your team to ensure solutions align with your goals and organizational culture. | 103 | 103 |
| `coreValues.card3Title` | h4 | Quality & Documentation | 23 | 23 |
| `coreValues.card3Description` | paragraph | Government-grade quality standards with comprehensive documentation and compliance for all projects. | 103 | 103 |
| `coreValues.ctaCardTitle` | h5 | Partner with Devmart and build your digital future. | 53 | 53 |
| `coreValues.ctaCardLink` | link | Let's Discuss Your Project | 26 | 26 |

---

### Guide Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `guide.videoCaption` | paragraph | See How We Help Organizations Grow | 35 | 35 |
| `guide.title` | h3 | Transform Your Organization with Devmart | 41 | 41 |
| `guide.description` | paragraph | Upgrade your digital infrastructure with modern web applications, secure portals, and AI-powered tools. Let's build something powerful together. | 148 | 148 |

---

### Team Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `team.subHeading` | text | Our Team | 8 | 8 |
| `team.title` | h2 | Meet the Minds Behind Your Digital Success | 43 | 43 |

---

### Digital Process Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `digitalProcess.subHeading` | text | How it Work | 11 | 11 |
| `digitalProcess.title` | h2 | Simple Steps to Digital Success | 32 | 32 |
| `digitalProcess.description` | paragraph | Our streamlined process ensures your digital growth is seamless and effective. From discovery to deployment, we're with you every step of the way. | 147 | 147 |
| `digitalProcess.linkText` | link | Get Started Now | 15 | 15 |

---

### Testimonials Section

| Key | Type | Current Text (truncated) | Char Count | Max Chars |
|-----|------|-------------------------|------------|-----------|
| `testimonials.subHeading` | text | What Our Client Says | 20 | 20 |
| `testimonials.title` | h2 | Hear from Our Satisfied Clients, Real Success Stories | 54 | 54 |
| `testimonials.description` | paragraph | Discover how businesses like yours achieved outstanding growth with Devmart's expert web development solutions. | 115 | 115 |

---

## Summary Statistics

### HomePage

- **Total Sections:** 12
- **Total Content Entries:** 114
- **Shortest Entry:** 3 characters (`$99`)
- **Longest Entry:** 223 characters (aboutIntro.description1)
- **Average Entry Length:** ~60 characters

### AboutPage

- **Total Sections:** 8
- **Total Content Entries:** 44
- **Shortest Entry:** 8 characters (`About Us`)
- **Longest Entry:** 223 characters (aboutIntro.description1)
- **Average Entry Length:** ~58 characters

---

## Next Steps

1. **Review character limits** for each field
2. **Write Devmart-specific content** respecting `maxChars` constraints
3. **Test content replacements** in development environment
4. **Verify responsive behavior** at all breakpoints (1440px, 1024px, 768px, 375px)
5. **Confirm visual integrity** after content swap

---

## Constraints for Content Writers

- ✅ **MUST respect `maxChars` limits** (no exceptions)
- ✅ **MUST maintain brand voice and tone** (professional, tech-focused)
- ✅ **MUST use Suriname context** where relevant
- ✅ **MUST avoid generic marketing copy** (be specific about Devmart's tech stack)
- ✅ **MUST avoid placeholder text** (every field should be production-ready)
