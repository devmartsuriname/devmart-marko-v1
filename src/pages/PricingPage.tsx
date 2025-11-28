import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Pricing Plan</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Pricing Plan</p>
              </nav>
            </div>
            <div className="spacer"></div>
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
                    <Link to="/single-service" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <ul className="check-list">
                      <li><Link to="/single-service">Basic SEO & Marketing</Link></li>
                      <li><Link to="/single-service">Social Media Management (1 Platform)</Link></li>
                      <li><Link to="/single-service">Monthly Performance Report</Link></li>
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
                  <Link to="/single-service" className="btn btn-accent">
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
                    <Link to="/single-service" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <ul className="check-list">
                      <li><Link to="/single-service">Basic SEO & Marketing</Link></li>
                      <li><Link to="/single-service">Social Media Management (1 Platform)</Link></li>
                      <li><Link to="/single-service">Monthly Performance Report</Link></li>
                    </ul>
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
                    <p>Our streamlined process ensures your digital growth is seamless and effective. ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis.</p>
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
                            <img src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-N952ZWA.png" alt="Digital Process Icon" className="process-icon" />
                          </div>
                          <span>01</span>
                        </div>
                        <div className="d-flex flex-column gspace-2">
                          <h5>Discovery & Consult</h5>
                          <p>Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis</p>
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
                            <p>Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis</p>
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
                            <p>Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis</p>
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
                            <p>Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis</p>
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
                    <h4 className="chooseus-title">Data-Driven Approach</h4>
                    <p>Every decision is backed by real-time analytics for maximum impact lorem ipsum dolor sit  consectetur adipiscing elit ut elit tellus luctus nec.</p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus  animate-box animated animate__animated" data-animate="animate__fadeInLeft">
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
                    <h4 className="chooseus-title">Creative & Innovative</h4>
                    <p>Cutting-edge marketing techniques to keep you ahead of the competition lorem ipsum dolor sit awsa consectetur adipiscing elit ut elit.</p>
                    <div className="link-wrapper">
                      <a href="#">Read More</a>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus  animate-box animated slow animate__animated" data-animate="animate__fadeInLeft">
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
                    <h4 className="chooseus-title">Transparent Reporting</h4>
                    <p>Clear insights and performance tracking, so you always know your ROI lorem ipsum dolo consectetur adipiscing elit ut elit tellus luctus nec.</p>
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
                  <div className="sub-heading  animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Why Choose Marko</span>
                  </div>
                  <h2 className="title-heading  animate-box animated animate__animated" data-animate="animate__fadeInDown">Your Success is Our Mission</h2>
                  <p className="mb-0 animate-box animated animate__animated" data-animate="animate__fadeInDown">In the fast-paced digital world, choosing the right marketing partner makes all the difference. At Marko, we don't just create campaigns—we craft strategies that deliver measurable success.</p>
                </div>
                <div className="image-container">
                  <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Why Choose Us Image" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>    
                      <div className="chooseus-cta-spacer-wrapper">
                        <div className="card card-chooseus-cta animate-box animated animate__animated" data-animate="animate__fadeInUp">
                          <h5>Partner with Marko & take your brand to the next level.</h5>
                          <div className="link-wrapper">
                            <Link to="/contact">Let's Talk Strategy</Link>
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
    </>
  );
};

export default PricingPage;
