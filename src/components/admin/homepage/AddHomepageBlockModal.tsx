import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { createHomepageBlock } from "@/integrations/supabase/queries/homepageBlocks";
import { toast } from "sonner";

interface AddHomepageBlockModalProps {
  open: boolean;
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
  maxWidth: "600px",
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

const BLOCK_TYPES = ["hero", "text-and-image", "stat-grid", "cta", "features", "custom"];

export default function AddHomepageBlockModal({ open, onClose, onSuccess }: AddHomepageBlockModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    key: "",
    block_type: "hero",
    title: "",
    subtitle: "",
    content: "",
    image_url: "",
    button_label: "",
    button_url: "",
    sort_order: 1,
    status: "active",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.key.trim() || !formData.block_type.trim()) {
      toast.error("Key and Block Type are required");
      return;
    }

    setIsSubmitting(true);
    const { error } = await createHomepageBlock({
      key: formData.key.trim().toLowerCase().replace(/\s+/g, "-"),
      block_type: formData.block_type,
      title: formData.title.trim() || null,
      subtitle: formData.subtitle.trim() || null,
      content: formData.content.trim() || null,
      image_url: formData.image_url.trim() || null,
      button_label: formData.button_label.trim() || null,
      button_url: formData.button_url.trim() || null,
      sort_order: formData.sort_order,
      status: formData.status,
    });

    if (error) {
      toast.error("Failed to create block: " + error.message);
    } else {
      toast.success("Homepage block created successfully");
      setFormData({
        key: "", block_type: "hero", title: "", subtitle: "", content: "",
        image_url: "", button_label: "", button_url: "", sort_order: 1, status: "active",
      });
      onSuccess();
    }
    setIsSubmitting(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        key: "", block_type: "hero", title: "", subtitle: "", content: "",
        image_url: "", button_label: "", button_url: "", sort_order: 1, status: "active",
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent style={modalContentStyle}>
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)", fontSize: "1.25rem", fontWeight: 600 }}>
            Add Homepage Block
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="admin-form-group">
              <label className="admin-label">Key * (unique identifier)</label>
              <input
                type="text"
                className="admin-input"
                value={formData.key}
                onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                placeholder="e.g. hero, stats, cta"
                required
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Block Type *</label>
              <select
                className="admin-select"
                value={formData.block_type}
                onChange={(e) => setFormData({ ...formData, block_type: e.target.value })}
              >
                {BLOCK_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Title</label>
            <input
              type="text"
              className="admin-input"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Block title"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Subtitle</label>
            <input
              type="text"
              className="admin-input"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="Block subtitle"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Content</label>
            <textarea
              className="admin-textarea"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Block content (HTML or plain text)"
              rows={3}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Image URL</label>
            <input
              type="text"
              className="admin-input"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="admin-form-group">
              <label className="admin-label">Button Label</label>
              <input
                type="text"
                className="admin-input"
                value={formData.button_label}
                onChange={(e) => setFormData({ ...formData, button_label: e.target.value })}
                placeholder="Get Started"
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Button URL</label>
              <input
                type="text"
                className="admin-input"
                value={formData.button_url}
                onChange={(e) => setFormData({ ...formData, button_url: e.target.value })}
                placeholder="/contact"
              />
            </div>
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
            <button type="button" className="admin-btn admin-btn-ghost" onClick={handleClose} disabled={isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Block"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
