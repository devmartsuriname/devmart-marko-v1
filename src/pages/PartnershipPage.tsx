import { Link } from "react-router-dom";

const PartnershipPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Partnership</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Partnership</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Partnership */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column text-center gspace-3">
            <div className="sub-heading align-self-center">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Client & Partnership</span>
            </div>
            <h2 className="title-heading">Strong Partnerships, Proven Success</h2>
            <p>See How We Help Brands Grow</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipPage;
