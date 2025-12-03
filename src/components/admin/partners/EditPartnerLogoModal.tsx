import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { updatePartnerLogo, PartnerLogo } from "@/integrations/supabase/queries/partnerLogos";
import { toast } from "sonner";

interface EditPartnerLogoModalProps {
  open: boolean;
  partner: PartnerLogo | null;
  onClose: () => void;
  onSuccess: () => void;
}

const modalContentStyle: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 200,
  display: "grid",
  width: "100%",
  maxWidth: "500px",
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

export default function EditPartnerLogoModal({ open, partner, onClose, onSuccess }: EditPartnerLogoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    logo_url: "",
    website_url: "",
    sort_order: 1,
    status: "active",
  });

  useEffect(() => {
    if (partner) {
      setFormData({
        name: partner.name,
        logo_url: partner.logo_url,
        website_url: partner.website_url || "",
        sort_order: partner.sort_order,
        status: partner.status,
      });
    }
  }, [partner]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partner) return;
    if (!formData.name.trim() || !formData.logo_url.trim()) {
      toast.error("Name and Logo URL are required");
      return;
    }

    setIsSubmitting(true);
    const { error } = await updatePartnerLogo(partner.id, {
      name: formData.name.trim(),
      logo_url: formData.logo_url.trim(),
      website_url: formData.website_url.trim() || null,
      sort_order: formData.sort_order,
      status: formData.status,
    });

    if (error) {
      toast.error("Failed to update partner: " + error.message);
    } else {
      toast.success("Partner updated successfully");
      onSuccess();
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent style={modalContentStyle}>
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)", fontSize: "1.25rem", fontWeight: 600 }}>
            Edit Partner Logo
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-label">Name *</label>
            <input
              type="text"
              className="admin-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Partner name"
              required
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Logo URL *</label>
            <input
              type="text"
              className="admin-input"
              value={formData.logo_url}
              onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
              placeholder="https://example.com/logo.png"
              required
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Website URL</label>
            <input
              type="text"
              className="admin-input"
              value={formData.website_url}
              onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
              placeholder="https://example.com"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="admin-form-group">
              <label className="admin-label">Sort Order</label>
              <input
                type="number"
                className="admin-input"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 1 })}
                min={1}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Status</label>
              <select
                className="admin-select"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <DialogFooter style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
            <button type="button" className="admin-btn admin-btn-ghost" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
