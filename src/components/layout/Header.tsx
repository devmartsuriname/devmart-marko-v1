import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";
import { MAIN_NAV_ITEMS } from "@/config/navigation";

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

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-xl">
          <div className="navbar-container">
            <div className="logo-container">
              <Link className="navbar-brand" to="/">
                <img src="/marko-digital-marketing-agency-html/image/devmart-logo.png" className="site-logo img-fluid" alt={`${getSetting("site_name", "Devmart Suriname")} Logo`} width="150" height="50" decoding="async" />
              </Link>
            </div>
            <button className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {MAIN_NAV_ITEMS.filter(item => !item.isCTA).map((item) => (
                  <li className={`nav-item ${item.hasDropdown ? 'dropdown' : ''}`} key={item.href}>
                    {item.hasDropdown && item.children ? (
                      <>
                        <a 
                          className={`nav-link dropdown-toggle ${isActive(item.href) ? 'active' : ''}`} 
                          href="#" 
                          role="button" 
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          {item.label} <i className="fa-solid fa-angle-down accent-color"></i>
                        </a>
                        <ul className="dropdown-menu">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link className="dropdown-item" to={child.href}>{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link 
                        className={`nav-link ${isActive(item.href) ? 'active' : ''}`} 
                        to={item.href}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-action-container">
              <div className="navbar-action-button">
                <button id="themeSwitch" className="themeswitch" aria-label="Toggle Theme">
                  <i id="themeIcon" className="fas fa-moon"></i>
                </button>
              </div>
              <div className="navbar-icon-wrapper">
                <Link to="/contact" className="d-flex align-items-center text-decoration-none">
                  <div className="icon-circle">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <h6>{getSetting("contact_phone", "+597 854-1211")}</h6>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
