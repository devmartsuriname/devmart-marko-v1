import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { updateService, type Service } from "@/integrations/supabase/queries/services";
import type { TablesUpdate } from "@/integrations/supabase/types";

interface EditServiceModalProps {
  service: Service | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditServiceModal({ service, open, onClose, onSuccess }: EditServiceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<TablesUpdate<"services">>({
    name: "",
    slug: "",
    description: "",
    short_description: "",
    icon: "",
    status: "draft",
    featured: false,
    sort_order: 0,
    meta_title: "",
    meta_description: "",
  });

  // Pre-populate form when service changes
  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name,
        slug: service.slug,
        description: service.description,
        short_description: service.short_description,
        icon: service.icon,
        status: service.status,
        featured: service.featured,
        sort_order: service.sort_order,
        meta_title: service.meta_title,
        meta_description: service.meta_description,
      });
    }
  }, [service]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? 0 : parseInt(value, 10),
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name?.trim()) {
      setError("Service name is required");
      return false;
    }
    if (!formData.slug?.trim()) {
      setError("Slug is required");
      return false;
    }
    if (!formData.description?.trim()) {
      setError("Description is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm() || !service) {
      return;
    }

    setIsSubmitting(true);

    const { error: updateError } = await updateService(service.id, formData);

    if (updateError) {
      console.error("Failed to update service:", updateError);
      setError("Failed to update service. Please try again.");
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
      onSuccess();
      onClose();
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setError(null);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => { if (!newOpen) handleClose(); }}>
      <DialogContent
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          display: 'grid',
          width: '100%',
          maxWidth: "700px",
          maxHeight: "90vh",
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: "var(--admin-bg-secondary)",
          border: "1px solid var(--admin-border)",
          borderRadius: '0.5rem',
          boxShadow: 'var(--admin-shadow-lg)',
          color: "var(--admin-text)",
          overflowY: "auto",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)" }}>Edit Service</DialogTitle>
          <DialogDescription style={{ color: "var(--admin-text-muted)" }}>
            Update the service details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="admin-modal-form">
          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <div className="admin-form-group">
            <label htmlFor="name" className="admin-form-label">
              Service Name <span className="admin-required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="admin-form-input"
              placeholder="e.g. Custom Web Applications"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="slug" className="admin-form-label">
              Slug <span className="admin-required">*</span>
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="admin-form-input"
              placeholder="custom-web-applications"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="description" className="admin-form-label">
              Description <span className="admin-required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="admin-textarea"
              rows={4}
              placeholder="Full description of the service..."
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="short_description" className="admin-form-label">
              Short Description
            </label>
            <textarea
              id="short_description"
              name="short_description"
              value={formData.short_description || ""}
              onChange={handleInputChange}
              className="admin-textarea"
              rows={2}
              placeholder="Brief summary for cards..."
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="icon" className="admin-form-label">
              Icon URL
            </label>
            <input
              type="text"
              id="icon"
              name="icon"
              value={formData.icon || ""}
              onChange={handleInputChange}
              className="admin-form-input"
              placeholder="/marko-digital-marketing-agency-html/image/Icon-7.png"
            />
          </div>

          <div className="admin-form-row-3">
            <div className="admin-form-group">
              <label htmlFor="status" className="admin-form-label">
                Status <span className="admin-required">*</span>
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="admin-select"
                required
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label htmlFor="sort_order" className="admin-form-label">
                Sort Order
              </label>
              <input
                type="number"
                id="sort_order"
                name="sort_order"
                value={formData.sort_order}
                onChange={handleNumberChange}
                className="admin-form-input"
                min="0"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Featured</label>
              <div className="admin-checkbox-container">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="admin-checkbox"
                />
                <label htmlFor="featured" style={{ fontSize: "14px", color: "var(--admin-text-muted)" }}>
                  Feature on homepage
                </label>
              </div>
            </div>
          </div>

          <div className="admin-form-group">
            <label htmlFor="meta_title" className="admin-form-label">
              Meta Title
            </label>
            <input
              type="text"
              id="meta_title"
              name="meta_title"
              value={formData.meta_title || ""}
              onChange={handleInputChange}
              className="admin-form-input"
              placeholder="SEO meta title..."
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="meta_description" className="admin-form-label">
              Meta Description
            </label>
            <textarea
              id="meta_description"
              name="meta_description"
              value={formData.meta_description || ""}
              onChange={handleInputChange}
              className="admin-textarea"
              rows={2}
              placeholder="SEO meta description..."
            />
          </div>

          <div className="admin-modal-footer">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="admin-btn admin-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="admin-btn admin-btn-primary"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
