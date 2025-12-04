import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPublishedPricingPlans, type PricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { SEO } from "@/components/SEO";
import { canonical } from "@/utils/seo";

const PricingPage = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true);
      setError(null);

      const { data, error: fetchError } = await getPublishedPricingPlans();

      if (fetchError) {
        console.error("Error fetching pricing plans:", fetchError);
        setError("Unable to load pricing plans at the moment. Please try again later.");
      } else {
        setPlans(data || []);
      }

      setIsLoading(false);
    };

    fetchPlans();
  }, []);

  // Helper functions
  const formatBillingPeriod = (period: string) => {
    switch(period) {
      case 'month': return '/Month';
      case 'year': return '/Year';
      case 'one-time': return '/Project';
      default: return `/${period}`;
    }
  };

  const parseFeatures = (features: string[] | null): string[] => {
    if (!features) return [];
    return features;
  };

  // Separate plans by highlighted status
  const highlightedPlan = plans.find(p => p.highlighted);
  const nonHighlightedPlans = plans.filter(p => !p.highlighted);
  const firstPlan = nonHighlightedPlans[0];
  const lastPlan = nonHighlightedPlans[1];
  return (
    <>
      <SEO
        title="Pricing | Devmart Suriname"
        description="Transparent pricing for web development and tech services. Explore our flexible packages designed for businesses of all sizes in Suriname."
        canonical={canonical("/pricing")}
        type="website"
        keywords={["web development pricing suriname", "software development cost", "tech services pricing"]}
      />
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Pricing Plan</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Pricing Plan</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Pricing */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInUp">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">Flexible Pricing Plans for Every Business</h2>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="pricing-container">
                  <div className="card card-pricing-title animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                    <div className="spacer"></div>
                    <div className="content">
                      <h3 className="title-heading">Let's Find the Right Strategy for You!</h3>
                      <div className="link-wrapper">
                        <Link to="/contact">Book a Free Consultation</Link>
                        <i className="fa-solid fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                  {isLoading ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>Loading...</h4>
                      <p>Loading pricing details...</p>
                      <div className="d-flex flex-row gspace-1 align-items-center h-100">
                        <h3>—</h3>
                        <p>/Month</p>
                      </div>
                      <Link to="/contact" className="btn btn-accent">
                        <div className="btn-title">
                          <span>View Details</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </Link>
                      <ul className="check-list">
                        <li><Link to="/contact">Loading features...</Link></li>
                        <li><Link to="/contact">Loading features...</Link></li>
                        <li><Link to="/contact">Loading features...</Link></li>
                      </ul>
                    </div>
                  ) : error ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>We're experiencing issues</h4>
                      <p>{error}</p>
                    </div>
                  ) : !firstPlan ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>No Plans Available</h4>
                      <p>Please check back later.</p>
                    </div>
                  ) : (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>{firstPlan.name}</h4>
                      <p>{firstPlan.description || firstPlan.target_segment}</p>
                      <div className="d-flex flex-row gspace-1 align-items-center h-100">
                        <h3>${firstPlan.price}</h3>
                        <p>{formatBillingPeriod(firstPlan.billing_period)}</p>
                      </div>
                      <Link to="/contact" className="btn btn-accent">
                        <div className="btn-title">
                          <span>View Details</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </Link>
                      <ul className="check-list">
                        {parseFeatures(firstPlan.features).map((feature, index) => (
                          <li key={index}><Link to="/contact">{feature}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="col">
                {isLoading ? (
                  <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                    <div className="spacer"></div>
                    <h4>Loading...</h4>
                    <p>Loading premium plan...</p>
                    <div className="d-flex flex-row gspace-1 align-items-center">
                      <h3>—</h3>
                      <p>/Month</p>
                    </div>
                    <Link to="/contact" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    <div className="core-benefits">
                      <div className="benefit">
                        <i className="fa-solid fa-user-tie"></i>
                        <span>Loading...</span>
                      </div>
                      <div className="benefit">
                        <i className="fa-solid fa-headset"></i>
                        <span>Loading...</span>
                      </div>
                      <div className="benefit">
                        <i className="fa-solid fa-chart-line"></i>
                        <span>Loading...</span>
                      </div>
                    </div>
                    <ul className="check-list">
                      <li><span>Loading features...</span></li>
                      <li><span>Loading features...</span></li>
                      <li><span>Loading features...</span></li>
                    </ul>
                  </div>
                ) : error ? (
                  <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                    <div className="spacer"></div>
                    <h4>We're experiencing issues</h4>
                    <p>{error}</p>
                  </div>
                ) : !highlightedPlan ? (
                  <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                    <div className="spacer"></div>
                    <h4>No Premium Plan Available</h4>
                    <p>Please check back later.</p>
                  </div>
                ) : (
                  <div className="card card-pricing pricing-highlight animate-box animated slow animate__animated" data-animate="animate__fadeInUp">
                    <div className="spacer"></div>
                    <h4>{highlightedPlan.name}</h4>
                    <p>{highlightedPlan.description || highlightedPlan.target_segment}</p>
                    <div className="d-flex flex-row gspace-1 align-items-center">
                      <h3>${highlightedPlan.price}</h3>
                      <p>{formatBillingPeriod(highlightedPlan.billing_period)}</p>
                    </div>
                    <Link to="/contact" className="btn btn-accent">
                      <div className="btn-title">
                        <span>View Details</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Link>
                    {(highlightedPlan.highlight_1 || highlightedPlan.highlight_2 || highlightedPlan.highlight_3) && (
                      <div className="core-benefits">
                        {highlightedPlan.highlight_1 && (
                          <div className="benefit">
                            <i className="fa-solid fa-user-tie"></i>
                            <span>{highlightedPlan.highlight_1}</span>
                          </div>
                        )}
                        {highlightedPlan.highlight_2 && (
                          <div className="benefit">
                            <i className="fa-solid fa-headset"></i>
                            <span>{highlightedPlan.highlight_2}</span>
                          </div>
                        )}
                        {highlightedPlan.highlight_3 && (
                          <div className="benefit">
                            <i className="fa-solid fa-chart-line"></i>
                            <span>{highlightedPlan.highlight_3}</span>
                          </div>
                        )}
                      </div>
                    )}
                    <ul className="check-list">
                      {parseFeatures(highlightedPlan.features).map((feature, index) => (
                        <li key={index}><span>{feature}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="col">
                <div className="pricing-container">
                  <div className="card pricing-highlight-box animate-box animated animate__animated" data-animate="animate__fadeInRight">
                    <div className="d-flex flex-column gspace-2 w-100">
                      <h5>Your Growth, Our Priority!</h5>
                      <div className="d-flex flex-column gspace-2">
                        <div className="pricing-highlights">
                          <Link to="/services">Modern Tech Stack (React + Supabase)</Link>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <Link to="/services">Government-Grade Security</Link>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <Link to="/contact">Scalable Solutions for Every Organization</Link>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="spacer"></div>
                  </div>
                  {isLoading ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>Loading...</h4>
                      <p>Loading pricing details...</p>
                      <div className="d-flex flex-row gspace-1 align-items-center h-100">
                        <h3>—</h3>
                        <p>/Month</p>
                      </div>
                      <Link to="/contact" className="btn btn-accent">
                        <div className="btn-title">
                          <span>View Details</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </Link>
                      <ul className="check-list">
                        <li><Link to="/contact">Loading features...</Link></li>
                        <li><Link to="/contact">Loading features...</Link></li>
                        <li><Link to="/contact">Loading features...</Link></li>
                      </ul>
                    </div>
                  ) : error ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>We're experiencing issues</h4>
                      <p>{error}</p>
                    </div>
                  ) : !lastPlan ? (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>No Plans Available</h4>
                      <p>Please check back later.</p>
                    </div>
                  ) : (
                    <div className="card card-pricing animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <h4>{lastPlan.name}</h4>
                      <p>{lastPlan.description || lastPlan.target_segment}</p>
                      <div className="d-flex flex-row gspace-1 align-items-center h-100">
                        <h3>${lastPlan.price}</h3>
                        <p>{formatBillingPeriod(lastPlan.billing_period)}</p>
                      </div>
                      <Link to="/contact" className="btn btn-accent">
                        <div className="btn-title">
                          <span>View Details</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </Link>
                      <ul className="check-list">
                        {parseFeatures(lastPlan.features).map((feature, index) => (
                          <li key={index}><Link to="/contact">{feature}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Digital Process */}
      <div className="section-wrapper-digital-process">
        <div className="section digital-process-banner">
          <div className="hero-container">
            <div className="digital-process-content">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div className="d-flex flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>How it Work</span>
                    </div>
                    <h2 className="title-heading">Simple Steps to Digital Success</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated fast animate__animated" data-animate="animate__fadeInDown">
                    <p>Our streamlined development process ensures your digital solution is delivered on time and meets all requirements. We focus on quality, security, and scalability at every step.</p>
                    <div className="link-wrapper">
                      <Link to="/contact">Get Started Now</Link>
                      <i className="fa-solid fa-arrow-circle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digital-process-steps-wrapper">
                <div className="digital-process-steps">
                  <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                    <div className="col">
                      <div className="digital-process-step animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img src="/marko-digital-marketing-agency-html/image/digital-marketing-icons-N952ZWA.png" alt="Digital Process Icon" className="process-icon" />
                          </div>
                          <span>01</span>
                        </div>
                        <div className="d-flex flex-column gspace-2">
                          <h5>Discovery & Requirements</h5>
                          <p>We analyze your needs, define project scope, and establish clear technical requirements and timelines.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-11.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>02</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Architecture & Design</h5>
                            <p>We design the system architecture, create wireframes, and plan the technical implementation strategy.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-10.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>03</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Development & Testing</h5>
                            <p>Our developers build your solution using modern tech stacks while our QA team ensures quality and security.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate="animate__fadeInDown">
                        <div className="step-spacer"></div>
                        <div className="digital-process-step">
                          <div className="d-flex justify-content-between">
                            <div>
                              <img src="/marko-digital-marketing-agency-html/image/Icon-12.png" alt="Digital Process Icon" className="process-icon" />
                            </div>
                            <span>04</span>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                            <h5>Launch & Support</h5>
                            <p>We deploy your solution, provide training, and offer ongoing maintenance and support to ensure success.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Why Choose Us */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="chooseus-card-container">
              <div className="d-flex flex-column gspace-2">
                <div className="card card-chooseus animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/Icon-2.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Reliable Long-Term Partnerships</h4>
                    <p>We build lasting relationships with our clients, offering consistent support and adapting solutions as your organization grows and evolves over time.</p>
                    <div className="link-wrapper">
                      <Link to="/about">Read More</Link>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus  animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/icon-1.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">Government-Grade Quality</h4>
                    <p>Our solutions meet the highest security and accessibility standards, perfect for government agencies and enterprises that demand reliability.</p>
                    <div className="link-wrapper">
                      <Link to="/about">Read More</Link>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
                <div className="card card-chooseus  animate-box animated slow animate__animated" data-animate="animate__fadeInLeft">
                  <div className="chooseus-icon-wrapper">
                    <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                      <div className="chooseus-icon">
                        <img src="/marko-digital-marketing-agency-html/image/Icon-3.png" alt="Why Choose Us Icon" className="img-fluid" />
                      </div>
                    </div>
                    <div className="chooseus-spacer below"></div>
                  </div>
                  <div className="chooseus-content">
                    <h4 className="chooseus-title">AI-Powered Efficiency</h4>
                    <p>We leverage cutting-edge AI technologies to automate processes, improve decision-making, and deliver smarter solutions faster.</p>
                    <div className="link-wrapper">
                      <Link to="/about">Read More</Link>
                      <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chooseus-content-container">
              <div className="d-flex flex-column gspace-5">
                <div className="d-flex flex-column gspace-2">
                  <div className="sub-heading  animate-box animated animate__animated" data-animate="animate__fadeInDown">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Why Choose Devmart</span>
                  </div>
                  <h2 className="title-heading  animate-box animated animate__animated" data-animate="animate__fadeInDown">Your Success is Our Mission</h2>
                  <p className="mb-0 animate-box animated animate__animated" data-animate="animate__fadeInDown">In the fast-paced digital world, choosing the right technology partner makes all the difference. At Devmart, we don't just write code—we build reliable systems that deliver measurable impact for your organization.</p>
                </div>
                <div className="image-container">
                  <img src="/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg" alt="Why Choose Us Image" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>    
                      <div className="chooseus-cta-spacer-wrapper">
                        <div className="card card-chooseus-cta animate-box animated animate__animated" data-animate="animate__fadeInUp">
                          <h5>Partner with Devmart & take your organization to the next level.</h5>
                          <div className="link-wrapper">
                            <Link to="/contact">Let's Talk Strategy</Link>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
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

export default PricingPage;
