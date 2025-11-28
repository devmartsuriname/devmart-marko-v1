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

      {/* Section Services */}
      <div className="section pb-0">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="image-container">
              <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Service Image" className="single-service-img" />
              <div className="single-service-title-layout">
                <div className="">
                  <div className="single-service-spacer"></div>
                  <div className="single-service-title-wrapper">
                    <div className="single-service-title">
                      <div className="sub-heading animate-box animated slow animate__animated" data-animate="animate__fadeInRight">
                        <i className="fa-regular fa-circle-dot"></i>
                        <span>Our Expertise</span>
                      </div>
                      <h3 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Boost Your Brand with Strategic Social Media Marketing</h3>
                      <p>Maximize engagement, build loyal communities, and drive conversions across all major platforms lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                  </div>
                </div>
                <div className="single-service-spacer"></div>
              </div>
            </div>

            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-8">
                <div className="d-flex flex-column gspace-2">
                  <h4>Overview</h4>
                  <p>
                    At Marko, we help brands grow through custom-tailored social media marketing strategies that connect with your audience. From content creation to campaign optimization, we make sure your presence on platforms like Instagram, Facebook, LinkedIn, and TikTok stands out. Whether you're launching a new brand or scaling an existing one, our experts turn social media into a powerful growth engine.
                  </p>
                  <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                    <div className="col">
                      <div className="image-container">
                        <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Service Image" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="image-container">
                        <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Service Image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="card service-included">
                    <h4>What's Included</h4>
                    <div className="underline-accent-short"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.</p>
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col">
                        <ul className="check-list">
                          <li>Platform Strategy & Planning</li>
                          <li>Creative Content Production</li>
                          <li>Paid Ads Management</li>
                          <li>Community engagement</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="check-list">
                          <li>Perfomance Reporting & Analytics</li>
                          <li>Influencer Collaborations</li>
                          <li>Social Listening & Trend Monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4>Why Choose Marko for Social Media Marketing?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.</p>
                  <div className="row row-cols-2">
                    <div className="col">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Result-Driven Campaigns</h5>
                            <p>Focused on reach, engagement, and ROI</p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Dedicated Team</h5>
                            <p>Experts in every platform you use</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Tailored strategies</h5>
                            <p>No one-size-fits-all, we build for your brand</p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                          <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                          <div className="d-flex flex-column gspace-0">
                            <h5>Analytics & insights</h5>
                            <p>Make smart decision with real data</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-4">
                <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-5">
                  <div className="card service-recent">
                    <h4>Recent Services</h4>
                    <div className="underline-accent-short"></div>
                    <ul className="single-service-list">
                      <li><Link to="/services/social-media">Social Media Marketing</Link></li>
                      <li><Link to="/services/content">Content Marketing</Link></li>
                      <li><Link to="/services/ppc">PPC Advertising</Link></li>
                      <li><Link to="/services/email">Email Marketing</Link></li>
                      <li><Link to="/services/branding">Branding & Design</Link></li>
                      <li><Link to="/services/web-development">Web Development</Link></li>
                    </ul>
                  </div>
                  <div className="cta-service-banner">
                    <div className="spacer"></div>
                    <h3 className="title-heading">Transform Your Business with Marko!</h3>
                    <p>
                      Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                    </p>
                    <div className="link-wrapper">
                      <Link to="/about">Read More</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Testimonial */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column flex-xl-row gspace-5">
              <div className="testimonial-reviewer-container">
                <div className="testimonial-header-wrapper animate-box animated fast animate__animated" data-animate="animate__fadeInDown">
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                          <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Reviewer" className="avatar" />
                        </div>
                        <div className="detail">
                          <h6>2.7k Positive</h6>
                          <h6>Reviews</h6>
                        </div>
                      </div>
                      <div className="testimonial-rating-container">
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="90"></span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>Improved Project</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span className="counter" data-target="49"></span>
                            <span className="counter-detail">%</span>
                          </div>
                          <p>New Project</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Social Media Growth</a>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Performance Marketing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-title-container">
                <div className="testimonial-header-wrapper-title animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What Our Client Says</span>
                    </div>
                    <h2 className="title-heading">Hear from Our Satisfied Clients, Real Success Stories</h2>
                    <p>Discover how businesses like yours achieved outstanding growth with Marko's expert digital marketing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div className="swiper swiperTestimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors."
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!"
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity."
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors."
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!"
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card card-testimonial">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="d-flex flex-row gspace-2">
                            <div className="testimonial-image">
                              <img src="/marko-digital-marketing-agency-html/image/dummy-img-400x400.jpg" alt="Testimonial Person Image" className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Newsletter */}
      <div className="section">
        <div className="hero-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-layout">
              <div className="spacer"></div>
              <div className="d-flex flex-column gspace-5 position-relative z-2">
                <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                  <h3 className="title-heading">Stay Ahead in Digital Marketing</h3>
                  <p>Get exclusive insights, trends, and strategies delivered straight to your inbox. Subscribe now!</p>
                </div>
                <div id="newsletter-success" className="alert success hidden">
                  <span className="check-icon"><i className="fa-solid fa-2xl fa-check"></i></span>
                  <p className="text-center">Thank you! Form submitted successfully.</p>
                </div>
                <div id="newsletter-error" className="alert error hidden">
                  <span className="cross-icon"><i className="fa-solid fa-2xl fa-xmark"></i></span>
                  <p className="text-center">Oops! Form submission failed. Please try again.</p>
                </div>
                <form action="./php/newsletter_process.php" method="POST" id="newsletterForm" className="needs-validation animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <div className="input-container">
                    <input type="email" name="newsletter-email" id="newsletter-email" placeholder="Give your best email" required />
                    <p className="error-text hidden"></p>
                  </div>
                  <button className="btn btn-accent" type="submit">
                    <span className="btn-title">
                      <span>Subscribe</span>
                    </span>
                    <span className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section FAQs */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col col-xl-5">
              <div className="faq-title-container">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="title-heading">Got Questions? We've Got Answers.</h2>
              </div>
            </div>
            <div className="col col-xl-7">
              <div className="d-flex flex-column">
                <div className="accordion" id="faqAccordion1">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        What services does Marko offer?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>We specialize in digital marketing, including branding, social media management, content strategy, paid ads, and analytics-driven campaigns.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="faq2">
                        How long does it take to see results?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>While some channels like paid ads offer quicker results, most strategies (like content and SEO) show steady growth within 3-6 months.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Do you work with businesses of all sizes?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Yes! We collaborate with startups, SMEs, and enterprise-level companies across various industries.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        Can I request a custom digital marketing package?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Absolutely. We tailor our services to fit your business goals, budget, and timeline</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                        How do I know which service is right for me?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>During our initial consultation, we'll assess your current strategy and recommend the best path forward based on data and goals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                        Do you provide monthly performance reports?
                      </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                      <div className="accordion-body">
                        <div className="accordion-spacer"></div>
                        <p>Yes. Every month, you'll receive a clear and comprehensive report outlining progress, key metrics, and next steps.</p>
                      </div>
                    </div>
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

export default SingleServicePage;
