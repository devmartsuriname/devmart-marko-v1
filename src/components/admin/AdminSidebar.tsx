import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  DollarSign,
  MessageSquare,
  FileText,
  Users,
  HelpCircle,
  Mail,
  Settings,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
}

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/services", label: "Services", icon: Briefcase },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { to: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { to: "/admin/blog", label: "Blog", icon: FileText },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/admin/contacts", label: "Contacts", icon: Mail },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export const AdminSidebar = ({ isOpen }: AdminSidebarProps) => {
  return (
    <aside className={`admin-sidebar ${isOpen ? "" : "collapsed"}`}>
      <div className="admin-sidebar-header">
        <a href="/admin" className="admin-sidebar-logo">
          <img 
            src="/marko-digital-marketing-agency-html/image/devmart-logo.png" 
            alt="Devmart Admin" 
            className="admin-sidebar-logo-img"
          />
        </a>
      </div>
      <nav className="admin-sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="admin-nav-item"
              activeClassName="active"
            >
              <Icon className="admin-nav-icon" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
