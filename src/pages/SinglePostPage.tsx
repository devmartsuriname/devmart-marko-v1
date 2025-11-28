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

      {/* Section Post */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col col-xl-4 order-2 order-xl-1">
              <div className="d-flex flex-column flex-md-row flex-xl-column gspace-5">
                <div className="card recent-post">
                  <h4>Recent Blog</h4>
                  <div className="d-flex flex-row w-100 gspace-1">
                    <div className="image-container">
                      <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Recent Post" className="img-fluid" />
                    </div>
                    <div className="d-grid">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data-post">April 14, 2025</span>
                      </div>
                      <Link to="/single-post" className="blog-link-post">How AI is Transforming Government Services</Link>
                    </div>
                  </div>
                  <div className="d-flex flex-row w-100 gspace-1">
                    <div className="image-container">
                      <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Recent Post" className="img-fluid" />
                    </div>
                    <div className="d-grid">
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-calendar accent-color"></i>
                        <span className="meta-data-post">April 14, 2025</span>
                      </div>
                      <Link to="/single-post" className="blog-link-post">Building Secure Portals for Enterprise</Link>
                    </div>
                  </div>
                </div>
                <div className="cta-service-banner">
                  <div className="spacer"></div>
                  <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                  <p>Elevate your digital infrastructure with cutting-edge web development and modern tech solutions. Let's build something exceptional together!</p>
                  <div className="link-wrapper">
                    <Link to="/about">Read More</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-8 order-1 order-xl-2">
              <div className="d-flex flex-column gspace-2">
                <div className="post-image">
                  <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Recent Post" className="img-fluid" />
                </div>
                <h3>How to Grow Your Digital Business</h3>
                <div className="underline-muted-full"></div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row align-items-center gspace-2">
                    <div className="d-flex flex-row gspace-1 align-items-center">
                      <i className="fa-solid fa-calendar accent-color"></i>
                      <span className="meta-data-post">March 27, 2025</span>
                    </div>
                    <div className="d-flex flex-row gspace-1 align-items-center">
                      <i className="fa-solid fa-folder accent-color"></i>
                      <span className="meta-data-post">SEO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-user accent-color"></i>
                    <span className="meta-data">Devmart Team</span>
                  </div>
                </div>
                <div>
                  <p>In today's fast-paced digital landscape, building robust web applications requires more than just coding skills. To achieve sustainable growth, organizations must implement well-architected solutions that prioritize user experience, security, and scalability. In this post, we'll explore actionable strategies to help your digital platform succeed.</p>
                  <p>Modern web applications are the foundation of digital transformation. Whether you're building a government portal, enterprise system, or custom business application, success requires thoughtful architecture, secure implementation, and ongoing optimization. The key is selecting the right technology stack—like React for dynamic interfaces and Supabase for scalable backend infrastructure—while maintaining focus on user needs and long-term maintainability.</p>
                </div>
                <div className="quote-container">
                  <div>
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                  <p className="quote">The best software is invisible—it simply works, solving real problems without getting in the way. Great development teams focus not on technology for its own sake, but on building tools that genuinely improve how organizations operate and serve their users.</p>
                  <div>
                    <h5>Sarah Johnson</h5>
                    <p className="quote-description">CTO, Tech Solutions</p>
                  </div>
                </div>
                <p>As digital platforms continue to evolve, the organizations that thrive will be those that invest in quality development practices from day one. By prioritizing clean architecture, comprehensive testing, and user-centered design, you create systems that not only meet today's needs but can adapt and scale for tomorrow's challenges. At Devmart, we're committed to helping organizations across Suriname achieve this level of digital excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
