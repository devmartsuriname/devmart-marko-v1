import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { createService } from "@/integrations/supabase/queries/services";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddServiceModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddServiceModal({ open, onClose, onSuccess }: AddServiceModalProps) {
  console.log("[AddServiceModal] Render, open:", open);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const [formData, setFormData] = useState<TablesInsert<"services">>({
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

  // Auto-generate slug from name
  useEffect(() => {
    if (!slugManuallyEdited && formData.name) {
      const generatedSlug = formData.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.name, slugManuallyEdited]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (name === "slug") {
      setSlugManuallyEdited(true);
    }

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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const { error: insertError } = await createService(formData);

    if (insertError) {
      console.error("Failed to create service:", insertError);
      setError("Failed to create service. Please try again.");
      setIsSubmitting(false);
    } else {
      // Reset form
      setFormData({
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
      setSlugManuallyEdited(false);
      setIsSubmitting(false);
      onSuccess();
      onClose();
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setError(null);
      setSlugManuallyEdited(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) handleClose();
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--admin-card-bg)] border-[var(--admin-border)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--admin-text)]">Add New Service</DialogTitle>
          <DialogDescription className="text-[var(--admin-text-muted)]">
            Create a new service offering for your site.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div
              className="p-3 rounded-lg text-sm"
              style={{
                backgroundColor: "rgba(244, 67, 54, 0.1)",
                color: "#f44336",
                border: "1px solid rgba(244, 67, 54, 0.2)",
              }}
            >
              {error}
            </div>
          )}

          <div className="admin-form-group">
            <label htmlFor="name" className="admin-form-label">
              Service Name <span style={{ color: "#f44336" }}>*</span>
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
              Slug <span style={{ color: "#f44336" }}>*</span>
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
            <small className="text-[var(--admin-text-muted)] text-xs mt-1 block">
              Auto-generated from name. Edit to override.
            </small>
          </div>

          <div className="admin-form-group">
            <label htmlFor="description" className="admin-form-label">
              Description <span style={{ color: "#f44336" }}>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="admin-form-input"
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
              className="admin-form-input"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="admin-form-group">
              <label htmlFor="status" className="admin-form-label">
                Status <span style={{ color: "#f44336" }}>*</span>
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="admin-form-input"
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
              <div className="flex items-center h-[42px]">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-[var(--admin-border)] bg-[var(--admin-bg)] checked:bg-[var(--admin-accent)]"
                />
                <label htmlFor="featured" className="ml-2 text-sm text-[var(--admin-text-muted)]">
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
              className="admin-form-input"
              rows={2}
              placeholder="SEO meta description..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[var(--admin-border)]">
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
              {isSubmitting ? "Creating..." : "Create Service"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
