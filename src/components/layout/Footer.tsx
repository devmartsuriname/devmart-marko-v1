import { Link } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";

const Footer = () => {
  const { getSetting } = useSettings();
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
                        <img src="/marko-digital-marketing-agency-html/image/devmart-logo.png" alt={`${getSetting("site_name", "Devmart Suriname")} Logo`} className="site-logo img-fluid" />
                      </div>
                      <h4>{getSetting("tagline", "Delivering Reliable Web Solutions with Innovation & Precision")}</h4>
                      <p>
                        Devmart specializes in building custom web applications, government portals, enterprise systems, and AI-powered tools. Based in Suriname, we deliver excellence across the Caribbean and beyond.
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
                        <li><Link to="/services/web-development">Web Development</Link></li>
                        <li><Link to="/services/government-portals">Government Portals</Link></li>
                        <li><Link to="/services/enterprise-systems">Enterprise Systems</Link></li>
                        <li><Link to="/services/mobile-apps">Mobile Applications</Link></li>
                        <li><Link to="/services/ai-tools">AI-Powered Tools</Link></li>
                        <li><Link to="/services/cloud-solutions">Cloud Solutions</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-xl-3">
                    <div className="footer-contact-container">
                      <h5>Contact Info</h5>
                      <ul className="contact-list">
                        <li>{getSetting("contact_email", "info@devmart.sr")}</li>
                        <li>{getSetting("contact_phone", "+597 854-1211")}</li>
                        <li>{getSetting("contact_address", "Jagernath Lachmon straat nr. 152, Paramaribo, Suriname")}</li>
                      </ul>
                      <div className="d-flex flex-column gspace-1">
                        <h5>Social Media</h5>
                        <div className="social-container">
                          <div className="social-item-wrapper">
                            <a href={getSetting("facebook_url", "https://www.facebook.com/DevmartSuriname/")} className="social-item" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href="https://youtube.com" className="social-item">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href={getSetting("instagram_url", "https://instagram.com")} className="social-item">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href={getSetting("linkedin_url", "https://linkedin.com")} className="social-item">
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
                <span className="copyright">{getSetting("copyright_text", "© 2025 Devmart Suriname. All Rights Reserved.")}</span>
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
