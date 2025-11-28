import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Contact Us</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Contact Us</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 g-5">
            <div className="col col-xl-5">
              <div className="contact-title-wrapper">
                <div className="card contact-title">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Reach out to us</span>
                  </div>
                  <h2 className="title-heading">Get in Touch</h2>
                  <p>Reach out to us for tailored web development solutions that deliver reliable results for your organization.</p>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-phone-volume accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Phone Number</span>
                      <h5>+597 854-1211</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-envelope accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Email Address</span>
                      <h5>info@devmart.sr</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-location-dot accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Office Address</span>
                      <h5>Jagernath Lachmon straat nr. 152, Paramaribo, Suriname</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-7">
              <div id="success-message" className="alert success hidden">
                <span className="check-icon"><i className="fa-solid fa-2xl fa-check"></i></span>
                <p>Thank you! Form submitted successfully.</p>
              </div>

              <div id="error-message" className="alert error hidden">
                <span className="cross-icon"><i className="fa-solid fa-2xl fa-xmark"></i></span>
                <p>Oops! Form submission failed. Please try again.</p>
              </div>
              <div className="form-layout-wrapper">
                <div className="card form-layout">
                  <h3 className="title-heading">Let's Talk About Your Next Project</h3>
                  <form id="contactForm" className="form">
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input type="text" name="first-name" id="first-name" placeholder="First Name" />
                      </div>
                      <div className="col">
                        <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input type="email" name="email" id="email" placeholder="Email Address" required />
                      </div>
                      <div className="col">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <textarea name="message" id="message" rows={5} placeholder="Message"></textarea>
                    <div className="form-button-container">
                      <button type="submit" className="btn btn-accent">
                        <span className="btn-title">
                          <span>Send a Message</span>
                        </span>
                        <span className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Maps */}
      <div className="section pt-0">
        <div className="hero-container">
          <iframe loading="lazy" className="maps overflow-hidden"
            src="https://maps.google.com/maps?q=Jagernath+Lachmon+straat+nr.+152,+Paramaribo,+Suriname&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Devmart - Jagernath Lachmon straat nr. 152, Paramaribo, Suriname" aria-label="Devmart - Jagernath Lachmon straat nr. 152, Paramaribo, Suriname">
          </iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
