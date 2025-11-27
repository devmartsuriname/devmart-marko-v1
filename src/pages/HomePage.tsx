import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-video-container keep-dark animate-box animated animate__animated" data-animate="animate__fadeInUp">
          <div id="banner-video-background"></div>
          <div className="hero-container position-relative">
            <div className="d-flex flex-column gspace-2">
              <h1 className="title-heading-banner animate-box animated animate__animated" data-animate="animate__fadeInLeft">Amplify Your Brand with Cutting-Edge Digital Marketing</h1>
              <div className="banner-heading">
                <div className="banner-video-content order-xl-1 order-2 animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="d-flex flex-column flex-xl-row text-xl-start text-center align-items-center gspace-5">
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"><i className="fa-solid fa-play"></i></button>
                    <p>
                      Watch our video reviews and see how businesses achieve success with Marko's digital marketing solutions.
                    </p>
                  </div>
                </div>
                <div className="banner-content order-xl-2 order-1 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <p>Marko empowers businesses to grow online with data driven digital marketing, innovative branding, and performance focused strategies trusted by top brands lorem ipsum dolor sit amet consectetur.</p>
                  <div className="d-flex flex-md-row flex-column justify-content-center justify-content-xl-start align-self-center align-self-xl-start gspace-3">
                    <Link to="/about" className="btn btn-accent">
                      <div className="btn-title">
                        <span>Get Started</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <div className="banner-reviewer">
                      <div className="d-flex flex-row align-items-center">
                        <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                        <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                        <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                      </div>
                      <div className="detail">
                        <span>2.7k Positive</span>
                        <span>Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Expertise */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img">
                <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Expertise Image" className="img-fluid animate-box animated animate__animated" data-animate="animate__fadeInUp" />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <h4>Ready to Elevate Your Digital Presence?</h4>
                        <p>Let's create a custom strategy that fits your business goals.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link to="/contact">Get Free Consultation</Link>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <div className="sub-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Expertise</span>
              </div>
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Data Driven Strategies, Measurable Results</h2>
              <p>At Marko, we specialize in crafting innovative digital marketing strategies that drive real business growth. Our expertise ensures your brand stays ahead in the competitive digital landscape.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We Do Best</h5>
                  <ul className="check-list">
                    <li><Link to="/services/performance-marketing">Performance Marketing</Link></li>
                    <li><Link to="/services/social-media">Social Media Growth</Link></li>
                    <li><Link to="/services/content">Content Marketing</Link></li>
                    <li><Link to="/services/ppc">PPC & Paid Ads</Link></li>
                    <li><Link to="/services/branding">Brand Strategy</Link></li>
                    <li><Link to="/services/conversion">Conversion Optimization</Link></li>
                  </ul>
                </div>
                <div className="card card-expertise card-expertise-counter animate-box animated animate__animated" data-animate="animate__fadeInUp">
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span className="counter" data-target="21">0</span>
                      <span className="counter-detail">+</span>
                    </div>
                    <h6>Years of Experience on Digital Marketing Services</h6>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit in ex ligula varius at rutrum et finibus sed felis qisque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Modal Video */}
      <div className="section p-0">
        <div id="modal-overlay" className="modal-overlay">
          <span className="my-close"><i className="fa-solid fa-xmark"></i></span>
          <div className="my-modal">
            <iframe id="my-video-frame" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Section Partner */}
      <div className="section-partner">
        <div className="hero-container">
          <div className="card card-partner animate-box animated animate__animated" data-animate="animate__fadeInRight">
            <div className="partner-spacer"></div>
            <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
              <div className="col">
                <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                  <h3 className="title-heading">Powering Success for Top Brands</h3>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column ps-xl-3 ps-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. 
                    Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiperPartner-layout">
              <div className="swiperPartner-overlay">
                <div className="spacer"></div>
              </div>
              <div className="swiperPartner-container">
                <div className="swiper swiperPartner">
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div key={num} className="swiper-slide">
                        <a href="#">
                          <div className="partner-slide">
                            <img src={`/marko-digital-marketing-agency-html/image/client-${num}.png`} alt="Client" className="partner-logo img-fluid" />
                          </div>
                        </a>
                      </div>
                    ))}
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

export default HomePage;
