import { Link } from "react-router-dom";

const CaseStudiesPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Case Studies</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Case Studies</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Case Studies */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column text-center gspace-2">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Case Studies</span>
              </div>
              <h2 className="title-heading">See How We Help Businesses Thrive</h2>
              <p>We don't just talk about results—we deliver them. Here are some of our most impactful case studies showcasing how our digital marketing strategies drive success.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
