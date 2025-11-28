import { Link } from "react-router-dom";

const CaseStudiesPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Case Studies</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Case Studies</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Case Studies */}
      <div className="section px-0">
        <div className="hero-container">
          <div className="case-studies-layout">
            <div className="card card-case-studies">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>Case Studies</span>
                    </div>
                    <h2 className="title-heading">See How We Help Businesses Thrive</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column h-100 justify-content-end gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                    <p>We don't just talk about results—we deliver them. Here are some of our most impactful case studies showcasing how our digital marketing strategies drive success.</p>
                    <div className="link-wrapper">
                      <Link to="/case-studies">More Case Studies</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gspace-2">
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content local-business animate-box animated fast animate__animated" data-animate="animate__fadeInUp">
                    <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                      <div className="cs-component"><a href="#">Social</a></div>
                      <div className="cs-component"><a href="#">Influencer</a></div>
                      <div className="cs-component"><a href="#">Retargeting</a></div>
                      <div className="cs-component"><a href="#">Google</a></div>
                      <div className="cs-component"><a href="#">Video</a></div>
                      <div className="cs-component"><a href="#">Local</a></div>
                      <div className="cs-component"><a href="#">Community</a></div>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Local Business Digital Transformation</h4></a>
                      <p>5x ROI on social media campaigns & 80% increase in engagement lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content saas-leads animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>SaaS Lead Generation Success</h4></a>
                      <p>150% increase in qualified leads & 70% lower customer acquisition cost.</p>
                    </div>
                    <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                      <div className="cs-component"><a href="#">Content</a></div>
                      <div className="cs-component"><a href="#">Linkeind Ads</a></div>
                      <div className="cs-component"><a href="#">Email</a></div>
                      <div className="cs-component"><a href="#">Webinar</a></div>
                      <div className="cs-component"><a href="#">Landing</a></div>
                      <div className="cs-component"><a href="#">CRM</a></div>
                      <div className="cs-component"><a href="#">Retargeting</a></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content ecommerce animate-box animated fast animate__animated" data-animate="animate__fadeInUp">
                    <div className="case-studies-component small align-self-start justify-content-start align-items-start">
                      <div className="cs-component"><a href="#">SEO</a></div>
                      <div className="cs-component"><a href="#">PPC Ads</a></div>
                      <div className="cs-component"><a href="#">CRO</a></div>
                      <div className="cs-component"><a href="#">Analytics</a></div>
                      <div className="cs-component"><a href="#">Influencer</a></div>
                      <div className="cs-component"><a href="#">A/B Testing</a></div>
                      <div className="cs-component"><a href="#">Email</a></div>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>E-Commerce Growth Boost</h4></a>
                      <p>3x increase in organic traffic & 2x revenue growth in 6 months lorem ipsum dolor.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content startup-branding animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Startup Brand Awareness Expansion</h4></a>
                      <p>200% increase in brand mentions & 60% higher engagement rates lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="case-studies-component large align-self-start justify-content-start align-items-start">
                      <div className="cs-component"><a href="#">Viral</a></div>
                      <div className="cs-component"><a href="#">Partnership</a></div>
                      <div className="cs-component"><a href="#">PR</a></div>
                      <div className="cs-component"><a href="#">Growth</a></div>
                      <div className="cs-component"><a href="#">UGC</a></div>
                      <div className="cs-component"><a href="#">Media</a></div>
                      <div className="cs-component"><a href="#">Brading</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer"></div>
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
            <div className="d-flex flex-column flex-xl-row gspace-5">
              <div className="testimonial-reviewer-container">
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
              <div className="testimonial-title-container">
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

export default CaseStudiesPage;
