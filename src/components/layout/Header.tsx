import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";

const Header = () => {
  const location = useLocation();
  const { getSetting } = useSettings();

  useEffect(() => {
    // Initialize theme switch
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$;
      
      let lightMode = localStorage.getItem('lightmode') === 'active';
      
      const updateLogos = () => {
        const siteLogos = $('.site-logo');
        
        if (lightMode) {
          $('body').addClass('lightmode');
          localStorage.setItem('lightmode', 'active');
          siteLogos.attr('src', '/marko-digital-marketing-agency-html/image/devmart-logo.png');
        } else {
          $('body').removeClass('lightmode');
          localStorage.removeItem('lightmode');
          siteLogos.attr('src', '/marko-digital-marketing-agency-html/image/devmart-logo.png');
        }
      };

      updateLogos();

      $('#themeSwitch').off('click').on('click', function () {
        lightMode = !lightMode;
        updateLogos();
        const iconClass = lightMode ? 'fa-sun' : 'fa-moon';
        $('#themeIcon').removeClass('fa-sun fa-moon').addClass(iconClass);
      });
    }
  }, []);

  return (
    <header>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-xl">
          <div className="navbar-container">
            <div className="logo-container">
              <Link className="navbar-brand" to="/">
                <img src="/marko-digital-marketing-agency-html/image/devmart-logo.png" className="site-logo img-fluid" alt={`${getSetting("site_name", "Devmart Suriname")} Logo`} />
              </Link>
            </div>
            <button className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services <i className="fa-solid fa-angle-down accent-color"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/services">Services</Link></li>
                    <li><Link className="dropdown-item" to="/services/social-media">Single Service</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages <i className="fa-solid fa-angle-down accent-color"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/case-studies">Case Studies</Link></li>
                    <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                    <li><Link className="dropdown-item" to="/partnership">Partnership</Link></li>
                    <li><Link className="dropdown-item" to="/pricing">Pricing Plan</Link></li>
                    <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                    <li><Link className="dropdown-item" to="/faq">FAQs</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${location.pathname.startsWith('/blog') ? 'active' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Archive <i className="fa-solid fa-angle-down accent-color"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                    <li><Link className="dropdown-item" to="/blog/sample-post">Single Post</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-action-container">
              <div className="navbar-action-button">
                <button id="themeSwitch" className="themeswitch" aria-label="Toggle Theme">
                  <i id="themeIcon" className="fas fa-moon"></i>
                </button>
              </div>
              <div className="navbar-icon-wrapper">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h6>{getSetting("contact_phone", "+597 854-1211")}</h6>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
