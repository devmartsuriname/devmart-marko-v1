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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Service</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && (
            <div
              className="p-3 rounded-lg text-sm"
              style={{
                backgroundColor: "rgba(244, 67, 54, 0.1)",
                color: "#f44336",
                border: "1px solid rgba(244, 67, 54, 0.2)",
              }}
            >
              {error}
            </div>
          )}

          <p className="text-[var(--admin-text-muted)] text-sm">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-[var(--admin-text)]">
              {service?.name}
            </span>
            ?
          </p>

          <div className="flex justify-end gap-3 pt-4 border-t border-[var(--admin-border)]">
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
              className="admin-btn"
              style={{
                backgroundColor: "#f44336",
                color: "#ffffff",
                border: "1px solid #f44336",
              }}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
