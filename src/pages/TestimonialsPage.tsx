import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublishedTestimonials, type Testimonial } from "@/integrations/supabase/queries/testimonials";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await getPublishedTestimonials();
      
      if (fetchError) {
        console.error("Error fetching testimonials:", fetchError);
        setError("Unable to load testimonials at the moment.");
      } else {
        setTestimonials(data || []);
      }
      
      setIsLoading(false);
    };
    
    fetchTestimonials();
  }, []);
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Testimonials
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">Testimonials</p>
              </nav>
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
                            src="/marko-digital-marketing-agency-html/image/Photo-1.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-2.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-3.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-4.jpg"
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
                        <a href="#">Web Development</a>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Enterprise Solutions</a>
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
                      // Loading state: Show 3 placeholder slides
                      [...Array(3)].map((_, index) => (
                        <div className="swiper-slide" key={`loading-${index}`}>
                          <div className="card card-testimonial">
                            <div className="stars">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star" style={{ opacity: 0.3 }}></i>
                              ))}
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <div className="d-flex flex-row gspace-2">
                                <div className="testimonial-image" style={{ background: "rgba(255,255,255,0.1)", width: 60, height: 60, borderRadius: "50%" }}></div>
                                <div className="d-flex flex-column">
                                  <span className="profile-name" style={{ opacity: 0.5 }}>Loading...</span>
                                  <p className="profile-info" style={{ opacity: 0.3 }}>Please wait</p>
                                </div>
                              </div>
                              <i className="fa-solid fa-3x fa-quote-right accent-color" style={{ opacity: 0.3 }}></i>
                            </div>
                            <p className="testimonial-description" style={{ opacity: 0.3 }}>Loading testimonial content...</p>
                          </div>
                        </div>
                      ))
                    ) : error ? (
                      // Error state: Single slide with error message
                      <div className="swiper-slide">
                        <div className="card card-testimonial">
                          <p className="testimonial-description">{error}</p>
                        </div>
                      </div>
                    ) : testimonials.length === 0 ? (
                      // Empty state: Single slide with empty message
                      <div className="swiper-slide">
                        <div className="card card-testimonial">
                          <p className="testimonial-description">No testimonials are available at the moment.</p>
                        </div>
                      </div>
                    ) : (
                      // Data state: Map testimonials to slides
                      testimonials.map((testimonial) => (
                        <div className="swiper-slide" key={testimonial.id}>
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
                                    alt={`${testimonial.author_name} testimonial`}
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
                            <p className="testimonial-description">"{testimonial.quote}"</p>
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
    </>
  );
};

export default TestimonialsPage;
