import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getActivePartnerLogos, type PartnerLogo } from "@/integrations/supabase/queries/partnerLogos";
import { getPublishedTestimonials, type Testimonial } from "@/integrations/supabase/queries/testimonials";
import { SEO } from "@/components/SEO";
import { canonical } from "@/utils/seo";

const PartnershipPage = () => {
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogo[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const [partnerResult, testimonialResult] = await Promise.all([
        getActivePartnerLogos(),
        getPublishedTestimonials(),
      ]);

      setPartnerLogos(partnerResult.data || []);
      setTestimonials(testimonialResult.data || []);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderStars = (rating: number | null) => {
    const starCount = rating || 5;
    return Array.from({ length: starCount }).map((_, i) => (
      <i key={i} className="fa-solid fa-star"></i>
    ));
  };

  return (
    <>
      <SEO
        title="Partnership | Devmart Suriname"
        description="Partner with Devmart for scalable tech solutions. Let's collaborate to bring your digital vision to life with cutting-edge web development."
        canonical={canonical("/partnership")}
        type="website"
        keywords={["tech partnership suriname", "software development collaboration", "web development partners"]}
      />
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Partnership
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">Partnership</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Partnership */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-2">
            <div className="d-flex flex-column gspace-2 justify-content-center align-items-center">
              <div className="sub-heading">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Client & Partnership</span>
              </div>
              <h2 className="title-heading heading-container heading-container-wide">
                Strong Partnerships, Proven Success
              </h2>
            </div>
            <div className="partnership-layout">
              <div className="partnership-wrapper">
                <div className="partnership-spacer"></div>
                <div className="row row-cols-md-4 row-cols-1 g-0">
                  {isLoading ? (
                    // Loading skeleton: 8 partner logo placeholders
                    Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="col partnership-container">
                        <div className="partnership-item">
                          <div className="partner-logo-wrapper">
                            <div
                              style={{
                                width: '150px',
                                height: '50px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : partnerLogos.length > 0 ? (
                    // Dynamic partner logos from Supabase
                    partnerLogos.map((partner) => (
                      <div key={partner.id} className="col partnership-container">
                        <div className="partnership-item">
                          <div className="partner-logo-wrapper">
                            {partner.website_url ? (
                              <a href={partner.website_url} target="_blank" rel="noopener noreferrer">
                                <img
                                  src={partner.logo_url}
                                  alt={partner.name}
                                  className="partner-logo img-fluid"
                                  loading="lazy"
                                  width="150"
                                  height="50"
                                  decoding="async"
                                />
                              </a>
                            ) : (
                              <img
                                src={partner.logo_url}
                                alt={partner.name}
                                className="partner-logo img-fluid"
                                loading="lazy"
                                width="150"
                                height="50"
                                decoding="async"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Empty state: No partners yet
                    <div className="col-12">
                      <div className="d-flex flex-column align-items-center justify-content-center gspace-2" style={{ padding: '60px 20px', textAlign: 'center' }}>
                        <i className="fa-regular fa-handshake fa-3x" style={{ opacity: 0.3, marginBottom: '16px' }}></i>
                        <p style={{ opacity: 0.6 }}>Partner showcase coming soon.</p>
                      </div>
                    </div>
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
                    {isLoading ? (
                      // Loading skeleton: 3 testimonial cards
                      Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="card card-testimonial">
                            <div className="stars" style={{ display: 'flex', gap: '4px' }}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} style={{
                                  width: '16px',
                                  height: '16px',
                                  backgroundColor: 'rgba(255,255,255,0.1)',
                                  borderRadius: '2px'
                                }} />
                              ))}
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <div className="d-flex flex-row gspace-2">
                                <div className="testimonial-image">
                                  <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                  }} />
                                </div>
                                <div className="d-flex flex-column" style={{ gap: '8px' }}>
                                  <div style={{
                                    width: '120px',
                                    height: '18px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px'
                                  }} />
                                  <div style={{
                                    width: '80px',
                                    height: '14px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px'
                                  }} />
                                </div>
                              </div>
                              <i className="fa-solid fa-3x fa-quote-right accent-color" style={{ opacity: 0.3 }}></i>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <div style={{ width: '100%', height: '14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                              <div style={{ width: '90%', height: '14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                              <div style={{ width: '70%', height: '14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : testimonials.length > 0 ? (
                      // Dynamic testimonials from Supabase
                      testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="swiper-slide">
                          <div className="card card-testimonial">
                            <div className="stars">
                              {renderStars(testimonial.rating)}
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <div className="d-flex flex-row gspace-2">
                                <div className="testimonial-image">
                                  <img
                                    src={testimonial.avatar_url || "/marko-digital-marketing-agency-html/image/Photo-8.jpg"}
                                    alt={testimonial.author_name}
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
                            <p className="testimonial-description">"{testimonial.quote}"</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      // Empty state: No testimonials available
                      <div className="swiper-slide">
                        <div className="card card-testimonial">
                          <div className="d-flex flex-column align-items-center justify-content-center gspace-2" style={{ padding: '40px 20px', textAlign: 'center', minHeight: '280px' }}>
                            <i className="fa-regular fa-comment-dots fa-3x" style={{ opacity: 0.3, marginBottom: '16px' }}></i>
                            <p style={{ opacity: 0.6 }}>No client testimonials yet. Your success story could be next!</p>
                          </div>
                        </div>
                      </div>
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

export default PartnershipPage;
