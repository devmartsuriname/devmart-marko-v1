import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { deleteService, type Service } from "@/integrations/supabase/queries/services";

interface DeleteServiceDialogProps {
  service: Service | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteServiceDialog({ service, open, onClose, onSuccess }: DeleteServiceDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!service) return;

    setIsDeleting(true);
    setError(null);

    const { error: deleteError } = await deleteService(service.id);

    if (deleteError) {
      console.error("Failed to delete service:", deleteError);
      setError("Failed to delete service. Please try again.");
      setIsDeleting(false);
    } else {
      setIsDeleting(false);
      onSuccess();
      onClose();
    }
  };

  const handleClose = () => {
    if (!isDeleting) {
      setError(null);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => { if (!newOpen) handleClose(); }}>
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
          <DialogTitle style={{ color: "var(--admin-text)" }}>Delete Service</DialogTitle>
          <DialogDescription style={{ color: "var(--admin-text-muted)" }}>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div style={{ display: "grid", gap: "1rem" }}>
          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <p style={{ color: "var(--admin-text-muted)", fontSize: "14px" }}>
            Are you sure you want to delete{" "}
            <span style={{ fontWeight: 600, color: "var(--admin-text)" }}>
              {service?.name}
            </span>
            ?
          </p>

          <div className="admin-modal-footer">
            <button
              type="button"
              onClick={handleClose}
              disabled={isDeleting}
              className="admin-btn admin-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="admin-btn admin-btn-destructive"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
