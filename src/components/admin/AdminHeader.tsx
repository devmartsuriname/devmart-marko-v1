import { Menu } from "lucide-react";
import { AdminThemeToggle } from "./AdminThemeToggle";

interface AdminHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export const AdminHeader = ({ title, onToggleSidebar }: AdminHeaderProps) => {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <button
          onClick={onToggleSidebar}
          className="admin-btn admin-btn-ghost"
          style={{ padding: "8px" }}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        <h1 className="admin-header-title">{title}</h1>
      </div>
      <div className="admin-header-right">
        <AdminThemeToggle />
        <div className="admin-avatar">DA</div>
      </div>
    </header>
  );
};
