import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Testimonials</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Testimonials</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Testimonials */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column text-center gspace-3">
            <h2 className="title-heading">What Our Client Says</h2>
            <p>Hear from Our Satisfied Clients, Real Success Stories</p>
            <p>Discover how businesses like yours achieved outstanding growth with Marko's expert digital marketing solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
