import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Meet Our Team
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">Our Team</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Team */}
      <div className="section">
        <div className="hero-container">
          <div className="team-wrapper">
            <div className="card team-layout">
              <div
                className="d-flex flex-column align-items-center gspace-2 animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Our Team</span>
                </div>
                <h2 className="title-heading">Meet the Minds Behind Your Digital Success</h2>
              </div>
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Jordan Lee</h4>
                      <span className="title">Lead Developer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Chloe Tan</h4>
                      <span className="title">Project Manager</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Daniel Cruz</h4>
                      <span className="title">Technical Architect</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Olivia Bennett</h4>
                      <span className="title">UX/UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Daniel White</h4>
                      <span className="title">DevOps Engineer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <div className="image-team">
                      <img
                        src="/marko-digital-marketing-agency-html/image/dummy-img-600x800.jpg"
                        alt="Team Image"
                        className="img-fluid"
                      />
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
                      <h4>Chloe Ramirez</h4>
                      <span className="title">Frontend Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer"></div>
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
                  <h3 className="title-heading">Trusted by Organizations Across Suriname</h3>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column ps-xl-3 ps-0">
                  <p>
                    We've partnered with government agencies, enterprises, and SMEs across Suriname to deliver secure,
                    scalable digital solutions that drive real results and transform how organizations operate.
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
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-7.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-6.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-8.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-2.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-1.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <div className="partner-slide">
                          <img
                            src="/marko-digital-marketing-agency-html/image/client-3.png"
                            alt="Client"
                            className="partner-logo img-fluid"
                          />
                        </div>
                      </a>
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
                <p>See How We Help Brands Grow</p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                <p>
                  Elevate your digital infrastructure with cutting-edge web development and modern tech solutions. Let's
                  build something exceptional together!
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
                      Discover how organizations like yours achieved digital transformation with Devmart's expert
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-8.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Devmart completely transformed our digital infrastructure! Their development expertise helped
                          us modernize operations and improve service delivery significantly."
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-11.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Devmart stands out. Their technical expertise and
                          commitment to quality gave us a competitive advantage."
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-12.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From concept to deployment, Devmart delivered exceptional results. Our platform now handles
                          complex operations smoothly and our users love it!"
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-13.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Devmart's expertise in enterprise systems helped us
                          build a reliable digital foundation for growth."
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

export default TeamPage;
