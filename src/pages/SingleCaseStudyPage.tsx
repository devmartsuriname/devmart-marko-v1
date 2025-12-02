import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getCaseStudyBySlug,
  getPublishedCaseStudies,
  type CaseStudy,
} from "@/integrations/supabase/queries/caseStudies";
import { SEO } from "@/components/SEO";
import { canonical, truncate } from "@/utils/seo";

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
          <div className="d-flex flex-column align-items-center justify-content-center gspace-2" style={{ minHeight: "50vh" }}>
            <p>Loading case study details...</p>
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
              <div className="link-wrapper">
                <Link to="/case-studies">View All Case Studies</Link>
                <i className="fa-solid fa-circle-arrow-right"></i>
              </div>
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
      <SEO
        title={`${caseStudy.title} | Case Study | Devmart Suriname`}
        description={truncate(caseStudy.description, 160)}
        canonical={canonical(`/case-studies/${caseStudy.slug}`)}
        type="case-study"
        image={caseStudy.featured_image || undefined}
        keywords={caseStudy.tags}
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": caseStudy.title,
          "about": caseStudy.tags?.join(", "),
          "description": caseStudy.description,
          "image": caseStudy.featured_image,
          "url": canonical(`/case-studies/${caseStudy.slug}`),
          "creator": {
            "@type": "Organization",
            "name": "Devmart Suriname"
          }
        }}
      />
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
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            {/* Sidebar - Order 2 on mobile, Order 1 on desktop */}
            <div className="col col-xl-4 order-2 order-xl-1">
              <div className="d-flex flex-column flex-md-row flex-xl-column gspace-5">
                {/* Related Case Studies */}
                {relatedCaseStudies.length > 0 && (
                  <div className="card service-recent animate-box">
                    <h4>More Case Studies</h4>
                    <div className="underline-accent-short"></div>
                    <ul className="single-service-list">
                      {relatedCaseStudies.map((cs) => (
                        <li key={cs.id}>
                          <Link to={`/case-studies/${cs.slug}`}>
                            {cs.title}
                            {cs.client_name && <span> - {cs.client_name}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="link-wrapper">
                      <Link to="/case-studies">View All Case Studies</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                )}

                {/* CTA Banner */}
                <div className="cta-service-banner animate-box">
                  <div className="spacer"></div>
                  <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                  <p>
                    Elevate your digital infrastructure with cutting-edge web development 
                    and modern tech solutions. Let's build something exceptional together!
                  </p>
                  <div className="link-wrapper">
                    <Link to="/contact">Get In Touch</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Order 1 on mobile, Order 2 on desktop */}
            <div className="col col-xl-8 order-1 order-xl-2">
                <article className="animate-box">
                <div className="d-flex flex-column gspace-3">
                {/* Featured Image */}
                {caseStudy.featured_image && (
                  <div className="post-image">
                    <img
                      src={caseStudy.featured_image}
                      alt={caseStudy.title}
                      className="img-fluid"
                    />
                  </div>
                )}

                {/* Meta Information */}
                <div className="post-meta">
                  <div className="d-flex flex-wrap align-items-center gspace-2">
                    {caseStudy.client_name && (
                      <span className="meta-item">
                        <i className="fa-regular fa-building"></i>
                        <strong>Client:</strong> {caseStudy.client_name}
                      </span>
                    )}
                    <span className="meta-item">
                      <i className="fa-regular fa-calendar"></i>
                      <strong>Date:</strong> {formatDate(caseStudy.created_at)}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="underline-muted-full"></div>

                {/* Tags */}
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <div className="case-studies-component large">
                    {caseStudy.tags.map((tag, index) => (
                      <div key={index} className="cs-component">
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3>{caseStudy.title}</h3>

                {/* Description */}
                <div className="post-content">
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {caseStudy.description}
                  </div>
                </div>

                {/* Results Summary */}
                {caseStudy.results_summary && (
                  <div className="card service-included">
                    <h4>
                      <i className="fa-solid fa-chart-line accent-color"></i>
                      Results & Impact
                    </h4>
                    <div className="underline-accent-short"></div>
                    <div style={{ whiteSpace: "pre-wrap" }}>
                      {caseStudy.results_summary}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="card service-included">
                  <div className="text-center">
                    <h4>Interested in Similar Results?</h4>
                    <p>
                      Let's discuss how we can help your organization achieve success with our custom digital solutions.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gspace-2">
                      <div className="link-wrapper">
                        <Link to="/contact">Start Your Project</Link>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </div>
                      <div className="link-wrapper">
                        <Link to="/case-studies">View More Case Studies</Link>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </div>
                    </div>
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
