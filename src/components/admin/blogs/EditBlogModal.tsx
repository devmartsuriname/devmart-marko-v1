import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { updateBlogPost } from "@/integrations/supabase/queries/blogPosts";
import type { BlogPost } from "@/integrations/supabase/queries/blogPosts";
import type { TablesUpdate } from "@/integrations/supabase/types";

interface EditBlogModalProps {
  open: boolean;
  post: BlogPost | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const EditBlogModal = ({ open, post, onClose, onSuccess }: EditBlogModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<TablesUpdate<"blog_posts">>({
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

  // Pre-fill form when post changes
  useEffect(() => {
    if (open && post) {
      setFormData({
        title: post.title || "",
        slug: post.slug || "",
        category: post.category || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        featured_image: post.featured_image || "",
        status: post.status || "draft",
        published_at: post.published_at || null,
        meta_title: post.meta_title || "",
        meta_description: post.meta_description || "",
      });
      setError(null);
    }
  }, [open, post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!post) return;

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
    const cleanedData: TablesUpdate<"blog_posts"> = {
      ...formData,
      excerpt: formData.excerpt?.trim() || null,
      featured_image: formData.featured_image?.trim() || null,
      meta_title: formData.meta_title?.trim() || null,
      meta_description: formData.meta_description?.trim() || null,
    };

    const { error: updateError } = await updateBlogPost(post.id, cleanedData);

    if (updateError) {
      setError(updateError.message);
      setIsSubmitting(false);
      return;
    }

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

  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        style={{
          maxWidth: "700px",
          maxHeight: "90vh",
          overflow: "auto",
          backgroundColor: "var(--admin-bg-secondary)",
          border: "1px solid var(--admin-border)",
          color: "var(--admin-text)",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)" }}>Edit Blog Post</DialogTitle>
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
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              disabled={isSubmitting}
              required
            />
            <small style={{ color: "var(--admin-text-secondary)", fontSize: "12px" }}>
              URL-friendly identifier
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
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
