import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getAllSiteSettings, updateSiteSettings, type SiteSettingsMap } from "@/integrations/supabase/queries/siteSettings";

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<SiteSettingsMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Section-specific loading states
  const [savingBrand, setSavingBrand] = useState(false);
  const [savingContact, setSavingContact] = useState(false);
  const [savingSocial, setSavingSocial] = useState(false);
  const [savingSeo, setSavingSeo] = useState(false);

  // Fetch settings on mount
  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    setIsLoading(true);
    setError(null);

    const { data, error } = await getAllSiteSettings();

    if (error) {
      setError(error.message);
      toast.error("Failed to load settings");
    } else if (data) {
      setSettings(data);
    }

    setIsLoading(false);
  }

  // Update local state when input changes
  const handleInputChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  // Save Brand Information section
  const handleSaveBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingBrand(true);

    const brandSettings = {
      site_name: settings.site_name || "",
      tagline: settings.tagline || "",
      copyright_text: settings.copyright_text || "",
    };

    const { error } = await updateSiteSettings(brandSettings);

    if (error) {
      toast.error("Failed to save brand information");
    } else {
      toast.success("Brand information updated successfully");
    }

    setSavingBrand(false);
  };

  // Save Contact Information section
  const handleSaveContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingContact(true);

    const contactSettings = {
      contact_email: settings.contact_email || "",
      contact_phone: settings.contact_phone || "",
      contact_address: settings.contact_address || "",
    };

    const { error } = await updateSiteSettings(contactSettings);

    if (error) {
      toast.error("Failed to save contact information");
    } else {
      toast.success("Contact information updated successfully");
    }

    setSavingContact(false);
  };

  // Save Social Links section
  const handleSaveSocial = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSocial(true);

    const socialSettings = {
      facebook_url: settings.facebook_url || "",
      linkedin_url: settings.linkedin_url || "",
      instagram_url: settings.instagram_url || "",
      twitter_url: settings.twitter_url || "",
      github_url: settings.github_url || "",
    };

    const { error } = await updateSiteSettings(socialSettings);

    if (error) {
      toast.error("Failed to save social links");
    } else {
      toast.success("Social links updated successfully");
    }

    setSavingSocial(false);
  };

  // Save SEO Settings section
  const handleSaveSeo = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSeo(true);

    const seoSettings = {
      seo_default_title: settings.seo_default_title || "",
      seo_default_description: settings.seo_default_description || "",
    };

    const { error } = await updateSiteSettings(seoSettings);

    if (error) {
      toast.error("Failed to save SEO settings");
    } else {
      toast.success("SEO settings updated successfully");
    }

    setSavingSeo(false);
  };

  if (isLoading) {
    return (
      <div className="admin-loading-state">
        <p>Loading settings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-loading-state">
        <div className="admin-card">
          <p className="admin-alert admin-alert-error admin-alert-mb">
            Error loading settings: {error}
          </p>
          <button
            onClick={fetchSettings}
            className="admin-btn admin-btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Site Settings</h2>
          <p className="admin-card-description">
            Manage global site configuration. Each section can be saved independently.
          </p>
        </div>
      </div>

      {/* Brand Information Section */}
      <form onSubmit={handleSaveBrand}>
        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 className="admin-section-title">
            Brand Information
          </h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="site_name">
              Site Name
            </label>
            <input
              type="text"
              id="site_name"
              className="admin-form-input"
              value={settings.site_name || ""}
              onChange={(e) => handleInputChange("site_name", e.target.value)}
              required
              maxLength={100}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="tagline">
              Tagline
            </label>
            <input
              type="text"
              id="tagline"
              className="admin-form-input"
              value={settings.tagline || ""}
              onChange={(e) => handleInputChange("tagline", e.target.value)}
              maxLength={200}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="copyright_text">
              Copyright Text
            </label>
            <input
              type="text"
              id="copyright_text"
              className="admin-form-input"
              value={settings.copyright_text || ""}
              onChange={(e) => handleInputChange("copyright_text", e.target.value)}
              maxLength={200}
            />
          </div>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={savingBrand}
          >
            {savingBrand ? "Saving..." : "Save Brand Information"}
          </button>
        </div>
      </form>

      {/* Contact Information Section */}
      <form onSubmit={handleSaveContact}>
        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 className="admin-section-title">
            Contact Information
          </h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="contact_email">
              Contact Email
            </label>
            <input
              type="email"
              id="contact_email"
              className="admin-form-input"
              value={settings.contact_email || ""}
              onChange={(e) => handleInputChange("contact_email", e.target.value)}
              required
              maxLength={255}
              placeholder="info@devmart.sr"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="contact_phone">
              Phone Number
            </label>
            <input
              type="text"
              id="contact_phone"
              className="admin-form-input"
              value={settings.contact_phone || ""}
              onChange={(e) => handleInputChange("contact_phone", e.target.value)}
              maxLength={50}
              placeholder="+597 854-1211"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="contact_address">
              Address
            </label>
            <input
              type="text"
              id="contact_address"
              className="admin-form-input"
              value={settings.contact_address || ""}
              onChange={(e) => handleInputChange("contact_address", e.target.value)}
              maxLength={500}
              placeholder="Jagernath Lachmon straat nr. 152, Paramaribo, Suriname"
            />
          </div>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={savingContact}
          >
            {savingContact ? "Saving..." : "Save Contact Information"}
          </button>
        </div>
      </form>

      {/* Social Media Links Section */}
      <form onSubmit={handleSaveSocial}>
        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 className="admin-section-title">
            Social Media Links
          </h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="facebook_url">
              Facebook URL
            </label>
            <input
              type="url"
              id="facebook_url"
              className="admin-form-input"
              value={settings.facebook_url || ""}
              onChange={(e) => handleInputChange("facebook_url", e.target.value)}
              maxLength={500}
              placeholder="https://www.facebook.com/DevmartSuriname/"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="linkedin_url">
              LinkedIn URL
            </label>
            <input
              type="url"
              id="linkedin_url"
              className="admin-form-input"
              value={settings.linkedin_url || ""}
              onChange={(e) => handleInputChange("linkedin_url", e.target.value)}
              maxLength={500}
              placeholder="https://linkedin.com/company/devmart"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="instagram_url">
              Instagram URL
            </label>
            <input
              type="url"
              id="instagram_url"
              className="admin-form-input"
              value={settings.instagram_url || ""}
              onChange={(e) => handleInputChange("instagram_url", e.target.value)}
              maxLength={500}
              placeholder="https://instagram.com/devmart"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="twitter_url">
              Twitter/X URL
            </label>
            <input
              type="url"
              id="twitter_url"
              className="admin-form-input"
              value={settings.twitter_url || ""}
              onChange={(e) => handleInputChange("twitter_url", e.target.value)}
              maxLength={500}
              placeholder="https://twitter.com/devmart"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="github_url">
              GitHub URL
            </label>
            <input
              type="url"
              id="github_url"
              className="admin-form-input"
              value={settings.github_url || ""}
              onChange={(e) => handleInputChange("github_url", e.target.value)}
              maxLength={500}
              placeholder="https://github.com/devmart"
            />
          </div>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={savingSocial}
          >
            {savingSocial ? "Saving..." : "Save Social Links"}
          </button>
        </div>
      </form>

      {/* SEO Defaults Section */}
      <form onSubmit={handleSaveSeo}>
        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 className="admin-section-title">
            SEO Defaults
          </h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="seo_default_title">
              Default Meta Title
            </label>
            <input
              type="text"
              id="seo_default_title"
              className="admin-form-input"
              value={settings.seo_default_title || ""}
              onChange={(e) => handleInputChange("seo_default_title", e.target.value)}
              maxLength={60}
              placeholder="Devmart Suriname - Web Development & Digital Solutions"
            />
            <small className="admin-helper-text">
              Recommended: 50-60 characters
            </small>
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="seo_default_description">
              Default Meta Description
            </label>
            <textarea
              id="seo_default_description"
              className="admin-form-input"
              value={settings.seo_default_description || ""}
              onChange={(e) => handleInputChange("seo_default_description", e.target.value)}
              maxLength={160}
              rows={3}
              placeholder="Professional web development and digital solutions in Suriname"
              style={{ resize: "vertical" }}
            />
            <small className="admin-helper-text">
              Recommended: 150-160 characters
            </small>
          </div>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={savingSeo}
          >
            {savingSeo ? "Saving..." : "Save SEO Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
