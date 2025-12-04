import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useSettings } from "@/context/SettingsContext";

const PrivacyPage = () => {
  const { getSetting } = useSettings();
  const siteName = getSetting("site_name", "Devmart Suriname");
  const contactEmail = getSetting("contact_email", "info@devmart.sr");

  return (
    <>
      <SEO 
        title={`Privacy Policy - ${siteName}`}
        description={`Learn how ${siteName} collects, uses, and protects your personal information. Read our privacy policy.`}
      />

      {/* Banner Section */}
      <section className="banner-section banner-layout-wrapper section-dark-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xl-8">
              <div className="banner-content">
                <div className="animate-box fadeInUp animated" data-animate="fadeInUp">
                  <h1 className="title">Privacy Policy</h1>
                </div>
                <div className="animate-box fadeInUp animated" data-animate="fadeInUp">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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

                <h2>1. Introduction</h2>
                <p>
                  {siteName} ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
                  or use our services.
                </p>

                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit forms or contact us.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing patterns collected automatically.</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us.</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Deliver our web development and digital services</li>
                  <li>Send relevant updates about our services (with your consent)</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>4. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against 
                  unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed 
                  only by authorized personnel.
                </p>

                <h2>5. Third-Party Services</h2>
                <p>
                  We may use third-party services for analytics, hosting, and communication. These services have their own 
                  privacy policies, and we encourage you to review them. We do not sell your personal information to third parties.
                </p>

                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>

                <h2>7. Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. You can control cookie settings through 
                  your browser preferences. Essential cookies are required for the website to function properly.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or wish to exercise your rights, please contact us at:{" "}
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

export default PrivacyPage;
