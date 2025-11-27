import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="section-banner">
      <div className="banner-layout-wrapper-404">
        <div className="banner-layout-404">
          <div className="d-flex flex-column text-center align-items-center gspace-2">
            <h1 className="text-404 animate-box animated animate__animated" data-animate="animate__fadeInUp">404</h1>
            <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInDown">Oops! Page Not Found</h2>
            <p className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
              We couldn't find the page you're looking for. It might have been removed, renamed, or never existed.
            </p>
            <Link to="/" className="btn btn-accent animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="btn-title">
                <span>Back to Home</span>
              </div>
              <div className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
