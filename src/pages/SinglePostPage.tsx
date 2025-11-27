import { Link } from "react-router-dom";

const SinglePostPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Growth Strategies for Digital Businesses</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Single Post</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Post Content */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-3">
            <div className="d-flex flex-row gspace-2">
              <div className="d-flex flex-row gspace-1 align-items-center">
                <i className="fa-solid fa-calendar accent-color"></i>
                <span className="meta-data">April 14, 2025</span>
              </div>
              <div className="d-flex flex-row gspace-1 align-items-center">
                <i className="fa-solid fa-folder accent-color"></i>
                <span className="meta-data">Digital Marketing</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
