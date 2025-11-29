import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { AdminThemeToggle } from "./AdminThemeToggle";

interface AdminHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export const AdminHeader = ({ title, onToggleSidebar }: AdminHeaderProps) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth/login");
  };

  const userInitials = user?.email?.substring(0, 2).toUpperCase() || "DA";

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
        <div className="admin-avatar">{userInitials}</div>
        <button
          onClick={handleSignOut}
          className="admin-btn admin-btn-ghost"
          style={{ padding: "8px" }}
          aria-label="Sign out"
          title="Sign out"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
};
