import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
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
          />
          <div className="hero-container position-relative">
            <div className="d-flex flex-column gspace-2">
              <h1
                className="title-heading-banner animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                Build Powerful Digital Solutions That Drive Results
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
                    Devmart empowers businesses and government with modern web apps, AI-powered tools, and
                    enterprise-grade systems built in Suriname.
                  </p>
                  <div className="d-flex flex-md-row flex-column justify-content-center justify-content-xl-start align-self-center align-self-xl-start gspace-3">
                    <Link to="/about" className="btn btn-accent">
                      <div className="btn-title">
                        <span>Book a Call</span>
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
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div key={num} className="swiper-slide">
                        <a href="#">
                          <div className="partner-slide">
                            <img
                              src={`/marko-digital-marketing-agency-html/image/client-${num}.png`}
                              alt="Client"
                              className="partner-logo img-fluid"
                            />
                          </div>
                        </a>
                      </div>
                    ))}
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
                <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                <p>
                  Upgrade your digital infrastructure with modern web applications, secure portals, and AI-powered
                  tools. Let's build something powerful together.
                </p>
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
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                <div className="col">
                  <div
                    className="card card-service animate-box animated slow animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/Icon-7.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Custom Web Applications</h4>
                      </div>
                    </div>
                    <p>
                      Modern web apps built with React and Supabase for scalability, real-time features, and seamless
                      user experiences.
                    </p>
                    <Link to="/services/web-applications" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card card-service animate-box animated animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-F4LJ4W8.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Government Portals</h4>
                      </div>
                    </div>
                    <p>
                      Secure, compliant government systems for citizen services, case management, and public
                      administration.
                    </p>
                    <Link to="/services/government-portals" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card card-service animate-box animated fast animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/Icon-8.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Enterprise Systems</h4>
                      </div>
                    </div>
                    <p>
                      Internal tools, dashboards, and business platforms tailored for large organizations and complex
                      workflows.
                    </p>
                    <Link to="/services/enterprise-systems" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card card-service animate-box animated slow animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/Icon-5.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>AI-Powered Tools</h4>
                      </div>
                    </div>
                    <p>
                      Intelligent automation, document processing, and AI-assisted features to streamline operations.
                    </p>
                    <Link to="/services/ai-tools" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card card-service animate-box animated animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/Icon-6.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>UX/UI Design</h4>
                      </div>
                    </div>
                    <p>User-centered design for intuitive interfaces that delight users and drive engagement.</p>
                    <Link to="/services/ux-ui-design" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card card-service animate-box animated fast animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img
                              src="/marko-digital-marketing-agency-html/image/Icon-4.png"
                              alt="Service Icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Maintenance & Support</h4>
                      </div>
                    </div>
                    <p>Ongoing updates, monitoring, and technical support to keep your systems running smoothly.</p>
                    <Link to="/services/maintenance-support" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
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
              <div className="d-flex flex-column flex-xl-row gspace-2">
                <div
                  className="card case-studies-content local-business animate-box animated fast animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                    <div className="cs-component">
                      <a href="#">React</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Supabase</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Portal</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Gov-Tech</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Forms</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">PDF</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Auth</a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gspace-2">
                    <a href="#" className="case-studies-title">
                      <h4>Housing Subsidy Application Portal</h4>
                    </a>
                    <p>
                      Streamlined application processing for 5,000+ citizens with automated eligibility checks and
                      real-time status tracking.
                    </p>
                  </div>
                </div>
                <div
                  className="card case-studies-content saas-leads animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="d-flex flex-column gspace-2">
                    <a href="#" className="case-studies-title">
                      <h4>Immigration Case Management System</h4>
                    </a>
                    <p>
                      Complete case workflow digitalization for 2,000+ applications per month with document management
                      and approval tracking.
                    </p>
                  </div>
                  <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                    <div className="cs-component">
                      <a href="#">Workflow</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Dashboard</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">CMS</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Documents</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Reports</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Multi-user</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Secure</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-xl-row gspace-2">
                <div
                  className="card case-studies-content ecommerce animate-box animated fast animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="case-studies-component small align-self-start justify-content-start align-items-start">
                    <div className="cs-component">
                      <a href="#">Website</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">CMS</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Responsive</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">SEO</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Accessibility</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Fast</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Secure</a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gspace-2">
                    <a href="#" className="case-studies-title">
                      <h4>High-Profile Government Website</h4>
                    </a>
                    <p>
                      Modern, accessible website meeting WCAG standards with multilingual support and content management
                      for public communications.
                    </p>
                  </div>
                </div>

                <div
                  className="card case-studies-content startup-branding animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="d-flex flex-column gspace-2">
                    <a href="#" className="case-studies-title">
                      <h4>SME Digital Transformation Platform</h4>
                    </a>
                    <p>
                      Custom business platform with CRM, inventory management, and reporting dashboards—driving 200%
                      operational efficiency improvement.
                    </p>
                  </div>
                  <div className="case-studies-component large align-self-start justify-content-start align-items-start">
                    <div className="cs-component">
                      <a href="#">SaaS</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Multi-tenant</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">API</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Real-time</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Analytics</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Integration</a>
                    </div>
                    <div className="cs-component">
                      <a href="#">Scalable</a>
                    </div>
                  </div>
                </div>
              </div>
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
                              <span className="profile-name">Sarah Williams</span>
                              <p className="profile-info">IT Director, Regional Authority</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Devmart built our housing subsidy portal from the ground up. The system handles thousands of
                          applications seamlessly, and our processing time was cut in half!"
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
                              <span className="profile-name">Michael Chen</span>
                              <p className="profile-info">Project Manager, Ministry</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many developers, but Devmart stands out. Their technical expertise and
                          reliability gave us confidence in delivering a mission-critical government system."
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
                              <span className="profile-name">Lisa Rodriguez</span>
                              <p className="profile-info">CEO, Regional Enterprise</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From concept to deployment, Devmart delivered our enterprise platform on time and on budget.
                          The ongoing support has been exceptional!"
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
                              <span className="profile-name">David Thompson</span>
                              <p className="profile-info">Director, Public Services</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Devmart's expertise in building secure portals
                          helped us modernize our operations and serve citizens better."
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
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Devmart completely transformed our digital infrastructure! Their technical expertise and
                          modern solutions helped us streamline operations and serve our customers better."
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
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many development teams before, but Devmart stands out. Their systematic
                          approach and technical excellence gave us confidence throughout the project."
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
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From design to deployment, Devmart delivered excellence at every stage. Our platform exceeded
                          expectations, and user adoption has been phenomenal!"
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
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Devmart's expertise in building scalable systems
                          helped us establish a robust digital foundation for growth."
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
              {/* Column 1: Consultation + Starter */}
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
                  <div
                    className="card card-pricing animate-box animated animate__animated"
                    data-animate="animate__fadeInUp"
                  >
                    <h4>Starter Website</h4>
                    <p>Perfect for businesses needing a web presence</p>
                    <div className="d-flex flex-row gspace-1 align-items-center h-100">
                      <h3>$99</h3>
                      <p>/Month</p>
                    </div>
                    <Link to="/pricing" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <ul className="check-list">
                      <li>
                        <Link to="/services">Single-Page Website</Link>
                      </li>
                      <li>
                        <Link to="/services">Basic SEO & Responsive Design</Link>
                      </li>
                      <li>
                        <Link to="/services">Contact Form</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 2: Enterprise (Highlighted) */}
              <div className="col">
                <div
                  className="card card-pricing pricing-highlight animate-box animated slow animate__animated"
                  data-animate="animate__fadeInUp"
                >
                  <div className="spacer"></div>
                  <h4>Government/Enterprise</h4>
                  <p>Full portal & application development</p>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <h3>$399</h3>
                    <p>/Month</p>
                  </div>
                  <Link to="/pricing" className="btn btn-accent">
                    <div className="btn-title">
                      <span>View Details</span>
                    </div>
                    <div className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
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
                  <ul className="check-list">
                    <li>
                      <a href="#">Complete Portal/App Development</a>
                    </li>
                    <li>
                      <a href="#">Admin Dashboard & CMS</a>
                    </li>
                    <li>
                      <a href="#">AI Features & Automation</a>
                    </li>
                    <li>
                      <a href="#">Multi-user & Role Management</a>
                    </li>
                    <li>
                      <a href="#">Dedicated Support Team</a>
                    </li>
                    <li>
                      <a href="#">Weekly Progress Reports</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Your Growth + Growth Plan */}
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
                    <h4>Business Platform</h4>
                    <p>Best for growing businesses</p>
                    <div className="d-flex flex-row gspace-1 align-items-center h-100">
                      <h3>$299</h3>
                      <p>/Month</p>
                    </div>
                    <Link to="/pricing" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <ul className="check-list">
                      <li>
                        <Link to="/services">Multi-Page Website</Link>
                      </li>
                      <li>
                        <Link to="/services">Custom Design & CMS Integration</Link>
                      </li>
                      <li>
                        <Link to="/services">Analytics & Reporting</Link>
                      </li>
                    </ul>
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
                    Get updates on AI tools, government digitalization, and digital product insights delivered to your
                    inbox.
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
              <div className="col">
                <div
                  className="card card-blog animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                  onClick={() => (window.location.href = "/blog/instagram-facebook-ads")}
                >
                  <div className="blog-image">
                    <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Blog Image" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row gspace-2">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data">April 14, 2025</span>
                      </div>
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-folder accent-color"></i>
                        <span className="meta-data">Social Media</span>
                      </div>
                    </div>
                    <Link to="/blog/ai-government-services" className="blog-link">
                      How AI is Transforming Government Services
                    </Link>
                    <p>
                      Exploring how artificial intelligence is revolutionizing public sector operations, from automated
                      document processing to predictive analytics for policy planning.
                    </p>
                    <Link to="/blog/ai-government-services" className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card card-blog animate-box animated animate__animated"
                  data-animate="animate__fadeInUp"
                  onClick={() => (window.location.href = "/blog/secure-enterprise-portals")}
                >
                  <div className="blog-image">
                    <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Blog Image" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row gspace-2">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data">April 14, 2025</span>
                      </div>
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-folder accent-color"></i>
                        <span className="meta-data">Security</span>
                      </div>
                    </div>
                    <Link to="/blog/secure-enterprise-portals" className="blog-link">
                      Building Secure Portals for Enterprise
                    </Link>
                    <p>
                      Best practices for developing enterprise-grade portals with robust authentication, encryption, and
                      compliance standards for sensitive data handling.
                    </p>
                    <Link to="/blog/secure-enterprise-portals" className="read-more">
                      Read More
                    </Link>
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

export default HomePage;
