import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { AdminUserWithRole, updateUserRole } from "@/integrations/supabase/queries/adminUsers";
import { toast } from "sonner";

interface EditUserRoleModalProps {
  user: AdminUserWithRole;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const EditUserRoleModal = ({
  user,
  isOpen,
  onClose,
  onSuccess,
}: EditUserRoleModalProps) => {
  const [selectedRole, setSelectedRole] = useState<"admin" | "editor">(
    user.role || "editor"
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const { error } = await updateUserRole(user.id, selectedRole);
    setIsSaving(false);

    if (error) {
      toast.error("Failed to update role: " + error.message);
      return;
    }

    toast.success(`Role updated to ${selectedRole}`);
    onSuccess();
  };

  const modalStyle: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 200,
    display: "grid",
    width: "100%",
    maxWidth: "450px",
    maxHeight: "90vh",
    overflowY: "auto",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
    color: "var(--admin-text, #ffffff)",
    border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    borderRadius: "8px",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent style={modalStyle}>
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)" }}>
            Edit User Role
          </DialogTitle>
        </DialogHeader>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <p style={{ color: "var(--admin-text-muted)", marginBottom: "8px" }}>
              User: <strong style={{ color: "var(--admin-text)" }}>{user.full_name}</strong>
            </p>
            <p style={{ color: "var(--admin-text-muted)", fontSize: "14px" }}>
              {user.email}
            </p>
          </div>

          <div>
            <label className="admin-label" style={{ display: "block", marginBottom: "8px" }}>
              Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as "admin" | "editor")}
              className="admin-select"
              style={{ width: "100%" }}
            >
              <option value="admin">Admin - Full Access</option>
              <option value="editor">Editor - Limited Access</option>
            </select>
          </div>

          <div
            className={`admin-alert ${
              selectedRole === "admin" ? "admin-alert-warning" : "admin-alert-info"
            }`}
            style={{ fontSize: "13px" }}
          >
            {selectedRole === "admin" ? (
              <>
                <strong>Admin</strong> users have full access to all modules including
                Settings, Users, Pricing, and Services.
              </>
            ) : (
              <>
                <strong>Editor</strong> users can only access Blog, FAQs, Testimonials,
                and view Contacts.
              </>
            )}
          </div>
        </div>

        <DialogFooter style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={onClose}
            className="admin-btn admin-btn-secondary"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="admin-btn admin-btn-primary"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Role"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
