import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Simple, Direct, and Friendly</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
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
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        What services does Marko offer?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>We specialize in digital marketing, including branding, social media management, content strategy, paid ads, and analytics-driven campaigns.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="faq2">
                        How long does it take to see results?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>While some channels like paid ads offer quicker results, most strategies (like content and SEO) show steady growth within 3-6 months.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Do you work with businesses of all sizes?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Yes! We collaborate with startups, SMEs, and enterprise-level companies across various industries.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        Can I request a custom digital marketing package?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Absolutely. We tailor our services to fit your business goals, budget, and timeline</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                        How do I know which service is right for me?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>During our initial consultation, we'll assess your current strategy and recommend the best path forward based on data and goals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                        Do you provide monthly performance reports?
                      </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Yes. Every month, you'll receive a clear and comprehensive report outlining progress, key metrics, and next steps.</p>
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
                <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"><i className="fa-solid fa-play"></i></button>
                <p>See How We Help Brands Grow</p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Business with Marko!</h3>
                <p>Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Modal Video */}
      <div className="section p-0">
        <div id="modal-overlay" className="modal-overlay">
          <span className="modal-close"><i className="fa-solid fa-xmark"></i></span>
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
                <div className="testimonial-header-wrapper animate-box animated fast animate__animated" data-animate="animate__fadeInDown">
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
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
                        <a href="#">Social Media Growth</a>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Performance Marketing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-8">
                <div className="testimonial-header-wrapper-title animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What Our Client Says</span>
                    </div>
                    <h2 className="title-heading">Hear from Our Satisfied Clients, Real Success Stories</h2>
                    <p>Discover how businesses like yours achieved outstanding growth with Marko's expert digital marketing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div className="swiper swiperTestimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">"Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."</p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">"We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors."</p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">"From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!"</p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">"Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity."</p>
                      </div>
                    </div>
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
