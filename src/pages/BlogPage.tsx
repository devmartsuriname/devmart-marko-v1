import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Our Blog</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Blog</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Blog */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5 m-0">
              <div className="col col-xl-8 ps-0 pe-0">
                <div className="d-flex flex-column gspace-2 animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Insights & Trends</span>
                  </div>
                  <h2 className="title-heading">Latest Digital Marketing Strategies & Tips</h2>
                </div>
              </div>
              <div className="col col-xl-4 ps-0 pe-0">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <p>Explore our latest blog articles covering industry trends, expert insights, and actionable strategies to elevate your digital marketing game.</p>
                  <div className="link-wrapper">
                    <Link to="/blog">View All Articles</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
              <div className="col">
                <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp" onClick={() => window.location.href='/blog/instagram-facebook-ads'}>
                  <div className="blog-image">
                    <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Blog Image" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row gspace-2">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data">April 14, 2025</span>
                      </div>
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-folder accent-color"></i>
                        <span className="meta-data">Social Media</span>
                      </div>
                    </div>
                    <Link to="/blog/instagram-facebook-ads" className="blog-link">Mastering Instagram and Facebook Ads</Link>
                    <p>Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
                    <Link to="/blog/instagram-facebook-ads" className="read-more">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp" onClick={() => window.location.href='/blog/growth-strategies'}>
                  <div className="blog-image">
                    <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Blog Image" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row gspace-2">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data">April 14, 2025</span>
                      </div>
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-folder accent-color"></i>
                        <span className="meta-data">SEO</span>
                      </div>
                    </div>
                    <Link to="/blog/growth-strategies" className="blog-link">Growth Strategies for Digital Business</Link>
                    <p>Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
                    <Link to="/blog/growth-strategies" className="read-more">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
