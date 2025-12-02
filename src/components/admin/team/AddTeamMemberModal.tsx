import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createTeamMember } from "@/integrations/supabase/queries/teamMembers";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddTeamMemberModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddTeamMemberModal({
  open,
  onClose,
  onSuccess,
}: AddTeamMemberModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<TablesInsert<"team_members">>({
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
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const { error: insertError } = await createTeamMember(formData);
    setIsSubmitting(false);

    if (insertError) {
      setError(`Failed to create team member: ${insertError.message}`);
      return;
    }

    // Reset form
    setFormData({
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

    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setError(null);
      onClose();
    }
  };

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
          backgroundColor: "var(--admin-bg-secondary)",
          color: "var(--admin-text)",
          border: "1px solid var(--admin-border)",
          boxShadow: "var(--admin-shadow-lg)",
          borderRadius: "8px",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Add Team Member
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">
              Full Name <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name || ""}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">
              Role <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <input
              type="text"
              name="role"
              value={formData.role || ""}
              onChange={handleInputChange}
              required
              placeholder="e.g., Lead Developer, Project Manager"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              placeholder="e.g., Senior Engineer"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Short Bio</label>
            <textarea
              name="short_bio"
              value={formData.short_bio || ""}
              onChange={handleInputChange}
              rows={3}
              placeholder="Brief description of the team member"
              className="admin-textarea"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Photo URL</label>
            <input
              type="text"
              name="photo_url"
              value={formData.photo_url || ""}
              onChange={handleInputChange}
              placeholder="https://example.com/photo.jpg"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              placeholder="member@devmart.sr"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">LinkedIn URL</label>
            <input
              type="text"
              name="linkedin_url"
              value={formData.linkedin_url || ""}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/username"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Facebook URL</label>
            <input
              type="text"
              name="facebook_url"
              value={formData.facebook_url || ""}
              onChange={handleInputChange}
              placeholder="https://facebook.com/username"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label className="admin-label">Instagram URL</label>
            <input
              type="text"
              name="instagram_url"
              value={formData.instagram_url || ""}
              onChange={handleInputChange}
              placeholder="https://instagram.com/username"
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              <label className="admin-label">Sort Order</label>
              <input
                type="number"
                name="sort_order"
                value={formData.sort_order || 0}
                onChange={handleNumberChange}
                min="0"
                className="admin-input"
              />
            </div>

            <div style={{ display: "grid", gap: "0.5rem" }}>
              <label className="admin-label">
                Status <span style={{ color: "var(--admin-error)" }}>*</span>
              </label>
              <select
                name="status"
                value={formData.status || "active"}
                onChange={handleInputChange}
                required
                className="admin-select"
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
              className="admin-checkbox"
            />
            <label
              htmlFor="is_featured"
              className="admin-label"
              style={{ marginBottom: 0, cursor: "pointer" }}
            >
              Featured Team Member
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="admin-btn admin-btn-ghost"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="admin-btn admin-btn-primary"
            >
              {isSubmitting ? "Creating..." : "Create Team Member"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}