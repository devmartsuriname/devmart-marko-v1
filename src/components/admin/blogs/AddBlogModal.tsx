import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createBlogPost } from "@/integrations/supabase/queries/blogPosts";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddBlogModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AddBlogModal = ({ open, onClose, onSuccess }: AddBlogModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const [formData, setFormData] = useState<TablesInsert<"blog_posts">>({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    featured_image: "",
    status: "draft",
    published_at: null,
    meta_title: "",
    meta_description: "",
  });

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && formData.title) {
      const autoSlug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setFormData((prev) => ({ ...prev, slug: autoSlug }));
    }
  }, [formData.title, slugManuallyEdited]);

  const handleSlugChange = (value: string) => {
    setSlugManuallyEdited(true);
    setFormData((prev) => ({ ...prev, slug: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.title?.trim()) {
      setError("Title is required");
      return;
    }
    if (!formData.slug?.trim()) {
      setError("Slug is required");
      return;
    }
    if (!formData.category?.trim()) {
      setError("Category is required");
      return;
    }
    if (!formData.content?.trim()) {
      setError("Content is required");
      return;
    }

    setIsSubmitting(true);

    // Clean up empty strings to null for optional fields
    const cleanedData: TablesInsert<"blog_posts"> = {
      ...formData,
      excerpt: formData.excerpt?.trim() || null,
      featured_image: formData.featured_image?.trim() || null,
      meta_title: formData.meta_title?.trim() || null,
      meta_description: formData.meta_description?.trim() || null,
    };

    const { error: createError } = await createBlogPost(cleanedData);

    if (createError) {
      setError(createError.message);
      setIsSubmitting(false);
      return;
    }

    // Reset form
    setFormData({
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      content: "",
      featured_image: "",
      status: "draft",
      published_at: null,
      meta_title: "",
      meta_description: "",
    });
    setSlugManuallyEdited(false);
    setIsSubmitting(false);
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
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          color: "var(--admin-text)",
          overflowY: "auto",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)" }}>Add Blog Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          {error && (
            <div
              style={{
                padding: "12px",
                marginBottom: "20px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "6px",
                color: "#ef4444",
              }}
            >
              {error}
            </div>
          )}

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">
              Title <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.title || ""}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">
              Slug <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.slug || ""}
              onChange={(e) => handleSlugChange(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <small style={{ color: "var(--admin-text-secondary)", fontSize: "12px" }}>
              URL-friendly identifier (auto-generated from title)
            </small>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">
              Category <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.category || ""}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">Excerpt</label>
            <textarea
              className="admin-input"
              value={formData.excerpt || ""}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              disabled={isSubmitting}
              rows={3}
              style={{ resize: "vertical" }}
            />
            <small style={{ color: "var(--admin-text-secondary)", fontSize: "12px" }}>
              Short summary for listings
            </small>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">
              Content <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              className="admin-input"
              value={formData.content || ""}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              disabled={isSubmitting}
              rows={10}
              style={{ resize: "vertical", fontFamily: "monospace", fontSize: "13px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">Featured Image URL</label>
            <input
              type="text"
              className="admin-input"
              value={formData.featured_image || ""}
              onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
              disabled={isSubmitting}
              placeholder="/path/to/image.jpg"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">
              Status <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              className="admin-input"
              value={formData.status || "draft"}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value as "draft" | "published" | "archived" })
              }
              disabled={isSubmitting}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">Published Date</label>
            <input
              type="date"
              className="admin-input"
              value={formData.published_at || ""}
              onChange={(e) => setFormData({ ...formData, published_at: e.target.value || null })}
              disabled={isSubmitting}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">Meta Title (SEO)</label>
            <input
              type="text"
              className="admin-input"
              value={formData.meta_title || ""}
              onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="admin-label">Meta Description (SEO)</label>
            <textarea
              className="admin-input"
              value={formData.meta_description || ""}
              onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
              disabled={isSubmitting}
              rows={3}
              style={{ resize: "vertical" }}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "24px" }}>
            <button type="button" className="admin-btn admin-btn-secondary" onClick={handleClose} disabled={isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Blog Post"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
