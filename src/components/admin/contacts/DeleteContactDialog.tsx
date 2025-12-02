import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { deleteContactSubmission } from "@/integrations/supabase/queries/contactSubmissions";
import type { Tables } from "@/integrations/supabase/types";

interface DeleteContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  contact: Tables<"contact_submissions"> | null;
}

export const DeleteContactDialog = ({ open, onOpenChange, onSuccess, contact }: DeleteContactDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!contact) return;

    setIsDeleting(true);
    const { error } = await deleteContactSubmission(contact.id);
    setIsDeleting(false);

    if (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact submission. Please try again.");
      return;
    }

    handleClose();
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
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          display: 'grid',
          width: '100%',
          maxWidth: "500px",
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: "var(--admin-bg-secondary)",
          border: "1px solid var(--admin-border)",
          borderRadius: '0.5rem',
          boxShadow: 'var(--admin-shadow-lg)',
          color: "var(--admin-text)",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "18px", fontWeight: 600, color: "var(--admin-error)" }}>
            Delete Contact Submission
          </DialogTitle>
          <DialogDescription style={{ color: "var(--admin-text-muted)", marginTop: "0.5rem" }}>
            Are you sure you want to delete the message from{" "}
            <strong style={{ color: "var(--admin-text)" }}>
              {contact?.first_name} {contact?.last_name}
            </strong>
            ? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
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
      </DialogContent>
    </Dialog>
  );
};