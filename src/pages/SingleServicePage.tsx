import { Link } from "react-router-dom";

const SingleServicePage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Custom Web Applications
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">Services Details</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div className="section pb-0">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="image-container">
              <img
                src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"
                alt="Service Image"
                className="single-service-img"
              />
              <div className="single-service-title-layout">
                <div className="">
                  <div className="single-service-spacer"></div>
                  <div className="single-service-title-wrapper">
                    <div className="single-service-title">
                      <div
                        className="sub-heading animate-box animated slow animate__animated"
                        data-animate="animate__fadeInRight"
                      >
                        <i className="fa-regular fa-circle-dot"></i>
                        <span>Our Expertise</span>
                      </div>
                      <h3
                        className="title-heading animate-box animated animate__animated"
                        data-animate="animate__fadeInRight"
                      >
                        Build Powerful Applications with Modern Web Development
                      </h3>
                      <p>
                        Create custom, scalable web applications using modern tech stacks like React and Supabase.
                        Deliver exceptional user experiences and transform how your organization operates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-service-spacer"></div>
              </div>
            </div>

            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-8">
                <div className="d-flex flex-column gspace-2">
                  <h4>Overview</h4>
                  <p>
                    At Devmart, we help organizations grow through custom-tailored web applications that solve real
                    business problems. From concept to deployment, we build scalable solutions using React, Supabase,
                    and modern development practices. Whether you're launching a new digital service or modernizing an
                    existing system, our experts turn your vision into reality.
                  </p>
                  <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                    <div className="col">
                      <div className="image-container">
                        <img
                          src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"
                          alt="Service Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="image-container">
                        <img
                          src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"
                          alt="Service Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card service-included">
                    <h4>What's Included</h4>
                    <div className="underline-accent-short"></div>
                    <p>
                      Our comprehensive web development service covers everything you need to launch and maintain a
                      successful digital platform.
                    </p>
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col">
                        <ul className="check-list">
                          <li>Custom API Development</li>
                          <li>Database Design & Integration</li>
                          <li>Authentication & Authorization</li>
                          <li>Responsive Frontend Design</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="check-list">
                          <li>Performance Optimization</li>
                          <li>Security Best Practices</li>
                          <li>Deployment & Hosting Setup</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4>Why Choose Devmart for Web Development?</h4>
                  <p>
                    We combine technical excellence with a deep understanding of your business needs, delivering
                    solutions that are both powerful and user-friendly.
                  </p>
                  <div className="row row-cols-2">
                    <div className="col">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Modern Tech Stack</h5>
                            <p>React, TypeScript, Supabase, and cutting-edge tools</p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Dedicated Team</h5>
                            <p>Expert developers, designers, and project managers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Scalable Solutions</h5>
                            <p>Built to grow with your organization's needs</p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Security First</h5>
                            <p>Government-grade security and compliance standards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-4">
                <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-5">
                  <div className="card service-recent">
                    <h4>Recent Services</h4>
                    <div className="underline-accent-short"></div>
                    <ul className="single-service-list">
                      <li>
                        <Link to="/services/social-media">Custom Web Applications</Link>
                      </li>
                      <li>
                        <Link to="/services/content">Government Portals</Link>
                      </li>
                      <li>
                        <Link to="/services/ppc">Enterprise Systems</Link>
                      </li>
                      <li>
                        <Link to="/services/email">AI-Powered Tools</Link>
                      </li>
                      <li>
                        <Link to="/services/branding">UX/UI Design</Link>
                      </li>
                      <li>
                        <Link to="/services/web-development">Maintenance & Support</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="cta-service-banner">
                    <div className="spacer"></div>
                    <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                    <p>
                      Elevate your digital infrastructure with cutting-edge web development and modern tech solutions.
                      Let's build something exceptional together!
                    </p>
                    <div className="link-wrapper">
                      <Link to="/about">Read More</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    Get exclusive tech insights, development tips, and innovation updates delivered straight to your
                    inbox. Subscribe now!
                  </p>
                </div>
                <div id="newsletter-success" className="alert success hidden">
                  <span className="check-icon">
                    <i className="fa-solid fa-2xl fa-check"></i>
                  </span>
                  <p className="text-center">Thank you! Form submitted successfully.</p>
                </div>
                <div id="newsletter-error" className="alert error hidden">
                  <span className="cross-icon">
                    <i className="fa-solid fa-2xl fa-xmark"></i>
                  </span>
                  <p className="text-center">Oops! Form submission failed. Please try again.</p>
                </div>
                <form
                  action="./php/newsletter_process.php"
                  method="POST"
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
                      required
                    />
                    <p className="error-text hidden"></p>
                  </div>
                  <button className="btn btn-accent" type="submit">
                    <span className="btn-title">
                      <span>Subscribe</span>
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
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        What services does Devmart offer?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>
                          We specialize in web development, including custom applications, government portals,
                          enterprise systems, AI-powered tools, and ongoing maintenance and support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="true"
                        aria-controls="faq2"
                      >
                        How long does it take to see results?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>
                          While initial setup varies, most web applications show progress within 2-3 months, with full
                          deployment typically completed in 3-6 months depending on complexity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        Do you work with businesses of all sizes?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>
                          Yes! We work with government agencies, enterprises, SMEs, and startups across various sectors
                          in Suriname and beyond.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Can I request a custom development package?
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
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        How do I know which service is right for me?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>
                          During our initial consultation, we'll assess your requirements and recommend the best
                          technical approach based on your goals and constraints.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                        aria-expanded="false"
                        aria-controls="faq6"
                      >
                        Do you provide monthly performance reports?
                      </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>
                          Yes. Every month, you'll receive a clear and comprehensive report outlining progress, key
                          metrics, and next steps.
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

export default SingleServicePage;
