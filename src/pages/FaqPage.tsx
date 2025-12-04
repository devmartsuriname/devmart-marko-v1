import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getActiveFaqItems, type FaqItem } from "@/integrations/supabase/queries/faqItems";
import { getPublishedTestimonials, type Testimonial } from "@/integrations/supabase/queries/testimonials";
import { SEO } from "@/components/SEO";
import { canonical } from "@/utils/seo";

const FaqPage = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const [faqResult, testimonialsResult] = await Promise.all([
        getActiveFaqItems(),
        getPublishedTestimonials(),
      ]);

      if (faqResult.error) {
        console.error("[FaqPage] Failed to load FAQs:", faqResult.error);
        setError("Unable to load content at the moment.");
      } else {
        setFaqItems(faqResult.data || []);
      }

      if (testimonialsResult.error) {
        console.error("[FaqPage] Failed to load testimonials:", testimonialsResult.error);
      } else {
        setTestimonials(testimonialsResult.data || []);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <SEO
        title="FAQ | Devmart Suriname"
        description="Frequently asked questions about our web development services and process. Get answers to common questions about working with Devmart."
        canonical={canonical("/faq")}
        type="website"
        keywords={["web development faq", "software development questions", "devmart services"]}
      />
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Simple, Direct, and Friendly
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">FAQ</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section FAQs */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col col-xl-5">
              <div className="faq-title-container">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="title-heading">Got Questions? We've Got Answers.</h2>
              </div>
            </div>
            <div className="col col-xl-7">
              <div className="d-flex flex-column">
                <div className="accordion" id="faqAccordion1">
                  {isLoading ? (
                    // Loading state: 4 skeleton accordion items
                    <>
                      {[1, 2, 3, 4].map((i) => (
                        <div key={`skeleton-${i}`} className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              disabled
                            >
                              Loading...
                            </button>
                          </h2>
                        </div>
                      ))}
                    </>
                  ) : error ? (
                    // Error state
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                        >
                          Error Loading FAQs
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <div className="accordion-spacer"></div>
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  ) : faqItems.length === 0 ? (
                    // Empty state
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                        >
                          No FAQs Available
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <div className="accordion-spacer"></div>
                          <p>No FAQs available at this time. Please check back later.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Dynamic FAQ items
                    faqItems.map((faq, index) => (
                      <div key={faq.id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-${faq.id}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`faq-${faq.id}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`faq-${faq.id}`}
                          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion-body">
                            <div className="accordion-spacer"></div>
                            <p>{faq.answer}</p>
                          </div>
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

      {/* Section Guide */}
      <div className="section-guide">
        <div className="guide-banner">
          <div className="hero-container">
            <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="guide-video-container">
                <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>See How We Help Brands Grow</p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Organization with Devmart!</h3>
                <p>
                  Take your digital presence to the next level with reliable web solutions and innovative technology.
                  Let's build something exceptional together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Modal Video */}
      <div className="section p-0">
        <div id="modal-overlay" className="modal-overlay">
          <span className="modal-close">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <div className="video-modal">
            <iframe id="modal-video-frame" className="ifr-video" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Section Testimonial */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-4">
                <div
                  className="testimonial-header-wrapper animate-box animated fast animate__animated"
                  data-animate="animate__fadeInDown"
                >
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-1.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-2.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-3.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-4.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
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
                            <span className="counter" data-target="90"></span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>Improved Project</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="49"></span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>New Project</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <Link to="/services">Web Development</Link>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <Link to="/services">Enterprise Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-8">
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
                      Discover how organizations like yours achieved outstanding results with Devmart's expert
                      development solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div className="swiper swiperTestimonial">
                  <div className="swiper-wrapper">
                    {testimonials.length === 0 ? (
                      <div className="swiper-slide">
                        <div className="card card-testimonial">
                          <div className="d-flex flex-column gspace-2">
                            <h4>No testimonials available</h4>
                            <p>Check back soon for client success stories.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      testimonials.map((testimonial) => (
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
                                    loading="lazy"
                                    width="80"
                                    height="80"
                                    decoding="async"
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
    </>
  );
};

export default FaqPage;
