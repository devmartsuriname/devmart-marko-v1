import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useSettings } from "@/context/SettingsContext";

const TermsPage = () => {
  const { getSetting } = useSettings();
  const siteName = getSetting("site_name", "Devmart Suriname");
  const contactEmail = getSetting("contact_email", "info@devmart.sr");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title={`Terms of Service - ${siteName}`}
        description={`Read the terms and conditions for using ${siteName}'s website and services.`}
      />

      {/* Banner Section */}
      <section className="banner-section banner-layout-wrapper section-dark-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xl-8">
              <div className="banner-content">
                <div className="animate-box fadeInUp animated" data-animate="fadeInUp">
                  <h1 className="title">Terms of Service</h1>
                </div>
                <div className="animate-box fadeInUp animated" data-animate="fadeInUp">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Terms of Service</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-wrapper section-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xl-8">
              <div className="content-wrapper animate-box fadeInUp animated" data-animate="fadeInUp">
                <p className="text-muted mb-4">Last updated: December 2024</p>

                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing or using the {siteName} website and services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>

                <h2>2. Services Description</h2>
                <p>
                  {siteName} provides web development, software engineering, and digital solutions including but not limited to:
                </p>
                <ul>
                  <li>Custom web application development</li>
                  <li>Government portal solutions</li>
                  <li>Enterprise system integration</li>
                  <li>AI-powered tools and automation</li>
                  <li>UX/UI design services</li>
                  <li>Maintenance and support services</li>
                </ul>

                <h2>3. Client Responsibilities</h2>
                <p>When engaging our services, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Ensure you have rights to any content you provide</li>
                  <li>Pay for services according to agreed terms</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive ownership of custom work created specifically for their project. 
                  {siteName} retains rights to any pre-existing code, frameworks, or tools used in development. 
                  We may showcase completed projects in our portfolio unless otherwise agreed.
                </p>

                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms are specified in individual project agreements. Generally, projects require an initial 
                  deposit before work begins, with remaining payments tied to project milestones or completion.
                </p>

                <h2>6. Warranties and Disclaimers</h2>
                <p>
                  We strive to deliver high-quality work that meets agreed specifications. However, we do not guarantee 
                  that our services will meet all your expectations or that software will be error-free. We provide 
                  reasonable support to address issues within the scope of our agreements.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, {siteName} shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from the use of our services or website.
                </p>

                <h2>8. Confidentiality</h2>
                <p>
                  We treat all client information and project details as confidential. We will not disclose your 
                  proprietary information to third parties without your consent, except as required by law.
                </p>

                <h2>9. Termination</h2>
                <p>
                  Either party may terminate a project agreement with written notice. Upon termination, the client 
                  is responsible for payment for all work completed up to the termination date.
                </p>

                <h2>10. Governing Law</h2>
                <p>
                  These terms are governed by the laws of Suriname. Any disputes arising from these terms or our 
                  services shall be resolved through negotiation or, if necessary, through the appropriate legal 
                  channels in Suriname.
                </p>

                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to update these terms at any time. Changes will be posted on this page with 
                  an updated revision date. Continued use of our services after changes constitutes acceptance of 
                  the new terms.
                </p>

                <h2>12. Contact Information</h2>
                <p>
                  For questions about these terms, please contact us at:{" "}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>

                <div className="mt-5">
                  <Link to="/contact" className="link-wrapper">
                    <span>Contact Us</span>
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
