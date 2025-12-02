import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { toast } from "sonner";

interface AddPricingPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const AddPricingPlanModal = ({
  open,
  onOpenChange,
  onSuccess,
}: AddPricingPlanModalProps) => {
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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const handleNameChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      name: value,
      slug: slugManuallyEdited ? prev.slug : value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    }));
  };

  const handleSlugChange = (value: string) => {
    setSlugManuallyEdited(true);
    setFormData((prev) => ({ ...prev, slug: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    const { error } = await createPricingPlan({
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
    });

    setIsSubmitting(false);

    if (error) {
      toast.error(`Failed to create pricing plan: ${error.message}`);
      return;
    }

    toast.success("Pricing plan created successfully");
    setFormData({
      name: "",
      slug: "",
      description: "",
      price: "",
      billing_period: "month",
      features: "",
      target_segment: "",
      highlighted: false,
      status: "published",
      sort_order: "0",
    });
    setSlugManuallyEdited(false);
    onOpenChange(false);
    onSuccess();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: "",
        slug: "",
        description: "",
        price: "",
        billing_period: "month",
        features: "",
        target_segment: "",
        highlighted: false,
        status: "published",
        sort_order: "0",
      });
      setSlugManuallyEdited(false);
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
          <DialogTitle>Add Pricing Plan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              required
              disabled={isSubmitting}
              placeholder="lowercase-with-hyphens"
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              disabled={isSubmitting}
              rows={3}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="billing_period">Billing Period *</Label>
              <select
                id="billing_period"
                value={formData.billing_period}
                onChange={(e) => setFormData({ ...formData, billing_period: e.target.value as any })}
                disabled={isSubmitting}
                className="admin-input"
                style={{ width: "100%", height: "40px" }}
              >
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="one-time">One-time</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="features">Features (comma-separated)</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              disabled={isSubmitting}
              rows={4}
              placeholder="Feature 1, Feature 2, Feature 3"
            />
          </div>

          <div>
            <Label htmlFor="target_segment">Target Segment</Label>
            <Input
              id="target_segment"
              value={formData.target_segment}
              onChange={(e) => setFormData({ ...formData, target_segment: e.target.value })}
              disabled={isSubmitting}
              placeholder="e.g., Small businesses, Enterprises"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <Label htmlFor="status">Status *</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                disabled={isSubmitting}
                className="admin-input"
                style={{ width: "100%", height: "40px" }}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
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
              <Label htmlFor="highlighted" style={{ cursor: "pointer", margin: 0 }}>
                Highlighted
              </Label>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
            <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Pricing Plan"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
