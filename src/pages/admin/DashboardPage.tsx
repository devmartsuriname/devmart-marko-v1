import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Briefcase, FolderKanban, FileText, Mail, Plus, Settings } from "lucide-react";
import { getAllServices } from "@/integrations/supabase/queries/services";
import { getAllCaseStudies } from "@/integrations/supabase/queries/caseStudies";
import { getAllBlogPosts } from "@/integrations/supabase/queries/blogPosts";
import { getAllContactSubmissions, ContactSubmission } from "@/integrations/supabase/queries/contactSubmissions";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    services: 0,
    caseStudies: 0,
    blogPosts: 0,
    newContacts: 0,
  });
  const [recentContacts, setRecentContacts] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      const [services, caseStudies, blogs, contacts] = await Promise.all([
        getAllServices(),
        getAllCaseStudies(),
        getAllBlogPosts(),
        getAllContactSubmissions(),
      ]);

      setStats({
        services: services.data?.length || 0,
        caseStudies: caseStudies.data?.length || 0,
        blogPosts: blogs.data?.length || 0,
        newContacts: contacts.data?.filter((c) => c.status === "new").length || 0,
      });

      setRecentContacts((contacts.data || []).slice(0, 5));
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    return `${diffDays}d ago`;
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "new":
        return "admin-badge-info";
      case "read":
        return "admin-badge-warning";
      case "responded":
        return "admin-badge-success";
      case "archived":
        return "admin-badge-default";
      default:
        return "admin-badge-default";
    }
  };

  const statCards = [
    {
      label: "Services",
      value: stats.services,
      icon: Briefcase,
      link: "/admin/services",
      colorClass: "accent",
    },
    {
      label: "Case Studies",
      value: stats.caseStudies,
      icon: FolderKanban,
      link: "/admin/projects",
      colorClass: "info",
    },
    {
      label: "Blog Posts",
      value: stats.blogPosts,
      icon: FileText,
      link: "/admin/blog",
      colorClass: "warning",
    },
    {
      label: "New Contacts",
      value: stats.newContacts,
      icon: Mail,
      link: "/admin/contacts",
      colorClass: "success",
    },
  ];

  const quickActions = [
    { label: "Add Service", icon: Plus, link: "/admin/services" },
    { label: "Add Blog Post", icon: Plus, link: "/admin/blog" },
    { label: "Add Case Study", icon: Plus, link: "/admin/projects" },
    { label: "Site Settings", icon: Settings, link: "/admin/settings" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="dashboard-header">
          <h2 className="dashboard-header-title">Welcome to Devmart Admin</h2>
          <p className="dashboard-header-description">Loading dashboard data...</p>
        </div>
        <div className="dashboard-stats">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="dashboard-stat-card" style={{ opacity: 0.6 }}>
              <div className="dashboard-skeleton" style={{ width: 48, height: 48 }} />
              <div className="stat-content">
                <div className="dashboard-skeleton" style={{ width: 60, height: 28, marginBottom: 8 }} />
                <div className="dashboard-skeleton" style={{ width: 80, height: 16 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="dashboard-header">
        <h2 className="dashboard-header-title">Welcome to Devmart Admin</h2>
        <p className="dashboard-header-description">
          Manage your content, services, and customer interactions
        </p>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} to={stat.link} className="dashboard-stat-card">
              <div className={`stat-icon-wrapper ${stat.colorClass}`}>
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Grid Layout: Recent Contacts + Quick Actions */}
      <div className="dashboard-grid">
        {/* Recent Contacts Panel */}
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <h3 className="dashboard-panel-title">Recent Contacts</h3>
            <Link to="/admin/contacts" className="admin-btn admin-btn-ghost admin-btn-sm">
              View All →
            </Link>
          </div>

          {recentContacts.length === 0 ? (
            <div className="dashboard-empty-state">No recent contacts</div>
          ) : (
            <div className="contact-list">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="contact-item">
                  <div className="contact-avatar">
                    {contact.first_name.charAt(0)}
                    {contact.last_name.charAt(0)}
                  </div>
                  <div className="contact-info">
                    <div className="contact-name">
                      {contact.first_name} {contact.last_name}
                    </div>
                    <div className="contact-subject">{contact.subject}</div>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-time">{formatTimeAgo(contact.created_at)}</span>
                    <span className={`admin-badge ${getStatusBadgeClass(contact.status)}`}>
                      {contact.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions Panel */}
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <h3 className="dashboard-panel-title">Quick Actions</h3>
          </div>
          <div className="quick-actions-grid">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} to={action.link} className="quick-action-item">
                  <Icon size={18} />
                  <span>{action.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
