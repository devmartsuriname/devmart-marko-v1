import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPublishedCaseStudies, type CaseStudy } from "@/integrations/supabase/queries/caseStudies";
import { getPublishedBlogPosts, type BlogPost } from "@/integrations/supabase/queries/blogPosts";
import { getPublishedPricingPlans, type PricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { getPublishedServices, type Service } from "@/integrations/supabase/queries/services";
import { getPublishedTestimonials, type Testimonial } from "@/integrations/supabase/queries/testimonials";
import { getActivePartnerLogos, type PartnerLogo } from "@/integrations/supabase/queries/partnerLogos";
import { subscribeToNewsletter } from "@/integrations/supabase/queries/newsletterSubscribers";
import { getActiveHomepageBlocks, type HomepageBlock } from "@/integrations/supabase/queries/homepageBlocks";
import { SEO } from "@/components/SEO";
import { canonical } from "@/utils/seo";

const HomePage = () => {
  const [homeCaseStudies, setHomeCaseStudies] = useState<CaseStudy[]>([]);
  const [homeBlogPosts, setHomeBlogPosts] = useState<BlogPost[]>([]);
  const [homePricingPlans, setHomePricingPlans] = useState<PricingPlan[]>([]);
  const [homeServices, setHomeServices] = useState<Service[]>([]);
  const [homeTestimonials, setHomeTestimonials] = useState<Testimonial[]>([]);
  const [homePartnerLogos, setHomePartnerLogos] = useState<PartnerLogo[]>([]);
  const [homepageBlocks, setHomepageBlocks] = useState<HomepageBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to find a homepage block by key
  const findBlock = (key: string) => homepageBlocks.find((b) => b.key === key);
  const heroBlock = findBlock("hero");
  const ctaBlock = findBlock("cta");

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error" | "duplicate">("idle");

  const validateEmail = (email: string) => {
    const trimmed = email.trim();
    if (trimmed.length < 5) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return false;
    return true;
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("idle");

    if (!validateEmail(newsletterEmail)) {
      setNewsletterStatus("error");
      return;
    }

    setIsNewsletterSubmitting(true);

    try {
      const { error } = await subscribeToNewsletter(newsletterEmail.trim());

      if (error) {
        if (error.code === "23505") {
          setNewsletterStatus("duplicate");
        } else {
          console.error("Newsletter subscription error:", error);
          setNewsletterStatus("error");
        }
      } else {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setNewsletterStatus("error");
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      setIsLoading(true);
      try {
        const [
          { data: caseStudiesData },
          { data: blogData },
          { data: pricingData },
          { data: servicesData },
          { data: testimonialsData },
          { data: partnerData },
          { data: blocksData },
        ] = await Promise.all([
          getPublishedCaseStudies(),
          getPublishedBlogPosts(),
          getPublishedPricingPlans(),
          getPublishedServices(),
          getPublishedTestimonials(),
          getActivePartnerLogos(),
          getActiveHomepageBlocks(),
        ]);
        
        setHomeCaseStudies((caseStudiesData || []).slice(0, 4));
        setHomeBlogPosts((blogData || []).slice(0, 3));
        setHomePricingPlans((pricingData || []).slice(0, 3));
        setHomeServices((servicesData || []).slice(0, 6));
        setHomeTestimonials(testimonialsData || []);
        setHomePartnerLogos(partnerData || []);
        setHomepageBlocks(blocksData || []);
      } catch (error) {
        console.error("Error fetching home data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <>
      <SEO
        title="Devmart Suriname | Web Development & Tech Solutions"
        description="Professional web applications, government portals, AI tools, and enterprise systems. Based in Paramaribo, Suriname."
        canonical={canonical("/")}
        type="website"
        keywords={["web development", "government portals", "enterprise systems", "AI tools", "Suriname", "Paramaribo"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Devmart Suriname",
          "url": canonical("/"),
          "description": "Professional web applications, government portals, AI tools, and enterprise systems",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jagernath Lachmon straat nr. 152",
            "addressLocality": "Paramaribo",
            "addressCountry": "SR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+597-854-1211",
            "contactType": "Customer Service",
            "email": "info@devmart.sr"
          }
        }}
      />
      {/* Section Banner */}
      <div className="section-banner">
        <div
          className="banner-video-container keep-dark animate-box animated animate__animated"
          data-animate="animate__fadeInUp"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="banner-video-bg"
            src="/videos/hero-background.mp4"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 1,
              borderRadius: "var(--global-border-radius)",
            }}
          />
          <div className="hero-container position-relative">
            <div className="d-flex flex-column gspace-2">
              <h1
                className="title-heading-banner animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                {heroBlock?.title || "Build Powerful Digital Solutions That Drive Results"}
              </h1>
              <div className="banner-heading">
                <div
                  className="banner-video-content order-xl-1 order-2 animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="d-flex flex-column flex-xl-row text-xl-start text-center align-items-center gspace-5">
                    <button
                      className="request-loader"
                      data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                    <p>
                      See how organizations across Suriname achieve digital transformation with Devmart's proven
                      solutions.
                    </p>
                  </div>
                </div>
                <div
                  className="banner-content order-xl-2 order-1 animate-box animated animate__animated"
                  data-animate="animate__fadeInRight"
                >
                  <p>
                    {heroBlock?.subtitle || "Devmart empowers businesses and government with modern web apps, AI-powered tools, and enterprise-grade systems built in Suriname."}
                  </p>
                  <div className="d-flex flex-md-row flex-column justify-content-center justify-content-xl-start align-self-center align-self-xl-start gspace-3">
                    <Link to={heroBlock?.button_url || "/about"} className="btn btn-accent">
                      <div className="btn-title">
                        <span>{heroBlock?.button_label || "Book a Call"}</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <div className="banner-reviewer">
                      <div className="d-flex flex-row align-items-center">
                        <img
                          src="/marko-digital-marketing-agency-html/image/Photo-1.jpg"
                          alt="Reviewer"
                          className="avatar"
                        />
                        <img
                          src="/marko-digital-marketing-agency-html/image/Photo-2.jpg"
                          alt="Reviewer"
                          className="avatar"
                        />
                        <img
                          src="/marko-digital-marketing-agency-html/image/Photo-3.jpg"
                          alt="Reviewer"
                          className="avatar"
                        />
                      </div>
                      <div className="detail">
                        <span>2.7k Positive</span>
                        <span>Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Expertise */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img">
                <img
                  src="/marko-digital-marketing-agency-html/image/working-job-career-casual-showing.jpg"
                  alt="Expertise Image"
                  className="img-fluid animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div
                        className="card card-expertise animate-box animated animate__animated"
                        data-animate="animate__fadeInDown"
                      >
                        <h4>Ready to Elevate Your Digital Presence?</h4>
                        <p>Let's create a custom strategy that fits your business goals.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link to="/contact">Get Free Consultation</Link>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <div className="sub-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Expertise</span>
              </div>
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Reliable Products, Measurable Impact
              </h2>
              <p>
                At Devmart, we specialize in building robust web applications, government portals, and AI-powered
                systems. Our expertise ensures your digital presence is modern, secure, and scalable.
              </p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We Do Best</h5>
                  <ul className="check-list">
                    <li>
                      <Link to="/services/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/services/government-portals">Enterprise Portals</Link>
                    </li>
                    <li>
                      <Link to="/services/custom-saas">Custom SaaS Platforms</Link>
                    </li>
                    <li>
                      <Link to="/services/ai-automation">AI-Assisted Automation</Link>
                    </li>
                    <li>
                      <Link to="/services/support">Ongoing Support & Maintenance</Link>
                    </li>
                    <li>
                      <Link to="/services/ux-ui-design">UX/UI Design</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="card card-expertise card-expertise-counter animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span className="counter" data-target="21">
                        0
                      </span>
                      <span className="counter-detail">+</span>
                    </div>
                    <h6>Years Building Digital Solutions in Suriname</h6>
                  </div>
                  <p>
                    Over two decades of building reliable web applications, and enterprise systems that transform how
                    organizations operate beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Modal Video */}
      <div className="section p-0">
        <div id="modal-overlay" className="modal-overlay">
          <span className="my-close">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <div className="my-modal">
            <iframe id="my-video-frame" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Section Partner */}
      {homePartnerLogos.length > 0 && (
        <div className="section-partner">
          <div className="hero-container">
            <div className="card card-partner animate-box animated animate__animated" data-animate="animate__fadeInRight">
              <div className="partner-spacer"></div>
              <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
                <div className="col">
                  <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                    <h3 className="title-heading">Trusted by Organizations Across Suriname</h3>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column ps-xl-3 ps-0">
                    <p>
                      From government ministries to private enterprises, leading organizations rely on Devmart to deliver
                      secure, scalable digital solutions that drive efficiency and modernize their operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiperPartner-layout">
                <div className="swiperPartner-overlay">
                  <div className="spacer"></div>
                </div>
                <div className="swiperPartner-container">
                  <div className="swiper swiperPartner">
                    <div className="swiper-wrapper">
                      {homePartnerLogos.map((partner) => (
                        <div key={partner.id} className="swiper-slide">
                          {partner.website_url ? (
                            <a href={partner.website_url} target="_blank" rel="noopener noreferrer">
                              <div className="partner-slide">
                                <img
                                  src={partner.logo_url}
                                  alt={partner.name}
                                  className="partner-logo img-fluid"
                                />
                              </div>
                            </a>
                          ) : (
                            <div className="partner-slide">
                              <img
                                src={partner.logo_url}
                                alt={partner.name}
                                className="partner-logo img-fluid"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Why Choose Us */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="chooseus-card-container">
              <div className="d-flex flex-column gspace-2">
                <div
                  className="card card-chooseus animate-box animated fast animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img
                          src="/marko-digital-marketing-agency-html/image/Icon-2.png"
                          alt="Why Choose Us Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Reliable Long-Term Partnerships</h4>
                    <p>
                      We build lasting relationships with our clients, providing continuous support and maintenance to
                      ensure long-term success for your digital products.
                    </p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-chooseus animate-box animated animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img
                          src="/marko-digital-marketing-agency-html/image/icon-1.png"
                          alt="Why Choose Us Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Government-Grade Quality</h4>
                    <p>
                      Our development practices meet the highest standards for security, documentation, and compliance,
                      trusted by government and enterprise clients.
                    </p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-chooseus animate-box animated slow animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img
                          src="/marko-digital-marketing-agency-html/image/Icon-3.png"
                          alt="Why Choose Us Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">AI-Powered Efficiency</h4>
                    <p>
                      We leverage artificial intelligence and modern automation tools to deliver projects faster without
                      compromising quality or user experience.
                    </p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chooseus-content-container">
              <div className="d-flex flex-column gspace-5">
                <div className="d-flex flex-column gspace-2">
                  <div
                    className="sub-heading animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Why Choose Devmart</span>
                  </div>
                  <h2
                    className="title-heading animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    Your Digital Future is Our Priority
                  </h2>
                  <p className="mb-0 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    In the fast-paced digital world, choosing the right technology partner makes all the difference. At
                    Devmart, we don't just build applications—we craft solutions that deliver measurable impact.
                  </p>
                </div>
                <div className="image-container">
                  <img
                    src="/marko-digital-marketing-agency-html/image/collaborative-process-of-multicultural-skilled-peo-5EHBQRG-1024x683.jpg"
                    alt="Why Choose Us Image"
                    className="chooseus-img"
                  />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <div
                          className="card card-chooseus-cta animate-box animated animate__animated"
                          data-animate="animate__fadeInUp"
                        >
                          <h5>Partner with Devmart and build your digital future.</h5>
                          <div className="link-wrapper">
                            <Link to="/contact">Let's Discuss Your Project</Link>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Guide */}
      <div className="section-guide">
        <div className="guide-banner">
          <div className="hero-container">
            <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="guide-video-container">
                <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>See How We Help Organizations Grow</p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">{ctaBlock?.title || "Transform Your Organization with Devmart"}</h3>
                <p>
                  {ctaBlock?.subtitle || "Upgrade your digital infrastructure with modern web applications, secure portals, and AI-powered tools. Let's build something powerful together."}
                </p>
                {ctaBlock?.button_url && (
                  <Link to={ctaBlock.button_url} className="btn btn-accent align-self-start">
                    <div className="btn-title">
                      <span>{ctaBlock.button_label || "Get Started"}</span>
                    </div>
                    <div className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Service */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div
                className="sub-heading align-self-center animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2
                className="title-heading heading-container heading-container-medium animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                Digital Solutions That Drive Real Results
              </h2>
            </div>
            <div className="card-service-wrapper">
              {isLoading ? (
                <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="col">
                      <div className="card card-service animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                        <div className="d-flex flex-column gspace-2">
                          <h4>Loading services...</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : homeServices.length === 0 ? (
                <div className="row row-cols-1">
                  <div className="col">
                    <div className="card card-service animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-column gspace-2">
                        <h4>No services available</h4>
                        <p>Check back soon for our service offerings.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                  {homeServices.map((service, idx) => {
                    const animationClass = idx % 3 === 0 ? 'slow' : idx % 3 === 2 ? 'fast' : '';
                    return (
                      <div key={service.id} className="col">
                        <div
                          className={`card card-service animate-box animated ${animationClass} animate__animated`}
                          data-animate="animate__fadeInLeft"
                        >
                          <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                            <div>
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <img
                                    src={service.icon || "/marko-digital-marketing-agency-html/image/Icon-7.png"}
                                    alt={`${service.name} Icon`}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="service-title">
                              <h4>{service.name}</h4>
                            </div>
                          </div>
                          <p>{service.short_description || service.description}</p>
                          <Link to={`/services/${service.slug}`} className="btn btn-accent">
                            <div className="btn-title">
                              <span>View Details</span>
                            </div>
                            <div className="icon-circle">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Case Studies */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col">
                <div
                  className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Portfolio</span>
                  </div>
                  <h2 className="title-heading">See How We Help Organizations Thrive</h2>
                  <p>
                    We don't just talk about results—we deliver them. Here are some of our most impactful projects
                    showcasing how our digital solutions drive success for government, enterprise, and businesses across
                    Suriname.
                  </p>
                  <div className="link-wrapper">
                    <Link to="/case-studies">More Case Studies</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gspace-2">
              {isLoading ? (
                <>
                  <div className="d-flex flex-column flex-xl-row gspace-2">
                    <div className="card case-studies-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="d-flex flex-column gspace-2">
                        <h4>Loading case studies...</h4>
                      </div>
                    </div>
                    <div className="card case-studies-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="d-flex flex-column gspace-2">
                        <h4>Loading...</h4>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-xl-row gspace-2">
                    <div className="card case-studies-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="d-flex flex-column gspace-2">
                        <h4>Loading...</h4>
                      </div>
                    </div>
                    <div className="card case-studies-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="d-flex flex-column gspace-2">
                        <h4>Loading...</h4>
                      </div>
                    </div>
                  </div>
                </>
              ) : homeCaseStudies.length === 0 ? (
                <div className="d-flex flex-column gspace-2">
                  <div className="card case-studies-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="d-flex flex-column gspace-2">
                      <h4>No case studies available</h4>
                      <p>Check back soon for our latest projects and success stories.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="d-flex flex-column flex-xl-row gspace-2">
                    {homeCaseStudies.slice(0, 2).map((cs, idx) => (
                      <div
                        key={cs.id}
                        className={`card case-studies-content ${idx === 0 ? 'local-business animate-box animated fast' : 'saas-leads animate-box animated'} animate__animated`}
                        data-animate="animate__fadeInUp"
                      >
                        {idx === 0 && cs.tags && cs.tags.length > 0 && (
                          <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                            {cs.tags.slice(0, 7).map((tag, i) => (
                              <div key={i} className="cs-component">
                                <a href="#">{tag}</a>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="d-flex flex-column gspace-2">
                          <Link to={`/case-studies/${cs.slug}`} className="case-studies-title">
                            <h4>{cs.title}</h4>
                          </Link>
                          <p>{cs.description}</p>
                        </div>
                        {idx === 1 && cs.tags && cs.tags.length > 0 && (
                          <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                            {cs.tags.slice(0, 7).map((tag, i) => (
                              <div key={i} className="cs-component">
                                <a href="#">{tag}</a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {homeCaseStudies.length > 2 && (
                    <div className="d-flex flex-column flex-xl-row gspace-2">
                      {homeCaseStudies.slice(2, 4).map((cs, idx) => (
                        <div
                          key={cs.id}
                          className={`card case-studies-content ${idx === 0 ? 'ecommerce animate-box animated fast' : 'startup-branding animate-box animated'} animate__animated`}
                          data-animate="animate__fadeInUp"
                        >
                          {cs.tags && cs.tags.length > 0 && (
                            <div className={`case-studies-component ${idx === 0 ? 'small' : 'large'} align-self-start justify-content-start align-items-start`}>
                              {cs.tags.slice(0, 7).map((tag, i) => (
                                <div key={i} className="cs-component">
                                  <a href="#">{tag}</a>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="d-flex flex-column gspace-2">
                            <Link to={`/case-studies/${cs.slug}`} className="case-studies-title">
                              <h4>{cs.title}</h4>
                            </Link>
                            <p>{cs.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Testimonial */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column flex-xl-row gspace-5">
              <div className="testimonial-reviewer-container">
                <div
                  className="testimonial-header-wrapper animate-box animated fast animate__animated"
                  data-animate="animate__fadeInDown"
                >
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-31.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-4.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-5.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-6.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                        </div>
                        <div className="detail">
                          <h6>2.7k Positive</h6>
                          <h6>Reviews</h6>
                        </div>
                      </div>
                      <div className="testimonial-rating-container">
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="98">
                              0
                            </span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>On-Time Delivery</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="75">
                              0
                            </span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>Return Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Web Development</a>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Government Portals</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-title-container">
                <div
                  className="testimonial-header-wrapper-title animate-box animated animate__animated"
                  data-animate="animate__fadeInRight"
                >
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What Our Client Says</span>
                    </div>
                    <h2 className="title-heading">Hear from Our Satisfied Clients, Real Success Stories</h2>
                    <p>
                      Discover how organizations like yours achieved outstanding growth with Devmart's expert digital
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div className="swiper swiperTestimonial">
                  <div className="swiper-wrapper">
                    {isLoading ? (
                      <>
                        <div className="swiper-slide">
                          <div className="card card-testimonial">
                            <div className="d-flex flex-column gspace-2">
                              <h4>Loading testimonials...</h4>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="card card-testimonial">
                            <div className="d-flex flex-column gspace-2">
                              <h4>Loading...</h4>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : homeTestimonials.length === 0 ? (
                      <div className="swiper-slide">
                        <div className="card card-testimonial">
                          <div className="d-flex flex-column gspace-2">
                            <h4>No testimonials available</h4>
                            <p>Check back soon for client success stories.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      homeTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="swiper-slide">
                          <div className="card card-testimonial">
                            <div className="stars">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                              ))}
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <div className="d-flex flex-row gspace-2">
                                <div className="testimonial-image">
                                  <img
                                    src={testimonial.avatar_url || "/marko-digital-marketing-agency-html/image/Photo-8.jpg"}
                                    alt={`${testimonial.author_name} Photo`}
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="d-flex flex-column">
                                  <span className="profile-name">{testimonial.author_name}</span>
                                  <p className="profile-info">
                                    {testimonial.author_title}
                                    {testimonial.company_name && `, ${testimonial.company_name}`}
                                  </p>
                                </div>
                              </div>
                              <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                            </div>
                            <p className="testimonial-description">{testimonial.quote}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Digital Process */}
      <div className="section-wrapper-digital-process">
        <div className="section digital-process-banner">
          <div className="hero-container">
            <div className="digital-process-content">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div
                    className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>How it Work</span>
                    </div>
                    <h2 className="title-heading">Simple Steps to Digital Success</h2>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated fast animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <p>
                      Our streamlined process ensures your digital transformation is seamless and effective. We guide
                      you from initial concept through deployment and ongoing support.
                    </p>
                    <div className="link-wrapper">
                      <Link to="/contact">Get Started Now</Link>
                      <i className="fa-solid fa-arrow-circle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digital-process-steps-wrapper">
                <div className="digital-process-steps">
                  <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                    <div className="col">
                      <div
                        className="digital-process-step animate-box animated animate__animated"
                        data-animate="animate__fadeInUp"
                      >
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-N952ZWA.png"
                              alt="Digital Proccess Icon"
                              className="process-icon"
                            />
                          </div>
                          <span>01</span>
                        </div>
                        <div className="d-flex flex-column gspace-2">
                          <h5>Discovery & Requirements</h5>
                          <p>
                            We understand your needs, gather requirements, and define project scope with clear
                            deliverables and timelines.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                        data-animate="animate__fadeInDown"
                      >
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img
                                src="/marko-digital-marketing-agency-html/image/Icon-11.png"
                                alt="Digital Process Icon"
                                className="process-icon"
                              />
                            </div>
                            <span>02</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Architecture & Design</h5>
                            <p>
                              We design the technical architecture, user interface, and database structure for optimal
                              performance and scalability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                        data-animate="animate__fadeInUp"
                      >
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img
                                src="/marko-digital-marketing-agency-html/image/Icon-10.png"
                                alt="Digital Process Icon"
                                className="process-icon"
                              />
                            </div>
                            <span>03</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Development & Testing</h5>
                            <p>
                              We build your solution with clean code, rigorous testing, and quality assurance to ensure
                              reliability and security.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                        data-animate="animate__fadeInDown"
                      >
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img
                                src="/marko-digital-marketing-agency-html/image/Icon-12.png"
                                alt="Digital Process Icon"
                                className="process-icon"
                              />
                            </div>
                            <span>04</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Launch & Support</h5>
                            <p>
                              We deploy your application, provide training, and offer ongoing maintenance to ensure
                              long-term success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>

      {/* Section Pricing */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div
              className="d-flex flex-column gspace-2 animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
            >
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">
                Flexible Pricing Plans for Every Business
              </h2>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 grid-spacer-2">
              {isLoading ? (
                <>
                  <div className="col">
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>Loading pricing plans...</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>Loading...</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>Loading...</h4>
                    </div>
                  </div>
                </>
              ) : homePricingPlans.length === 0 ? (
                <div className="col">
                  <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <h4>Pricing information coming soon</h4>
                    <p>Please contact us for custom pricing.</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Column 1: Consultation + First Plan */}
                  <div className="col">
                    <div className="pricing-container">
                      <div
                        className="card card-pricing-title animate-box animated animate__animated"
                        data-animate="animate__fadeInLeft"
                      >
                        <div className="spacer"></div>
                        <div className="content">
                          <h3 className="title-heading">Let's Find the Right Solution for You!</h3>
                          <div className="link-wrapper">
                            <Link to="/contact">Book a Free Consultation</Link>
                            <i className="fa-solid fa-arrow-circle-right"></i>
                          </div>
                        </div>
                      </div>
                      {homePricingPlans[0] && (
                        <div
                          className="card card-pricing animate-box animated animate__animated"
                          data-animate="animate__fadeInUp"
                        >
                          <h4>{homePricingPlans[0].name}</h4>
                          <p>{homePricingPlans[0].description}</p>
                          <div className="d-flex flex-row gspace-1 align-items-center h-100">
                            <h3>${homePricingPlans[0].price}</h3>
                            <p>/{homePricingPlans[0].billing_period === 'month' ? 'Month' : homePricingPlans[0].billing_period === 'year' ? 'Year' : 'One-time'}</p>
                          </div>
                          <Link to="/pricing" className="btn btn-accent">
                            <div className="btn-title">
                              <span>View Details</span>
                            </div>
                            <div className="icon-circle">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          {homePricingPlans[0].features && Array.isArray(homePricingPlans[0].features) && (
                            <ul className="check-list">
                              {homePricingPlans[0].features.slice(0, 3).map((feature, i) => (
                                <li key={i}>
                                  <Link to="/services">{feature}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Second Plan (Highlighted if marked) */}
                  {homePricingPlans[1] && (
                    <div className="col">
                      <div
                        className={`card card-pricing ${homePricingPlans[1].highlighted ? 'pricing-highlight' : ''} animate-box animated ${homePricingPlans[1].highlighted ? 'slow' : ''} animate__animated`}
                        data-animate="animate__fadeInUp"
                      >
                        <div className="spacer"></div>
                        <h4>{homePricingPlans[1].name}</h4>
                        <p>{homePricingPlans[1].description}</p>
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <h3>${homePricingPlans[1].price}</h3>
                          <p>/{homePricingPlans[1].billing_period === 'month' ? 'Month' : homePricingPlans[1].billing_period === 'year' ? 'Year' : 'One-time'}</p>
                        </div>
                        <Link to="/pricing" className="btn btn-accent">
                          <div className="btn-title">
                            <span>View Details</span>
                          </div>
                          <div className="icon-circle">
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                        </Link>
                        {homePricingPlans[1].highlighted && (
                          <div className="core-benefits">
                            <div className="benefit">
                              <i className="fa-solid fa-brain"></i>
                              <a href="#">Dedicated Account Manager</a>
                            </div>
                            <div className="benefit">
                              <i className="fa-brands fa-accessible-icon"></i>
                              <a href="#">Priority Support 24/7</a>
                            </div>
                            <div className="benefit">
                              <i className="fa-solid fa-bug"></i>
                              <a href="#">Customized Growth Strategy</a>
                            </div>
                          </div>
                        )}
                        {homePricingPlans[1].features && Array.isArray(homePricingPlans[1].features) && (
                          <ul className="check-list">
                            {homePricingPlans[1].features.map((feature, i) => (
                              <li key={i}>
                                <a href="#">{feature}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Column 3: Your Growth + Third Plan */}
                  {homePricingPlans[2] && (
                    <div className="col">
                      <div className="pricing-container">
                        <div
                          className="card pricing-highlight-box animate-box animated animate__animated"
                          data-animate="animate__fadeInRight"
                        >
                          <div className="d-flex flex-column gspace-2 w-100">
                            <h5>Your Growth, Our Priority!</h5>
                            <div className="d-flex flex-column gspace-2">
                              <div className="pricing-highlights">
                                <a href="#">Modern Tech Stack (React + Supabase)</a>
                                <i className="fa-solid fa-arrow-circle-right"></i>
                              </div>
                              <div className="pricing-highlights">
                                <a href="#">Proven Architecture for Scalability</a>
                                <i className="fa-solid fa-arrow-circle-right"></i>
                              </div>
                              <div className="pricing-highlights">
                                <a href="#">Flexible Solutions for Any Business</a>
                                <i className="fa-solid fa-arrow-circle-right"></i>
                              </div>
                            </div>
                          </div>
                          <div className="spacer"></div>
                        </div>
                        <div
                          className="card card-pricing animate-box animated animate__animated"
                          data-animate="animate__fadeInUp"
                        >
                          <h4>{homePricingPlans[2].name}</h4>
                          <p>{homePricingPlans[2].description}</p>
                          <div className="d-flex flex-row gspace-1 align-items-center h-100">
                            <h3>${homePricingPlans[2].price}</h3>
                            <p>/{homePricingPlans[2].billing_period === 'month' ? 'Month' : homePricingPlans[2].billing_period === 'year' ? 'Year' : 'One-time'}</p>
                          </div>
                          <Link to="/pricing" className="btn btn-accent">
                            <div className="btn-title">
                              <span>View Details</span>
                            </div>
                            <div className="icon-circle">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          {homePricingPlans[2].features && Array.isArray(homePricingPlans[2].features) && (
                            <ul className="check-list">
                              {homePricingPlans[2].features.slice(0, 3).map((feature, i) => (
                                <li key={i}>
                                  <Link to="/services">{feature}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Newsletter */}
      <div className="section">
        <div className="hero-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-layout">
              <div className="spacer"></div>
              <div className="d-flex flex-column gspace-5 position-relative z-2">
                <div
                  className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <h3 className="title-heading">Stay Ahead in Digital Transformation</h3>
                  <p>
                    Get updates on AI tools, government digitalization, and digital product insights delivered to your
                    inbox.
                  </p>
                </div>
                <div id="newsletter-success" className={`alert success ${newsletterStatus === "success" ? "" : "hidden"}`}>
                  <span className="check-icon">
                    <i className="fa-solid fa-2xl fa-check"></i>
                  </span>
                  <p className="text-center">Thank you for subscribing! Check your inbox for updates.</p>
                </div>

                <div id="newsletter-error" className={`alert error ${newsletterStatus === "error" ? "" : "hidden"}`}>
                  <span className="cross-icon">
                    <i className="fa-solid fa-2xl fa-xmark"></i>
                  </span>
                  <p className="text-center">Please enter a valid email address.</p>
                </div>

                <div id="newsletter-duplicate" className={`alert error ${newsletterStatus === "duplicate" ? "" : "hidden"}`}>
                  <span className="cross-icon">
                    <i className="fa-solid fa-2xl fa-xmark"></i>
                  </span>
                  <p className="text-center">You are already subscribed with this email address.</p>
                </div>

                <form
                  onSubmit={handleNewsletterSubmit}
                  id="newsletterForm"
                  className="needs-validation animate-box animated animate__animated"
                  data-animate="animate__fadeInRight"
                >
                  <div className="input-container">
                    <input
                      type="email"
                      name="newsletter-email"
                      id="newsletter-email"
                      placeholder="Give your best email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <p className="error-text hidden"></p>
                  </div>
                  <button className="btn btn-accent" type="submit" disabled={isNewsletterSubmitting}>
                    <span className="btn-title">
                      <span>{isNewsletterSubmitting ? "Subscribing..." : "Subscribe"}</span>
                    </span>
                    <span className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Blog */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5 m-0">
              <div className="col col-xl-8 ps-0 pe-0">
                <div
                  className="d-flex flex-column gspace-2 animate-box animated fast animate__animated"
                  data-animate="animate__fadeInLeft"
                >
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Insights & Trends</span>
                  </div>
                  <h2 className="title-heading">Latest Insights on Digital Products & AI</h2>
                </div>
              </div>
              <div className="col col-xl-4 ps-0 pe-0">
                <div
                  className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated"
                  data-animate="animate__fadeInRight"
                >
                  <p>
                    Explore our latest articles covering government digitalization, AI-powered tools, and technical
                    insights to elevate your digital transformation journey.
                  </p>
                  <div className="link-wrapper">
                    <Link to="/blog">View All Articles</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
              {isLoading ? (
                <>
                  <div className="col">
                    <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="card-body">
                        <h4>Loading blog posts...</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="card-body">
                        <h4>Loading...</h4>
                      </div>
                    </div>
                  </div>
                </>
              ) : homeBlogPosts.length === 0 ? (
                <div className="col">
                  <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="card-body">
                      <h4>No blog posts available</h4>
                      <p>Check back soon for our latest insights and articles.</p>
                    </div>
                  </div>
                </div>
              ) : (
                homeBlogPosts.slice(0, 2).map((post) => (
                  <div key={post.id} className="col">
                    <div
                      className="card card-blog animate-box animated animate__animated"
                      data-animate="animate__fadeInUp"
                      onClick={() => (window.location.href = `/blog/${post.slug}`)}
                    >
                      <div className="blog-image">
                        <img 
                          src={post.featured_image || "/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"} 
                          alt={post.title} 
                        />
                      </div>
                      <div className="card-body">
                        <div className="d-flex flex-row gspace-2">
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-calendar accent-color"></i>
                            <span className="meta-data">
                              {post.published_at 
                                ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                                : 'Recently Published'}
                            </span>
                          </div>
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-folder accent-color"></i>
                            <span className="meta-data">{post.category || 'General'}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="blog-link">
                          {post.title}
                        </Link>
                        <p>
                          {post.excerpt || post.content?.substring(0, 150) + '...'}
                        </p>
                        <Link to={`/blog/${post.slug}`} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
