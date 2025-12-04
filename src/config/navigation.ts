// Centralized navigation configuration for Devmart Marko

export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

// Main header navigation
export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    hasDropdown: true,
    children: [
      { label: "All Services", href: "/services" },
      { label: "Custom Web Applications", href: "/services/custom-web-applications" },
      { label: "Government Portals", href: "/services/government-portals" },
      { label: "Enterprise Systems", href: "/services/enterprise-systems" },
      { label: "AI-Powered Tools", href: "/services/ai-powered-tools" },
      { label: "UX/UI Design", href: "/services/ux-ui-design" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ]
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact", isCTA: true },
];

// Footer link groups
export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Custom Web Applications", href: "/services/custom-web-applications" },
      { label: "Government Portals", href: "/services/government-portals" },
      { label: "Enterprise Systems", href: "/services/enterprise-systems" },
      { label: "AI-Powered Tools", href: "/services/ai-powered-tools" },
      { label: "UX/UI Design", href: "/services/ux-ui-design" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Partnership", href: "/partnership" },
      { label: "Pricing Plans", href: "/pricing" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ]
  }
];

// Quick access routes for CTAs throughout the site
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  caseStudies: "/case-studies",
  pricing: "/pricing",
  blog: "/blog",
  contact: "/contact",
  team: "/team",
  testimonials: "/testimonials",
  faq: "/faq",
  partnership: "/partnership",
  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
  }
} as const;
