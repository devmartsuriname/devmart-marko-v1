import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { updatePricingPlan, type PricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { toast } from "sonner";

interface EditPricingPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pricingPlan: PricingPlan | null;
  onSuccess: () => void;
}

export const EditPricingPlanModal = ({
  open,
  onOpenChange,
  pricingPlan,
  onSuccess,
}: EditPricingPlanModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    billing_period: "month" as "month" | "year" | "one-time",
    features: "",
    target_segment: "",
    highlighted: false,
    status: "published" as "draft" | "published" | "archived",
    sort_order: "0",
    highlight_1: "",
    highlight_2: "",
    highlight_3: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open && pricingPlan) {
      setFormData({
        name: pricingPlan.name,
        slug: pricingPlan.slug,
        description: pricingPlan.description,
        price: pricingPlan.price.toString(),
        billing_period: pricingPlan.billing_period,
        features: (pricingPlan.features || []).join(", "),
        target_segment: pricingPlan.target_segment || "",
        highlighted: pricingPlan.highlighted,
        status: pricingPlan.status,
        sort_order: pricingPlan.sort_order.toString(),
        highlight_1: pricingPlan.highlight_1 || "",
        highlight_2: pricingPlan.highlight_2 || "",
        highlight_3: pricingPlan.highlight_3 || "",
      });
    }
  }, [open, pricingPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pricingPlan) return;

    if (!formData.name || !formData.slug || !formData.description || !formData.price) {
      toast.error("Please fill in all required fields");
      return;
    }

    const price = parseFloat(formData.price);
    if (isNaN(price) || price < 0) {
      toast.error("Price must be a valid non-negative number");
      return;
    }

    setIsSubmitting(true);

    const featuresArray = formData.features
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const { error } = await updatePricingPlan(pricingPlan.id, {
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      price: parseFloat(formData.price),
      billing_period: formData.billing_period,
      features: featuresArray,
      target_segment: formData.target_segment || null,
      highlighted: formData.highlighted,
      status: formData.status,
      sort_order: parseInt(formData.sort_order),
      highlight_1: formData.highlight_1 || null,
      highlight_2: formData.highlight_2 || null,
      highlight_3: formData.highlight_3 || null,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error(`Failed to update pricing plan: ${error.message}`);
      return;
    }

    toast.success("Pricing plan updated successfully");
    onOpenChange(false);
    onSuccess();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
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
          <DialogTitle style={{ color: "var(--admin-text)" }}>Edit Pricing Plan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <div>
            <label htmlFor="name" className="admin-form-label">Name *</label>
            <input
              id="name"
              type="text"
              className="admin-form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="slug" className="admin-form-label">Slug *</label>
            <input
              id="slug"
              type="text"
              className="admin-form-input"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              required
              disabled={isSubmitting}
              placeholder="lowercase-with-hyphens"
            />
          </div>

          <div>
            <label htmlFor="description" className="admin-form-label">Description *</label>
            <textarea
              id="description"
              className="admin-textarea"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              disabled={isSubmitting}
              rows={3}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="price" className="admin-form-label">Price *</label>
              <input
                id="price"
                type="number"
                className="admin-form-input"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="billing_period" className="admin-form-label">Billing Period *</label>
              <select
                id="billing_period"
                value={formData.billing_period}
                onChange={(e) => setFormData({ ...formData, billing_period: e.target.value as any })}
                disabled={isSubmitting}
                className="admin-form-input"
                style={{ width: "100%", height: "40px" }}
              >
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="one-time">One-time</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="features" className="admin-form-label">Features (comma-separated)</label>
            <textarea
              id="features"
              className="admin-textarea"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              disabled={isSubmitting}
              rows={4}
              placeholder="Feature 1, Feature 2, Feature 3"
            />
          </div>

          <div>
            <label htmlFor="target_segment" className="admin-form-label">Target Segment</label>
            <input
              id="target_segment"
              type="text"
              className="admin-form-input"
              value={formData.target_segment}
              onChange={(e) => setFormData({ ...formData, target_segment: e.target.value })}
              disabled={isSubmitting}
              placeholder="e.g., Small businesses, Enterprises"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="status" className="admin-form-label">Status *</label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                disabled={isSubmitting}
                className="admin-form-input"
                style={{ width: "100%", height: "40px" }}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort_order" className="admin-form-label">Sort Order</label>
              <input
                id="sort_order"
                type="number"
                className="admin-form-input"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              <input
                type="checkbox"
                id="highlighted"
                checked={formData.highlighted}
                onChange={(e) => setFormData({ ...formData, highlighted: e.target.checked })}
                disabled={isSubmitting}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
              <label htmlFor="highlighted" className="admin-form-label" style={{ cursor: "pointer", margin: 0 }}>
                Highlighted
              </label>
            </div>
          </div>

          {/* Premium Highlights Section */}
          <div style={{ borderTop: "1px solid var(--admin-border)", paddingTop: "1rem", marginTop: "0.5rem" }}>
            <p className="admin-form-label" style={{ marginBottom: "0.75rem", fontSize: "0.875rem", color: "var(--admin-text-muted)" }}>
              Premium Highlights (shown on highlighted plans)
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <div>
                <label htmlFor="highlight_1" className="admin-form-label">Highlight Line 1</label>
                <input
                  id="highlight_1"
                  type="text"
                  className="admin-form-input"
                  value={formData.highlight_1}
                  onChange={(e) => setFormData({ ...formData, highlight_1: e.target.value })}
                  disabled={isSubmitting}
                  placeholder="e.g., Dedicated Account Manager"
                />
              </div>
              <div>
                <label htmlFor="highlight_2" className="admin-form-label">Highlight Line 2</label>
                <input
                  id="highlight_2"
                  type="text"
                  className="admin-form-input"
                  value={formData.highlight_2}
                  onChange={(e) => setFormData({ ...formData, highlight_2: e.target.value })}
                  disabled={isSubmitting}
                  placeholder="e.g., Priority Support 24/7"
                />
              </div>
              <div>
                <label htmlFor="highlight_3" className="admin-form-label">Highlight Line 3</label>
                <input
                  id="highlight_3"
                  type="text"
                  className="admin-form-input"
                  value={formData.highlight_3}
                  onChange={(e) => setFormData({ ...formData, highlight_3: e.target.value })}
                  disabled={isSubmitting}
                  placeholder="e.g., Customized Growth Strategy"
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
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
