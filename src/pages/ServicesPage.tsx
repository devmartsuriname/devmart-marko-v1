import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublishedServices, type Service } from "@/integrations/supabase/queries/services";

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      setIsLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await getPublishedServices();
      
      if (fetchError) {
        console.error("Error fetching services:", fetchError);
        setError("Unable to load services. Please try again later.");
      } else {
        setServices(data || []);
      }
      
      setIsLoading(false);
    }
    
    fetchServices();
  }, []);

  const getAnimationSpeed = (index: number): string => {
    const speeds = ["slow", "", "fast"];
    return speeds[index % 3];
  };

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
                {isLoading ? (
                  // Loading skeleton - 6 placeholder cards matching the grid
                  Array.from({ length: 6 }).map((_, index) => (
                    <div className="col" key={`skeleton-${index}`}>
                      <div className={`card card-service animate-box animated ${getAnimationSpeed(index)} animate__animated`} data-animate="animate__fadeInLeft">
                        <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                          <div>
                            <div className="service-icon-wrapper">
                              <div className="service-icon" style={{ opacity: 0.5 }}>
                                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.1)', borderRadius: 8 }} />
                              </div>
                            </div>
                          </div>
                          <div className="service-title">
                            <h4 style={{ opacity: 0.5 }}>Loading...</h4>
                          </div>
                        </div>
                        <p style={{ opacity: 0.5 }}>Loading service information...</p>
                        <span className="btn btn-accent" style={{ pointerEvents: 'none', opacity: 0.5 }}>
                          <div className="btn-title"><span>View Details</span></div>
                          <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                        </span>
                      </div>
                    </div>
                  ))
                ) : error ? (
                  // Error state - subtle message within grid area
                  <div className="col-12 text-center py-4">
                    <p className="text-muted">{error}</p>
                  </div>
                ) : services.length === 0 ? (
                  // Empty state
                  <div className="col-12 text-center py-4">
                    <p className="text-muted">No services available at the moment.</p>
                  </div>
                ) : (
                  // Dynamic services from database
                  services.map((service, index) => (
                    <div className="col" key={service.id}>
                      <div className={`card card-service animate-box animated ${getAnimationSpeed(index)} animate__animated`} data-animate="animate__fadeInLeft">
                        <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                          <div>
                            <div className="service-icon-wrapper">
                              <div className="service-icon">
                                <img 
                                  src={service.icon || "/marko-digital-marketing-agency-html/image/Icon-7.png"} 
                                  alt={`${service.name} Icon`} 
                                  className="img-fluid" 
                                />
                              </div>
                            </div>
                          </div>
                          <div className="service-title">
                            <h4>{service.name}</h4>
                          </div>
                        </div>
                        <p>{service.short_description || service.description}</p>
                        <Link to={`/services/${service.slug}`} className="btn btn-accent">
                          <div className="btn-title"><span>View Details</span></div>
                          <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="service-link-footer">
              <p>Need a custom solution? Let's create a digital platform tailored for your organization. <Link to="/contact">Get a Free Consultation</Link></p>
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
                  <h4>Starter Website</h4>
                  <p>Perfect for small businesses & startups</p>
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
                      <li><Link to="/services/social-media">Modern Tech Stack (React + Supabase)</Link></li>
                      <li><Link to="/services/social-media">Responsive Design</Link></li>
                      <li><Link to="/services/social-media">Basic Maintenance & Support</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                  <div className="spacer"></div>
                  <h4>Government/Enterprise</h4>
                  <p>Large-scale systems for maximum impact</p>
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
                    <li><a href="#">Complete Full-Stack Development</a></li>
                    <li><a href="#">Advanced Security Features</a></li>
                    <li><a href="#">Dedicated Project Manager</a></li>
                    <li><a href="#">AI Integration & Automation</a></li>
                    <li><a href="#">Priority Support 24/7</a></li>
                    <li><a href="#">Weekly Progress Reports</a></li>
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
                          <a href="#">Modern Tech Stack (React + Supabase)</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <a href="#">Government-Grade Security</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <a href="#">Scalable Solutions for Every Organization</a>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="spacer"></div>
                  </div>
                  <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <h4>Business Platform</h4>
                  <p>Best for growing organizations</p>
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
                      <li><Link to="/services/social-media">Full-Stack Web Development</Link></li>
                      <li><Link to="/services/social-media">Database & API Integration</Link></li>
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
