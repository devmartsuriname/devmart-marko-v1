import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/hooks/useAuth";
import { canAccessRoute } from "@/lib/permissions";
import type { AppRole } from "@/lib/permissions";
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
  UserCog,
  Building2,
  Newspaper,
  Home,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
}

const allNavItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/services", label: "Services", icon: Briefcase },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { to: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { to: "/admin/blog", label: "Blog", icon: FileText },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/admin/contacts", label: "Contacts", icon: Mail },
  { to: "/admin/partners", label: "Partners", icon: Building2 },
  { to: "/admin/newsletter", label: "Newsletter", icon: Newspaper },
  { to: "/admin/homepage", label: "Homepage", icon: Home },
  { to: "/admin/settings", label: "Settings", icon: Settings },
  { to: "/admin/users", label: "Users", icon: UserCog },
];

export const AdminSidebar = ({ isOpen }: AdminSidebarProps) => {
  const { userRole } = useAuth();

  // Filter nav items based on user role
  const navItems = allNavItems.filter((item) => 
    canAccessRoute(userRole as AppRole, item.to)
  );

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
