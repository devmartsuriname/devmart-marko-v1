import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import "@/styles/admin.css";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/services": "Services",
  "/admin/projects": "Projects / Case Studies",
  "/admin/pricing": "Pricing Plans",
  "/admin/testimonials": "Testimonials",
  "/admin/blog": "Blog Posts",
  "/admin/team": "Team Members",
  "/admin/faqs": "FAQ Items",
  "/admin/contacts": "Contact Submissions",
  "/admin/settings": "Site Settings",
};

export const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || "Admin";

  useEffect(() => {
    // Apply admin theme on mount
    const savedTheme = localStorage.getItem("devmart-admin-theme");
    if (savedTheme === "light") {
      document.body.classList.add("lightmode");
    }

    // Cleanup: restore marketing theme preference when leaving admin
    return () => {
      const marketingTheme = localStorage.getItem("devmart-marketing-theme");
      if (marketingTheme === "light") {
        document.body.classList.add("lightmode");
      } else {
        document.body.classList.remove("lightmode");
      }
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={sidebarOpen} />
      <div className={`admin-main-wrapper ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
        <AdminHeader title={pageTitle} onToggleSidebar={toggleSidebar} />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
