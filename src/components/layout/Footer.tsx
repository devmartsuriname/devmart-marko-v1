import { Link } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";
import { FOOTER_LINK_GROUPS } from "@/config/navigation";

const Footer = () => {
  const { getSetting } = useSettings();
  
  // Get link groups from config
  const companyLinks = FOOTER_LINK_GROUPS.find(g => g.title === "Company")?.links || [];
  const serviceLinks = FOOTER_LINK_GROUPS.find(g => g.title === "Services")?.links || [];
  const legalLinks = FOOTER_LINK_GROUPS.find(g => g.title === "Legal")?.links || [];

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
                        {companyLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col col-xl-3">
                    <div className="footer-services-container">
                      <h5>Services</h5>
                      <ul className="footer-list">
                        {serviceLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>{link.label}</Link>
                          </li>
                        ))}
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
                            <a href={getSetting("youtube_url", "https://youtube.com")} className="social-item" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href={getSetting("instagram_url", "https://instagram.com")} className="social-item" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </div>
                          <div className="social-item-wrapper">
                            <a href={getSetting("linkedin_url", "https://linkedin.com")} className="social-item" target="_blank" rel="noopener noreferrer">
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
                  {legalLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="legal-link">
                      {link.label}
                    </Link>
                  ))}
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
