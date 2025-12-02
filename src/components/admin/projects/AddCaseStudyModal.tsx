import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { createCaseStudy } from "@/integrations/supabase/queries/caseStudies";
import { toast } from "sonner";

interface AddCaseStudyModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AddCaseStudyModal = ({ open, onClose, onSuccess }: AddCaseStudyModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    client_name: "",
    tags: "",
    featured_image: "",
    results_summary: "",
    featured: false,
    sort_order: 0,
    status: "published" as "draft" | "published" | "archived",
  });
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      title: value,
      slug: slugManuallyEdited ? prev.slug : generateSlug(value),
    }));
  };

  const handleSlugChange = (value: string) => {
    setSlugManuallyEdited(true);
    setFormData((prev) => ({ ...prev, slug: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    const finalSlug = formData.slug.trim() || generateSlug(formData.title);

    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    setIsSubmitting(true);

    const { error } = await createCaseStudy({
      title: formData.title.trim(),
      slug: finalSlug,
      description: formData.description.trim(),
      client_name: formData.client_name.trim() || null,
      tags: tagsArray,
      featured_image: formData.featured_image.trim() || null,
      results_summary: formData.results_summary.trim() || null,
      featured: formData.featured,
      sort_order: formData.sort_order,
      status: formData.status,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error(`Failed to create case study: ${error.message}`);
      return;
    }

    toast.success("Case study created successfully");
    setFormData({
      title: "",
      slug: "",
      description: "",
      client_name: "",
      tags: "",
      featured_image: "",
      results_summary: "",
      featured: false,
      sort_order: 0,
      status: "published",
    });
    setSlugManuallyEdited(false);
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 200,
          display: "grid",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          gap: "1rem",
          padding: "1.5rem",
          backgroundColor: "var(--admin-bg-secondary)",
          color: "var(--admin-text)",
          border: "1px solid var(--admin-border)",
          borderRadius: "8px",
          boxShadow: "var(--admin-shadow-lg)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
          Add Case Study
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <div>
            <label className="admin-label">
              Title <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="admin-label">
              Slug <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              value={formData.slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="auto-generated from title"
              required
            />
          </div>

          <div>
            <label className="admin-label">
              Description <span style={{ color: "var(--admin-error)" }}>*</span>
            </label>
            <textarea
              className="admin-textarea"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              required
            />
          </div>

          <div>
            <label className="admin-label">Client Name</label>
            <input
              type="text"
              className="admin-input"
              value={formData.client_name}
              onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
            />
          </div>

          <div>
            <label className="admin-label">Tags (comma-separated)</label>
            <input
              type="text"
              className="admin-input"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="Gov-Tech, Portal, React"
            />
          </div>

          <div>
            <label className="admin-label">Featured Image URL</label>
            <input
              type="text"
              className="admin-input"
              value={formData.featured_image}
              onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
              placeholder="/path/to/image.jpg"
            />
          </div>

          <div>
            <label className="admin-label">Results Summary</label>
            <textarea
              className="admin-textarea"
              value={formData.results_summary}
              onChange={(e) => setFormData({ ...formData, results_summary: e.target.value })}
              rows={2}
              placeholder="Brief summary of project impact and results"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <label className="admin-label">Status</label>
              <select
                className="admin-select"
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

            <div>
              <label className="admin-label">Sort Order</label>
              <input
                type="number"
                className="admin-input"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: Number(e.target.value) })}
              />
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "0.5rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="admin-checkbox"
                />
                <span className="admin-label" style={{ marginBottom: 0 }}>Featured</span>
              </label>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "0.5rem" }}>
            <button type="button" onClick={onClose} className="admin-btn admin-btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="admin-btn admin-btn-primary">
              {isSubmitting ? "Creating..." : "Create Case Study"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};