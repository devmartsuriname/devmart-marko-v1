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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
