import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Frequently Asked Questions</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">FAQ</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column text-center gspace-3">
            <div className="sub-heading align-self-center">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Simple, Direct, and Friendly</span>
            </div>
            <h2 className="title-heading">Got Questions? We've Got Answers.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
