import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublishedCaseStudies, type CaseStudy } from "@/integrations/supabase/queries/caseStudies";
import { SEO } from "@/components/SEO";
import { canonical } from "@/utils/seo";

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setIsLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await getPublishedCaseStudies();
      
      if (fetchError) {
        console.error("Error fetching case studies:", fetchError);
        setError("Unable to load case studies at the moment.");
      } else {
        setCaseStudies(data || []);
      }
      
      setIsLoading(false);
    };
    
    fetchCaseStudies();
  }, []);

  const parseTags = (tags: string[] | null): string[] => {
    if (!tags) return [];
    return tags;
  };

  const cardVariants = ['local-business', 'saas-leads', 'ecommerce', 'startup-branding'];
  const getCardVariant = (index: number) => cardVariants[index % cardVariants.length];

  const isTagsFirst = (index: number) => {
    const variant = index % 4;
    return variant === 0 || variant === 3;
  };

  const isLargeTags = (index: number) => {
    const variant = index % 4;
    return variant === 0 || variant === 3;
  };

  return (
    <>
      <SEO
        title="Case Studies | Devmart Suriname"
        description="Real-world projects showcasing our impact across industries. Explore successful web applications, government portals, and enterprise systems we've delivered."
        canonical={canonical("/case-studies")}
        type="website"
        keywords={["web development portfolio", "project case studies suriname", "successful implementations"]}
      />
      {/* Section Banner */}
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Case Studies
              </h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">
                  Home
                </Link>
                <span className="separator-link">/</span>
                <p className="current-page">Case Studies</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Case Studies */}
      <div className="section px-0">
        <div className="hero-container">
          <div className="case-studies-layout">
            <div className="card card-case-studies">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div
                    className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInLeft"
                  >
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>Case Studies</span>
                    </div>
                    <h2 className="title-heading">See How We Help Businesses Thrive</h2>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="d-flex flex-column h-100 justify-content-end gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInRight"
                  >
                    <p>
                      We don't just talk about results—we deliver them. Here are some of our most impactful projects
                      showcasing how our development expertise drives digital transformation.
                    </p>
                    <div className="link-wrapper">
                      <Link to="/case-studies">More Case Studies</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gspace-2">
              {isLoading ? (
                <>
                  <div className="d-flex flex-column flex-xl-row gspace-2">
                    {[0, 1].map((i) => (
                      <div key={i} className={`card case-studies-content ${cardVariants[i]} animate-box animated animate__animated`}>
                        <div className="d-flex flex-column gspace-2">
                          <span className="case-studies-title"><h4>Loading...</h4></span>
                          <p>Loading case study details...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex flex-column flex-xl-row gspace-2">
                    {[2, 3].map((i) => (
                      <div key={i} className={`card case-studies-content ${cardVariants[i]} animate-box animated animate__animated`}>
                        <div className="d-flex flex-column gspace-2">
                          <span className="case-studies-title"><h4>Loading...</h4></span>
                          <p>Loading case study details...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : error ? (
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content local-business animate-box animated animate__animated">
                    <div className="d-flex flex-column gspace-2">
                      <span className="case-studies-title"><h4>Unable to load case studies</h4></span>
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              ) : caseStudies.length === 0 ? (
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content local-business animate-box animated animate__animated">
                    <div className="d-flex flex-column gspace-2">
                      <span className="case-studies-title"><h4>No case studies available</h4></span>
                      <p>Please check back later for new projects.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {Array.from({ length: Math.ceil(caseStudies.length / 2) }).map((_, rowIndex) => (
                    <div key={rowIndex} className="d-flex flex-column flex-xl-row gspace-2">
                      {caseStudies.slice(rowIndex * 2, rowIndex * 2 + 2).map((cs, cardIndex) => {
                        const globalIndex = rowIndex * 2 + cardIndex;
                        const variant = getCardVariant(globalIndex);
                        const tagsFirst = isTagsFirst(globalIndex);
                        const largeTags = isLargeTags(globalIndex);
                        
                        return (
                          <div
                            key={cs.id}
                            className={`card case-studies-content ${variant} animate-box animated ${globalIndex % 2 === 0 ? 'fast' : ''} animate__animated`}
                            data-animate="animate__fadeInUp"
                          >
                            {tagsFirst ? (
                              <>
                                <div className={`case-studies-component ${largeTags ? 'large' : 'small'} align-self-end justify-content-end align-items-end`}>
                                  {parseTags(cs.tags).map((tag) => (
                                    <div key={tag} className="cs-component">
                                      <span>{tag}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                  <Link to={`/case-studies/${cs.slug}`} className="case-studies-title">
                                    <h4>{cs.title}</h4>
                                  </Link>
                                  <p>{cs.description}</p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="d-flex flex-column gspace-2">
                                  <Link to={`/case-studies/${cs.slug}`} className="case-studies-title">
                                    <h4>{cs.title}</h4>
                                  </Link>
                                  <p>{cs.description}</p>
                                </div>
                                <div className={`case-studies-component ${largeTags ? 'large' : 'small'} align-self-start justify-content-start align-items-start`}>
                                  {parseTags(cs.tags).map((tag) => (
                                    <div key={tag} className="cs-component">
                                      <span>{tag}</span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </>
              )}
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Guide */}
      <div className="section-guide">
        <div className="guide-banner">
          <div className="hero-container">
            <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="guide-video-container">
                <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>See How We Help Brands Grow</p>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                <p>
                  Elevate your digital infrastructure with cutting-edge web development and modern tech solutions. Let's
                  build something exceptional together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Modal Video */}
      <div className="section p-0">
        <div id="modal-overlay" className="modal-overlay">
          <span className="modal-close">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <div className="video-modal">
            <iframe id="modal-video-frame" className="ifr-video" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Section Testimonial */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column flex-xl-row gspace-5">
              <div className="testimonial-reviewer-container">
                <div
                  className="testimonial-header-wrapper animate-box animated fast animate__animated"
                  data-animate="animate__fadeInDown"
                >
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-1.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-2.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-3.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                          <img
                            src="/marko-digital-marketing-agency-html/image/Photo-4.jpg"
                            alt="Testimonial Reviewer"
                            className="avatar"
                            loading="lazy"
                            width="48"
                            height="48"
                            decoding="async"
                          />
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
                        <Link to="/services">Web Development</Link>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <Link to="/services">Enterprise Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-title-container">
                <div
                  className="testimonial-header-wrapper-title animate-box animated animate__animated"
                  data-animate="animate__fadeInRight"
                >
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What Our Client Says</span>
                    </div>
                    <h2 className="title-heading">Hear from Our Satisfied Clients, Real Success Stories</h2>
                    <p>
                      Discover how organizations like yours achieved digital transformation with Devmart's expert
                      development solutions.
                    </p>
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-13.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                                loading="lazy"
                                width="80"
                                height="80"
                                decoding="async"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Emma Richard</span>
                              <p className="profile-info">CEO Nexatech</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Devmart completely transformed our digital infrastructure! Their development expertise helped
                          us modernize operations and improve service delivery significantly."
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-8.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">David Mont</span>
                              <p className="profile-info">Marketing Director</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "We've worked with many agencies before, but Devmart stands out. Their technical expertise and
                          commitment to quality gave us a competitive advantage."
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-11.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">Sophia Lewis</span>
                              <p className="profile-info">Founder</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "From concept to deployment, Devmart delivered exceptional results. Our platform now handles
                          complex operations smoothly and our users love it!"
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
                              <img
                                src="/marko-digital-marketing-agency-html/image/Photo-12.jpg"
                                alt="Testimonial Person Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="profile-name">James Peterson</span>
                              <p className="profile-info">COO, BrightWave</p>
                            </div>
                          </div>
                          <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                        </div>
                        <p className="testimonial-description">
                          "Highly professional and results-oriented. Devmart's expertise in enterprise systems helped us
                          build a reliable digital foundation for growth."
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
    </>
  );
};

export default CaseStudiesPage;
