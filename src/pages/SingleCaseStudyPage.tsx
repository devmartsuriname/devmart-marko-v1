import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getCaseStudyBySlug,
  getPublishedCaseStudies,
  type CaseStudy,
} from "@/integrations/supabase/queries/caseStudies";

const SingleCaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) {
        setError("Case study not found.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      const { data: csData, error: csError } = await getCaseStudyBySlug(slug);

      if (csError || !csData) {
        console.error("Error fetching case study:", csError);
        setError("Case study not found.");
      } else {
        setCaseStudy(csData);
      }

      const { data: allCaseStudies } = await getPublishedCaseStudies();
      if (allCaseStudies) {
        setRelatedCaseStudies(
          allCaseStudies.filter((c) => c.slug !== slug).slice(0, 3)
        );
      }

      setIsLoading(false);
    };

    fetchCaseStudy();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading case study details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <>
        <div className="section-banner">
          <div className="banner-layout-wrapper">
            <div className="banner-layout">
              <div className="d-flex flex-column text-center align-items-center gspace-2">
                <h2 className="title-heading">Case Study Not Found</h2>
                <nav className="breadcrumb">
                  <Link to="/" className="gspace-2">Home</Link>
                  <span className="separator-link">/</span>
                  <Link to="/case-studies" className="gspace-2">Case Studies</Link>
                  <span className="separator-link">/</span>
                  <p className="current-page">Not Found</p>
                </nav>
              </div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="hero-container">
            <div className="d-flex flex-column align-items-center justify-content-center text-center gspace-3" style={{ minHeight: "40vh" }}>
              <i className="fa-solid fa-circle-exclamation fa-4x accent-color"></i>
              <h3>Case Study Not Found</h3>
              <p>The case study you're looking for doesn't exist or has been removed.</p>
              <Link to="/case-studies" className="btn btn-primary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Banner Section */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading">{caseStudy.title}</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <Link to="/case-studies" className="gspace-2">Case Studies</Link>
                <span className="separator-link">/</span>
                <p className="current-page">{caseStudy.title}</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section">
        <div className="hero-container">
          <div className="row">
            {/* Sidebar - Order 2 on mobile, Order 1 on desktop */}
            <div className="col-xl-4 order-2 order-xl-1">
              {/* Related Case Studies */}
              {relatedCaseStudies.length > 0 && (
                <div className="card service-recent mb-4 animate-box">
                  <h5 className="mb-3">More Case Studies</h5>
                  <ul className="list-unstyled">
                    {relatedCaseStudies.map((cs) => (
                      <li key={cs.id} className="mb-3">
                        <Link to={`/case-studies/${cs.slug}`} className="d-flex flex-column">
                          <span className="fw-semibold">{cs.title}</span>
                          {cs.client_name && (
                            <small className="text-muted">Client: {cs.client_name}</small>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/case-studies" className="btn btn-primary w-100 mt-2">
                    View All Case Studies
                  </Link>
                </div>
              )}

              {/* CTA Banner */}
              <div className="cta-service-banner animate-box">
                <div className="d-flex flex-column gspace-2">
                  <h4>Ready to Start Your Project?</h4>
                  <p>
                    Let's discuss how Devmart can help transform your digital presence with custom solutions tailored to your needs.
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content - Order 1 on mobile, Order 2 on desktop */}
            <div className="col-xl-8 order-1 order-xl-2">
              <article className="animate-box">
                {/* Featured Image */}
                {caseStudy.featured_image && (
                  <div className="post-image mb-4">
                    <img
                      src={caseStudy.featured_image}
                      alt={caseStudy.title}
                      className="img-fluid rounded"
                    />
                  </div>
                )}

                {/* Meta Information */}
                <div className="post-meta mb-4">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    {caseStudy.client_name && (
                      <span className="meta-item">
                        <i className="fa-regular fa-building me-2"></i>
                        <strong>Client:</strong> {caseStudy.client_name}
                      </span>
                    )}
                    <span className="meta-item">
                      <i className="fa-regular fa-calendar me-2"></i>
                      <strong>Date:</strong> {formatDate(caseStudy.created_at)}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, index) => (
                      <span key={index} className="cs-component">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-4">{caseStudy.title}</h3>

                {/* Description */}
                <div className="post-content mb-4">
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {caseStudy.description}
                  </div>
                </div>

                {/* Results Summary */}
                {caseStudy.results_summary && (
                  <div className="card bg-light p-4 mb-4">
                    <h4 className="mb-3">
                      <i className="fa-solid fa-chart-line me-2 accent-color"></i>
                      Results & Impact
                    </h4>
                    <div style={{ whiteSpace: "pre-wrap" }}>
                      {caseStudy.results_summary}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="card border-primary p-4 mt-5">
                  <div className="text-center">
                    <h4 className="mb-3">Interested in Similar Results?</h4>
                    <p className="mb-4">
                      Let's discuss how we can help your organization achieve success with our custom digital solutions.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <Link to="/contact" className="btn btn-primary">
                        Start Your Project
                      </Link>
                      <Link to="/case-studies" className="btn btn-outline-primary">
                        View More Case Studies
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCaseStudyPage;
