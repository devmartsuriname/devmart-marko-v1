import { Link } from "react-router-dom";
import { useState } from "react";
import { createContactSubmission } from "@/integrations/supabase/queries/contactSubmissions";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formData.firstName.trim().length < 2) return false;
    if (formData.lastName.trim().length < 2) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (formData.subject.trim().length < 2) return false;
    if (formData.message.trim().length < 10) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await createContactSubmission({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (error) {
        console.error("Contact submission error:", error);
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Contact Us</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Contact Us</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 g-5">
            <div className="col col-xl-5">
              <div className="contact-title-wrapper">
                <div className="card contact-title">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Reach out to us</span>
                  </div>
                  <h2 className="title-heading">Get in Touch</h2>
                  <p>Reach out to us for tailored web development solutions that deliver reliable results for your organization.</p>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-phone-volume accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Phone Number</span>
                      <h5>+597 854-1211</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-envelope accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Email Address</span>
                      <h5>info@devmart.sr</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div>
                      <div className="icon-wrapper">
                        <div className="icon-box">
                          <i className="fa-solid fa-location-dot accent-color"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Office Address</span>
                      <h5>Jagernath Lachmon straat nr. 152, Paramaribo, Suriname</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-7">
              <div id="success-message" className={`alert success ${submitStatus === "success" ? "" : "hidden"}`}>
                <span className="check-icon"><i className="fa-solid fa-2xl fa-check"></i></span>
                <p>Thank you for your message. We will contact you as soon as possible.</p>
              </div>

              <div id="error-message" className={`alert error ${submitStatus === "error" ? "" : "hidden"}`}>
                <span className="cross-icon"><i className="fa-solid fa-2xl fa-xmark"></i></span>
                <p>Please fill in all required fields correctly.</p>
              </div>
              <div className="form-layout-wrapper">
                <div className="card form-layout">
                  <h3 className="title-heading">Let's Talk About Your Next Project</h3>
                  <form id="contactForm" className="form" onSubmit={handleSubmit}>
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input 
                          type="text" 
                          name="firstName" 
                          id="first-name" 
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="col">
                        <input 
                          type="text" 
                          name="lastName" 
                          id="last-name" 
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          required 
                        />
                      </div>
                      <div className="col">
                        <input 
                          type="text" 
                          name="subject" 
                          id="subject" 
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={5} 
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    ></textarea>
                    <div className="form-button-container">
                      <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
                        <span className="btn-title">
                          <span>{isSubmitting ? "Sending..." : "Send a Message"}</span>
                        </span>
                        <span className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Maps */}
      <div className="section pt-0">
        <div className="hero-container">
          <iframe loading="lazy" className="maps overflow-hidden"
            src="https://maps.google.com/maps?q=Jagernath+Lachmon+straat+nr.+152,+Paramaribo,+Suriname&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Devmart - Jagernath Lachmon straat nr. 152, Paramaribo, Suriname" aria-label="Devmart - Jagernath Lachmon straat nr. 152, Paramaribo, Suriname">
          </iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
