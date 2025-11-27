import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="section-footer">
        <div className="bg-footer-wrapper">
          <div className="bg-footer">
            <div className="hero-container position-relative z-2">
              <div className="d-flex flex-column gspace-2">
                <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                  <div className="col col-xl-4">
                    <div className="footer-logo-container">
                      <div className="logo-container-footer">
                        <img src="/marko-digital-marketing-agency-html/image/marko-logo.png" alt="Logo" className="site-logo img-fluid" />
                      </div>
                      <h4>Driving Digital Growth with Innovation & Strategy</h4>
                      <p>
                        Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
                      </p>
                    </div>
                  </div>
                  <div className="col col-xl-2">
                    <div className="footer-quick-links">
                      <h5>Quick Links</h5>
                      <ul className="footer-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/case-studies">Case Studies</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-xl-3">
                    <div className="footer-services-container">
                      <h5>Services</h5>
                      <ul className="footer-list">
                        <li><Link to="/services/social-media">Social Media Marketing</Link></li>
                        <li><Link to="/services/seo">SEO Optimization</Link></li>
                        <li><Link to="/services/ppc">PPC Advertising</Link></li>
                        <li><Link to="/services/content">Content Marketing</Link></li>
                        <li><Link to="/services/branding">Branding Strategy</Link></li>
                        <li><Link to="/services/email">Email Marketing</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-xl-3">
                    <div className="footer-contact-container">
                      <h5>Contact Info</h5>
                      <ul className="contact-list">
                        <li>hello@markoagency.com</li>
                        <li>+1 234 567 890</li>
                        <li>123 Digital Street, New York, USA</li>
                      </ul>
                      <div className="d-flex flex-column gspace-1">
                        <h5>Social Media</h5>
                        <div className="social-container">
                          <div className="social-item-wrapper">
                            <a href="https://facebook.com" className="social-item">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href="https://youtube.com" className="social-item">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href="https://instagram.com" className="social-item">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href="https://linkedin.com" className="social-item">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-content-spacer"></div>
              </div>
              <div className="copyright-container">
                <span className="copyright">© 2025 Marko. Fox Creation All Rights Reserved.</span>
                <div className="d-flex flex-row gspace-2">
                  <a href="#" className="legal-link">Terms of Service</a>
                  <a href="#" className="legal-link">Privacy Policy</a>
                </div>
              </div>
              <div className="footer-spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
