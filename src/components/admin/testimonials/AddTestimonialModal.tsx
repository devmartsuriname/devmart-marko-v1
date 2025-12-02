import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createTestimonial } from "@/integrations/supabase/queries/testimonials";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddTestimonialModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AddTestimonialModal = ({ open, onClose, onSuccess }: AddTestimonialModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    author_name: "",
    author_title: "",
    company_name: "",
    quote: "",
    rating: "",
    avatar_url: "",
    status: "published" as "draft" | "published" | "archived",
    featured: false,
    sort_order: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.author_name.trim() || !formData.quote.trim()) {
      setError("Author name and quote are required");
      return;
    }

    const rating = formData.rating ? parseInt(formData.rating) : null;
    if (rating !== null && (rating < 1 || rating > 5)) {
      setError("Rating must be between 1 and 5");
      return;
    }

    setIsSubmitting(true);

    const payload: TablesInsert<"testimonials"> = {
      author_name: formData.author_name.trim(),
      author_title: formData.author_title.trim() || null,
      company_name: formData.company_name.trim() || null,
      quote: formData.quote.trim(),
      rating,
      avatar_url: formData.avatar_url.trim() || null,
      status: formData.status,
      featured: formData.featured,
      sort_order: formData.sort_order,
    };

    const { error: submitError } = await createTestimonial(payload);

    setIsSubmitting(false);

    if (submitError) {
      setError(submitError.message);
      return;
    }

    setFormData({
      author_name: "",
      author_title: "",
      company_name: "",
      quote: "",
      rating: "",
      avatar_url: "",
      status: "published",
      featured: false,
      sort_order: 0,
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
          <DialogTitle>Add Testimonial</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          {error && (
            <div className="admin-alert admin-alert-error" style={{ marginBottom: "20px" }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">
              Author Name <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.author_name}
              onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">Author Title</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. CEO, Director, Founder"
              value={formData.author_title}
              onChange={(e) => setFormData({ ...formData, author_title: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">Company Name</label>
            <input
              type="text"
              className="admin-input"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">
              Testimonial Quote <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <textarea
              className="admin-input"
              rows={5}
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">Rating (1-5)</label>
            <input
              type="number"
              className="admin-input"
              min="1"
              max="5"
              placeholder="Optional"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">Avatar URL</label>
            <input
              type="text"
              className="admin-input"
              placeholder="/path/to/image.jpg"
              value={formData.avatar_url}
              onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label">Status</label>
            <select
              className="admin-input"
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as "draft" | "published" | "archived",
                })
              }
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="admin-label" style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                style={{ marginRight: "8px" }}
              />
              Featured
            </label>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label className="admin-label">Sort Order</label>
            <input
              type="number"
              className="admin-input"
              value={formData.sort_order}
              onChange={(e) =>
                setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })
              }
            />
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={handleClose}
              className="admin-btn admin-btn-ghost"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Testimonial"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
