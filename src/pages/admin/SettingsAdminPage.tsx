export default function SettingsAdminPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Settings save placeholder");
    alert("Settings save functionality will be connected in the next phase.");
  };

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Site Settings</h2>
          <p className="admin-card-description">
            Manage global site configuration. Backed by the 'site_settings' table.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>Brand Information</h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="site_name">
              Site Name
            </label>
            <input
              type="text"
              id="site_name"
              className="admin-form-input"
              defaultValue="Devmart Suriname"
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
              defaultValue="Building Digital Solutions for Suriname"
            />
          </div>
        </div>

        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>Contact Information</h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="contact_email">
              Contact Email
            </label>
            <input
              type="email"
              id="contact_email"
              className="admin-form-input"
              defaultValue="info@devmart.sr"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="admin-form-input"
              defaultValue="+597 854-1211"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="admin-form-input"
              defaultValue="Jagernath Lachmon straat nr. 152, Paramaribo, Suriname"
            />
          </div>
        </div>

        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>Social Links</h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="facebook_url">
              Facebook URL
            </label>
            <input
              type="url"
              id="facebook_url"
              className="admin-form-input"
              defaultValue="https://www.facebook.com/DevmartSuriname/"
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
              placeholder="https://linkedin.com/company/devmart"
            />
          </div>
        </div>

        <div className="admin-card" style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>SEO Settings</h3>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="meta_title">
              Default Meta Title
            </label>
            <input
              type="text"
              id="meta_title"
              className="admin-form-input"
              defaultValue="Devmart Suriname - Web Development & Digital Solutions"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="meta_description">
              Default Meta Description
            </label>
            <input
              type="text"
              id="meta_description"
              className="admin-form-input"
              defaultValue="Professional web development and digital solutions in Suriname"
            />
          </div>
        </div>

        <button type="submit" className="admin-btn admin-btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  );
}
