import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Our Services</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Services</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Service */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div className="sub-heading align-self-center animate-box animated animate__animated" data-animate="animate__fadeInDown">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium animate-box animated animate__animated" data-animate="animate__fadeInDown">Digital Solutions That Drive Real Results</h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                <div className="col">
                  <div className="card card-service animate-box animated slow animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/Icon-7.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Social Media Marketing</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/social-media" className="btn btn-accent">
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
                  <div className="card card-service animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-F4LJ4W8.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Content Marketing</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/content" className="btn btn-accent">
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
                  <div className="card card-service animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/Icon-8.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>PPC Advertising</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/ppc" className="btn btn-accent">
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
                  <div className="card card-service animate-box animated slow animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/Icon-5.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Email Marketing</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/email" className="btn btn-accent">
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
                  <div className="card card-service animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/Icon-6.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Brading & Design</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/branding" className="btn btn-accent">
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
                  <div className="card card-service animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                      <div>
                        <div className="service-icon-wrapper">
                          <div className="service-icon">
                            <img src="/marko-digital-marketing-agency-html/image/Icon-4.png" alt="Service Icon" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="service-title">
                        <h4>Web Development</h4>
                      </div>
                    </div>
                    <p>Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.</p>
                    <Link to="/services/web-development" className="btn btn-accent">
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
            <div className="service-link-footer">
              <p>Need a custom solution? Let's create a strategy tailored for your business. <Link to="/contact">Get a Free Strategy Call</Link></p>
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

      {/* Section Pricing */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">Flexible Pricing Plans for Every Business</h2>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="pricing-container">
                  <div className="card card-pricing-title animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                    <div className="spacer"></div>
                    <div className="content">
                      <h3 className="title-heading">Let's Find the Right Strategy for You!</h3>
                      <div className="link-wrapper">
                        <Link to="/contact">Book a Free Consultation</Link>
                        <i className="fa-solid fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <h4>Starter</h4>
                    <p>Perfect for startups & small businesses</p>
                    <div className="d-flex flex-row gspace-1 align-items-center h-100">
                      <h3>$99</h3>
                      <p>/Month</p>
                    </div>
                    <a href="#" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                    <ul className="check-list">
                      <li><Link to="/services/social-media">Basic SEO & Marketing</Link></li>
                      <li><Link to="/services/social-media">Social Media Management (1 Platform)</Link></li>
                      <li><Link to="/services/social-media">Monthly Performance Report</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                  <div className="spacer"></div>
                  <h4>Enterprise</h4>
                  <p>Full scale marketing for maximum impact</p>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <h3>$399</h3>
                    <p>/Month</p>
                  </div>
                  <a href="#" className="btn btn-accent">
                    <div className="btn-title">
                      <span>View Details</span>
                    </div>
                    <div className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
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
                      <a href="#">Customized Growth Strength</a>
                    </div>
                  </div>
                  <ul className="check-list">
                    <li><a href="#">Complate Digital Marketing Suite</a></li>
                    <li><a href="#">Paid Ads Management</a></li>
                    <li><a href="#">Dedicated Account Manager</a></li>
                    <li><a href="#">Email Marketing & Automation</a></li>
                    <li><a href="#">Dedicated Account Manager</a></li>
                    <li><a href="#">Weekly Performance insights</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="pricing-container">
                  <div className="card pricing-highlight-box animate-box animated animate__animated" data-animate="animate__fadeInRight">
                    <div className="d-flex flex-column gspace-2 w-100">
                      <h5>Your Growth, Our Priority!</h5>
                      <div className="d-flex flex-column gspace-2">
                        <div className="pricing-highlights">
                          <a href="#">Data-Driven Digital Marketing</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <a href="#">Proven Strategies for Higher</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <a href="#">Scalable Solution for Every Business</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="spacer"></div>
                  </div>
                  <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <h4>Growth</h4>
                    <p>Best for growing businesses ready</p>
                    <div className="d-flex flex-row gspace-1 align-items-center h-100">
                      <h3>$299</h3>
                      <p>/Month</p>
                    </div>
                    <a href="#" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                    <ul className="check-list">
                      <li><Link to="/services/social-media">Basic SEO & Marketing</Link></li>
                      <li><Link to="/services/social-media">Social Media Management (1 Platform)</Link></li>
                      <li><Link to="/services/social-media">Monthly Performance Report</Link></li>
                    </ul>
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

export default ServicesPage;
