import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { deleteCaseStudy } from "@/integrations/supabase/queries/caseStudies";
import type { CaseStudy } from "@/integrations/supabase/queries/caseStudies";
import { toast } from "sonner";

interface DeleteCaseStudyDialogProps {
  open: boolean;
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const DeleteCaseStudyDialog = ({
  open,
  caseStudy,
  onClose,
  onSuccess,
}: DeleteCaseStudyDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!caseStudy) return;

    setIsDeleting(true);

    const { error } = await deleteCaseStudy(caseStudy.id);

    setIsDeleting(false);

    if (error) {
      toast.error(`Failed to delete case study: ${error.message}`);
      return;
    }

    toast.success("Case study deleted successfully");
    onSuccess();
    onClose();
  };

  if (!caseStudy) return null;

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
          maxWidth: "500px",
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
          Delete Case Study
        </h2>
        <p style={{ fontSize: "0.95rem", color: "var(--admin-text-muted)", lineHeight: "1.6" }}>
          Are you sure you want to delete the case study <strong style={{ color: "var(--admin-text)" }}>"{caseStudy.title}"</strong>? This action
          cannot be undone.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "0.5rem" }}>
          <button onClick={onClose} className="admin-btn admin-btn-secondary" disabled={isDeleting}>
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="admin-btn admin-btn-destructive"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};