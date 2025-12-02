import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { deletePricingPlan, type PricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { toast } from "sonner";

interface DeletePricingPlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pricingPlan: PricingPlan | null;
  onSuccess: () => void;
}

export const DeletePricingPlanDialog = ({
  open,
  onOpenChange,
  pricingPlan,
  onSuccess,
}: DeletePricingPlanDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!pricingPlan) return;

    setIsDeleting(true);

    const { error } = await deletePricingPlan(pricingPlan.id);

    setIsDeleting(false);

    if (error) {
      toast.error(`Failed to delete pricing plan: ${error.message}`);
      return;
    }

    toast.success("Pricing plan deleted successfully");
    onOpenChange(false);
    onSuccess();
  };

  const handleClose = () => {
    if (!isDeleting) {
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
          maxWidth: "500px",
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
          <DialogTitle>Delete Pricing Plan</DialogTitle>
        </DialogHeader>
        <div>
          <p style={{ marginBottom: "1rem", color: "var(--admin-text-muted)" }}>
            Are you sure you want to delete the pricing plan <strong style={{ color: "var(--admin-text)" }}>"{pricingPlan?.name}"</strong>?
            This action cannot be undone.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <button className="admin-btn admin-btn-ghost" onClick={handleClose} disabled={isDeleting}>
              Cancel
            </button>
            <button
              className="admin-btn admin-btn-destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};