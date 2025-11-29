import { Link } from "react-router-dom";
import { Briefcase, FolderKanban, FileText, Mail } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Services", value: "6", icon: Briefcase, link: "/admin/services" },
    { label: "Case Studies", value: "4", icon: FolderKanban, link: "/admin/projects" },
    { label: "Blog Posts", value: "8", icon: FileText, link: "/admin/blog" },
    { label: "New Contacts", value: "0", icon: Mail, link: "/admin/contacts" },
  ];

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px" }}>
          Welcome to Devmart Admin
        </h2>
        <p style={{ color: "var(--admin-text-muted)" }}>
          Manage your content, services, and customer interactions
        </p>
      </div>

      <div className="dashboard-stats">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} to={stat.link} style={{ textDecoration: "none" }}>
              <div className="stat-card">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <Icon size={24} style={{ color: "var(--admin-accent)" }} />
                  <span className="stat-label">{stat.label}</span>
                </div>
                <div className="stat-value">{stat.value}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Quick Actions</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <Link to="/admin/services" className="admin-btn admin-btn-secondary">
            Manage Services
          </Link>
          <Link to="/admin/projects" className="admin-btn admin-btn-secondary">
            Manage Projects
          </Link>
          <Link to="/admin/contacts" className="admin-btn admin-btn-secondary">
            View Contacts
          </Link>
          <Link to="/admin/settings" className="admin-btn admin-btn-secondary">
            Site Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
