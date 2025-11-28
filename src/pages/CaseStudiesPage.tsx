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
                    <p>We don't just talk about results—we deliver them. Here are some of our most impactful projects showcasing how our development expertise drives digital transformation.</p>
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
                      <div className="cs-component"><a href="#">React</a></div>
                      <div className="cs-component"><a href="#">Supabase</a></div>
                      <div className="cs-component"><a href="#">Portal</a></div>
                      <div className="cs-component"><a href="#">Government</a></div>
                      <div className="cs-component"><a href="#">Authentication</a></div>
                      <div className="cs-component"><a href="#">Database</a></div>
                      <div className="cs-component"><a href="#">API</a></div>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Housing Subsidy Application Portal</h4></a>
                      <p>Streamlined government housing application process with 80% faster processing and improved citizen experience.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content saas-leads animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Immigration Case Management System</h4></a>
                      <p>Automated case tracking with 60% reduction in processing time and improved transparency for applicants.</p>
                    </div>
                    <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                      <div className="cs-component"><a href="#">CMS</a></div>
                      <div className="cs-component"><a href="#">React</a></div>
                      <div className="cs-component"><a href="#">API</a></div>
                      <div className="cs-component"><a href="#">Automation</a></div>
                      <div className="cs-component"><a href="#">Security</a></div>
                      <div className="cs-component"><a href="#">Dashboard</a></div>
                      <div className="cs-component"><a href="#">Tracking</a></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content ecommerce animate-box animated fast animate__animated" data-animate="animate__fadeInUp">
                    <div className="case-studies-component small align-self-start justify-content-start align-items-start">
                      <div className="cs-component"><a href="#">React</a></div>
                      <div className="cs-component"><a href="#">Frontend</a></div>
                      <div className="cs-component"><a href="#">UX</a></div>
                      <div className="cs-component"><a href="#">Responsive</a></div>
                      <div className="cs-component"><a href="#">SEO</a></div>
                      <div className="cs-component"><a href="#">Performance</a></div>
                      <div className="cs-component"><a href="#">Accessible</a></div>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>High-Profile Government Website</h4></a>
                      <p>Modern, accessible website serving 100k+ monthly visitors with 95% uptime and improved information delivery.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content startup-branding animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>SME Digital Transformation Platform</h4></a>
                      <p>Complete business automation platform increasing productivity by 50% for local small businesses in Suriname.</p>
                    </div>
                    <div className="case-studies-component large align-self-start justify-content-start align-items-start">
                      <div className="cs-component"><a href="#">Full-Stack</a></div>
                      <div className="cs-component"><a href="#">Automation</a></div>
                      <div className="cs-component"><a href="#">AI</a></div>
                      <div className="cs-component"><a href="#">Integration</a></div>
                      <div className="cs-component"><a href="#">Analytics</a></div>
                      <div className="cs-component"><a href="#">Cloud</a></div>
                      <div className="cs-component"><a href="#">Mobile</a></div>
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
                <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                <p>Elevate your digital infrastructure with cutting-edge web development and modern tech solutions. Let's build something exceptional together!</p>
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
                <div className="testimonial-header-wrapper-title animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What Our Client Says</span>
                    </div>
                    <h2 className="title-heading">Hear from Our Satisfied Clients, Real Success Stories</h2>
                    <p>Discover how organizations like yours achieved digital transformation with Devmart's expert development solutions.</p>
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
                        <p className="testimonial-description">"Devmart completely transformed our digital infrastructure! Their development expertise helped us modernize operations and improve service delivery significantly."</p>
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
                        <p className="testimonial-description">"We've worked with many agencies before, but Devmart stands out. Their technical expertise and commitment to quality gave us a competitive advantage."</p>
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
                        <p className="testimonial-description">"From concept to deployment, Devmart delivered exceptional results. Our platform now handles complex operations smoothly and our users love it!"</p>
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
                        <p className="testimonial-description">"Highly professional and results-oriented. Devmart's expertise in enterprise systems helped us build a reliable digital foundation for growth."</p>
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
