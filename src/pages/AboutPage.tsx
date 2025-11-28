import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">About Devmart</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">About Us</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section About Us */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="about-img-layout">
              <div className="image-container about-img">
                <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="About Us Image" className="img-fluid animate-box animated animate__animated" data-animate="animate__fadeInUp" />
                <div className="about-layout">
                  <div className="d-flex flex-column">
                    <div className="card-about-wrapper">
                      <div className="card card-about animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <div className="d-flex flex-row align-items-center">
                          <span className="counter" data-target="21">0</span>
                          <span className="counter-detail">+</span>
                        </div>
                        <h6>Years of Experience on Digital Marketing Services</h6>
                      </div>
                    </div>
                    <div className="about-spacer"></div>
                  </div>
                  <div className="about-spacer"></div>
                </div>
              </div>
            </div>
            <div className="about-title">
              <div className="d-flex flex-column gspace-2">
                <div className="sub-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>About Us</span>
                </div>
                <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Who We Are & What Drives Us</h2>
                <p>At Devmart, we build digital products that transform how organizations operate. Based in Suriname, we serve government, enterprise, and ambitious businesses with modern web applications, portals, and AI-powered tools.</p>
                <p>Get to know the passionate team behind the solutions, the values that guide us, and the mission that fuels our growth.</p>
                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link to="/services/government-portals">Government Portals</Link></li>
                      <li><Link to="/services/enterprise-systems">Enterprise Systems</Link></li>
                      <li><Link to="/services/ai-automation">AI Automation</Link></li>
                    </ul>
                  </div>
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link to="/services/web-development">Web Development</Link></li>
                      <li><Link to="/services/ux-ui-design">UX/UI Design</Link></li>
                      <li><Link to="/services/support">Support & Maintenance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partner */}
      <div className="section-partner">
        <div className="hero-container">
          <div className="card card-partner animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="partner-spacer"></div>
            <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
              <div className="col">
                <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                  <h3 className="title-heading">Powering Success for Top Brands</h3>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column ps-xl-3 ps-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. 
                    Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
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
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-7.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-6.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-8.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-2.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-1.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-3.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-5.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-4.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img src="/marko-digital-marketing-agency-html/image/client-7.png" alt="Client" className="partner-logo img-fluid" />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-6.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-8.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-2.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-1.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-3.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-5.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="partner-slide">
                        <img src="/marko-digital-marketing-agency-html/image/client-4.png" alt="Client" className="partner-logo img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Why Choose Us */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="chooseus-card-container">
              <div className="d-flex flex-column gspace-2">
                <div className="card card-chooseus animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/Icon-2.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Reliability & Trust</h4>
                    <p>We build lasting partnerships with our clients, providing dependable solutions and continuous support for long-term success.</p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/icon-1.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Partnership Approach</h4>
                    <p>We work closely with your team to ensure solutions align with your goals and organizational culture.</p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus animate-box animated slow animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/Icon-3.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Quality & Documentation</h4>
                    <p>Government-grade quality standards with comprehensive documentation and compliance for all projects.</p>
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
                  <div className="sub-heading animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Our Core Values</span>
                  </div>
                  <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInDown">The Principles That Define Us</h2>
                  <p className="mb-0 animate-box animated animate__animated" data-animate="animate__fadeInDown">In the fast-paced digital world, choosing the right marketing partner makes all the difference. At Marko, we don't just create campaigns—we craft strategies that deliver measurable success.</p>
                </div>
                <div className="image-container">
                  <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Why Choose Us Image" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>    
                      <div className="card-chooseus-cta-wrapper">
                        <div className="card card-chooseus-cta animate-box animated animate__animated" data-animate="animate__fadeInUp">
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
                <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"><i className="fa-solid fa-play"></i></button>
                  <p>
                    See How We Help Organizations Grow
                  </p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                <p>Upgrade your digital infrastructure with modern web applications, secure portals, and AI-powered tools. Let's build something powerful together.</p>
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

      {/* Section Team */}
      <div className="section">
        <div className="hero-container">
          <div className="team-wrapper">
            <div className="card team-layout">
              <div className="d-flex flex-column align-items-center gspace-2 animate-box animate__animated" data-animate="animate__fadeInLeft">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Our Team</span>
                </div>
                <h2 className="title-heading">Meet the Minds Behind Your Digital Success</h2>
              </div>
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg" alt="Team Image" className="img-fluid" />
                      <div className="social-team-wrapper">
                        <div className="social-team-spacer"></div>
                        <div className="d-flex flex-column align-items-end">
                          <div className="social-team-container">
                            <a href="https://facebook.com" className="social-item">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" className="social-item">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="social-item">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                          <div className="social-team-spacer"></div>
                        </div>
                      </div>
                    </div>
                    <div className="team-profile">
                      <h4>Lead Developer</h4>
                      <span className="title">Full-Stack Engineering</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg" alt="Team Image" className="img-fluid" />
                      <div className="social-team-wrapper">
                        <div className="social-team-spacer"></div>
                        <div className="d-flex flex-column align-items-end">
                          <div className="social-team-container">
                            <a href="https://facebook.com" className="social-item">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" className="social-item">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="social-item">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                          <div className="social-team-spacer"></div>
                        </div>
                      </div>
                    </div>
                    <div className="team-profile">
                      <h4>Project Manager</h4>
                      <span className="title">Delivery & Client Relations</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg" alt="Team Image" className="img-fluid" />
                      <div className="social-team-wrapper">
                        <div className="social-team-spacer"></div>
                        <div className="d-flex flex-column align-items-end">
                          <div className="social-team-container">
                            <a href="https://facebook.com" className="social-item">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" className="social-item">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="social-item">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                          <div className="social-team-spacer"></div>
                        </div>
                      </div>
                    </div>
                    <div className="team-profile">
                      <h4>Technical Architect</h4>
                      <span className="title">System Design & Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer"></div>
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
                  <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>How it Work</span>
                    </div>
                    <h2 className="title-heading">Simple Steps to Digital Success</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated fast animate__animated" data-animate="animate__fadeInDown">
                    <p>
                      Our streamlined process ensures your digital growth is seamless and effective. ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis.
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
                      <div className="digital-process-step animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-N952ZWA.png" alt="Digital Proccess Icon" className="process-icon" />
                          </div>
                          <span>01</span>
                        </div>
                        <div className="d-flex flex-column gspace-2">
                          <h5>Discovery & Consult</h5>
                          <p>
                            Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-11.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>02</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Strategy & Planning</h5>
                            <p>
                              Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="step-spacer"></div>     
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-10.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>03</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Execution & Optimize</h5>
                            <p>
                              Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-12.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>04</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Result & Growth</h5>
                            <p>
                              Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis
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
                            <span className="counter" data-target="90">0</span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>Improved Project</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="49">0</span>
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
                    <p>Discover how organizations like yours achieved outstanding results with Devmart's expert digital solutions.</p>
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
                        <p className="testimonial-description">
                          "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."
                        </p>
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
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors."
                        </p>
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
                        <p className="testimonial-description">
                          "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!"
                        </p>
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
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity."
                        </p>
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
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."
                        </p>
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
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors."
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
    </>
  );
};

export default AboutPage;
