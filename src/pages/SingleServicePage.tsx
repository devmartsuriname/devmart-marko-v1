import { Link } from "react-router-dom";

const SingleServicePage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Social Media Marketing</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Services Details</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Service Details */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col">
                <div className="d-flex flex-column gspace-2">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Our Expertise</span>
                  </div>
                  <h2 className="title-heading">Boost Your Brand with Strategic Social Media Marketing</h2>
                  <p>Maximize engagement, build loyal communities, and drive conversions across all major platforms lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                  <h5>Service Overview</h5>
                  <p>At Marko, we help brands grow through data-driven social media strategies that connect with audiences and deliver measurable results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServicePage;
