import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { deleteTestimonial } from "@/integrations/supabase/queries/testimonials";
import type { Testimonial } from "@/integrations/supabase/queries/testimonials";

interface DeleteTestimonialDialogProps {
  open: boolean;
  testimonial: Testimonial | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const DeleteTestimonialDialog = ({
  open,
  testimonial,
  onClose,
  onSuccess,
}: DeleteTestimonialDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!testimonial) return;

    setIsDeleting(true);
    setError(null);

    const { error: deleteError } = await deleteTestimonial(testimonial.id);

    setIsDeleting(false);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (!isDeleting) {
      setError(null);
      onClose();
    }
  };

  if (!testimonial) return null;

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
          <DialogTitle>Delete Testimonial</DialogTitle>
        </DialogHeader>

        <div style={{ marginTop: "20px" }}>
          {error && (
            <div className="admin-alert admin-alert-error" style={{ marginBottom: "20px" }}>
              {error}
            </div>
          )}

          <p style={{ marginBottom: "24px", color: "var(--admin-text-muted)" }}>
            Are you sure you want to delete the testimonial from{" "}
            <strong style={{ color: "var(--admin-text)" }}>
              {testimonial.author_name}
            </strong>
            ? This action cannot be undone.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={handleClose}
              className="admin-btn admin-btn-ghost"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="admin-btn admin-btn-destructive"
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