import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllAdminUsers, AdminUserWithRole } from "@/integrations/supabase/queries/adminUsers";
import { EditUserRoleModal } from "@/components/admin/users/EditUserRoleModal";
import { toast } from "sonner";

const UsersAdminPage = () => {
  const [users, setUsers] = useState<AdminUserWithRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<AdminUserWithRole | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    const { data, error } = await getAllAdminUsers();
    if (error) {
      setError(error.message);
      toast.error("Failed to load users");
    } else {
      setUsers(data || []);
      setError(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const columns = [
    {
      key: "full_name",
      label: "Name",
      render: (_value: unknown, user: AdminUserWithRole) => (
        <div>
          <div className="admin-table-cell-name">{user.full_name}</div>
          <div className="admin-table-cell-subtitle">{user.email}</div>
        </div>
      ),
    },
    {
      key: "role",
      label: "Role",
      render: (_value: unknown, user: AdminUserWithRole) => (
        <span
          className={`admin-badge ${
            user.role === "admin"
              ? "admin-badge-success"
              : user.role === "editor"
              ? "admin-badge-info"
              : "admin-badge-default"
          }`}
        >
          {user.role || "No Role"}
        </span>
      ),
    },
    {
      key: "last_login",
      label: "Last Login",
      render: (_value: unknown, user: AdminUserWithRole) => (
        <span style={{ color: "var(--admin-text-muted)", fontSize: "14px" }}>
          {formatDate(user.last_login)}
        </span>
      ),
    },
    {
      key: "created_at",
      label: "Created",
      render: (_value: unknown, user: AdminUserWithRole) => (
        <span style={{ color: "var(--admin-text-muted)", fontSize: "14px" }}>
          {formatDate(user.created_at)}
        </span>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header" style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "var(--admin-accent-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Users style={{ width: "20px", height: "20px", color: "var(--admin-accent)" }} />
            </div>
            <div>
              <h2 className="admin-card-title">User Management</h2>
              <p style={{ color: "var(--admin-text-muted)", fontSize: "14px", margin: 0 }}>
                Manage admin and editor access
              </p>
            </div>
          </div>
        </div>
        <div className="admin-loading-state">Loading users...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "var(--admin-accent-muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Users style={{ width: "20px", height: "20px", color: "var(--admin-accent)" }} />
          </div>
          <div>
            <h2 className="admin-card-title">User Management</h2>
            <p style={{ color: "var(--admin-text-muted)", fontSize: "14px", margin: 0 }}>
              Manage admin and editor access
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error admin-alert-mb">
          {error}
        </div>
      )}

      <DataTable
        columns={columns}
        rows={users}
        emptyMessage="No admin users found"
        onEdit={(user) => setEditingUser(user as AdminUserWithRole)}
      />

      {editingUser && (
        <EditUserRoleModal
          user={editingUser}
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onSuccess={() => {
            setEditingUser(null);
            fetchUsers();
          }}
        />
      )}
    </div>
  );
};

export default UsersAdminPage;
