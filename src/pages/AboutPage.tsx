import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">About Marko</h2>
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
                <p>At Marko, we specialize in crafting innovative digital marketing strategies that drive real business growth. Our expertise ensures your brand stays ahead in the competitive digital landscape.</p>
                <p>Get to know the passionate team behind the strategies, the values that guide us, and the mission that fuels our growth.</p>
                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link to="/services/ppc">PPC & Paid Ads</Link></li>
                      <li><Link to="/services/branding">Brand Strategy</Link></li>
                      <li><Link to="/services/conversion">Conversion Optimization</Link></li>
                    </ul>
                  </div>
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link to="/services/performance">Performance Marketing</Link></li>
                      <li><Link to="/services/social-media">Social Media Growth</Link></li>
                      <li><Link to="/services/content">Content Marketing</Link></li>
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

export default AboutPage;
