import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { updateTeamMember } from "@/integrations/supabase/queries/teamMembers";
import type { TeamMember } from "@/integrations/supabase/queries/teamMembers";
import type { TablesUpdate } from "@/integrations/supabase/types";

interface EditTeamMemberModalProps {
  open: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditTeamMemberModal({
  open,
  member,
  onClose,
  onSuccess,
}: EditTeamMemberModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<TablesUpdate<"team_members">>({
    full_name: "",
    role: "",
    title: "",
    short_bio: "",
    photo_url: "",
    email: "",
    linkedin_url: "",
    facebook_url: "",
    instagram_url: "",
    is_featured: false,
    sort_order: 0,
    status: "active",
  });

  useEffect(() => {
    if (open && member) {
      setFormData({
        full_name: member.full_name || "",
        role: member.role || "",
        title: member.title || "",
        short_bio: member.short_bio || "",
        photo_url: member.photo_url || "",
        email: member.email || "",
        linkedin_url: member.linkedin_url || "",
        facebook_url: member.facebook_url || "",
        instagram_url: member.instagram_url || "",
        is_featured: member.is_featured || false,
        sort_order: member.sort_order || 0,
        status: member.status || "active",
      });
      setError(null);
    }
  }, [open, member]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
  };

  const validateForm = () => {
    if (!formData.full_name?.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.role?.trim()) {
      setError("Role is required");
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!member) return;

    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const { error: updateError } = await updateTeamMember(member.id, formData);
    setIsSubmitting(false);

    if (updateError) {
      setError(`Failed to update team member: ${updateError.message}`);
      return;
    }

    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setError(null);
      onClose();
    }
  };

  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 200,
          display: "grid",
          width: "100%",
          maxWidth: "700px",
          maxHeight: "90vh",
          overflowY: "auto",
          gap: "1rem",
          padding: "1.5rem",
          backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
          color: "var(--admin-text, #ffffff)",
          border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Edit Team Member
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          {error && (
            <div
              style={{
                padding: "0.75rem",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "4px",
                color: "#f87171",
                fontSize: "0.875rem",
              }}
            >
              {error}
            </div>
          )}

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              Full Name <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name || ""}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              Role <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              type="text"
              name="role"
              value={formData.role || ""}
              onChange={handleInputChange}
              required
              placeholder="e.g., Lead Developer, Project Manager"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              placeholder="e.g., Senior Engineer"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Short Bio</label>
            <textarea
              name="short_bio"
              value={formData.short_bio || ""}
              onChange={handleInputChange}
              rows={3}
              placeholder="Brief description of the team member"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Photo URL</label>
            <input
              type="text"
              name="photo_url"
              value={formData.photo_url || ""}
              onChange={handleInputChange}
              placeholder="https://example.com/photo.jpg"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              placeholder="member@devmart.sr"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>LinkedIn URL</label>
            <input
              type="text"
              name="linkedin_url"
              value={formData.linkedin_url || ""}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/username"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Facebook URL</label>
            <input
              type="text"
              name="facebook_url"
              value={formData.facebook_url || ""}
              onChange={handleInputChange}
              placeholder="https://facebook.com/username"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Instagram URL</label>
            <input
              type="text"
              name="instagram_url"
              value={formData.instagram_url || ""}
              onChange={handleInputChange}
              placeholder="https://instagram.com/username"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Sort Order</label>
              <input
                type="number"
                name="sort_order"
                value={formData.sort_order || 0}
                onChange={handleNumberChange}
                min="0"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                  border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                  borderRadius: "4px",
                  color: "var(--admin-text, #ffffff)",
                  fontSize: "0.875rem",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                Status <span style={{ color: "#f87171" }}>*</span>
              </label>
              <select
                name="status"
                value={formData.status || "active"}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  backgroundColor: "var(--admin-bg-primary, #0f0f1e)",
                  border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
                  borderRadius: "4px",
                  color: "var(--admin-text, #ffffff)",
                  fontSize: "0.875rem",
                }}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              id="is_featured"
              name="is_featured"
              checked={formData.is_featured || false}
              onChange={handleInputChange}
              style={{ width: "16px", height: "16px", cursor: "pointer" }}
            />
            <label
              htmlFor="is_featured"
              style={{ fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}
            >
              Featured Team Member
            </label>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.2))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.5 : 1,
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "var(--admin-accent, #4be89b)",
                border: "none",
                borderRadius: "4px",
                color: "#000",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
