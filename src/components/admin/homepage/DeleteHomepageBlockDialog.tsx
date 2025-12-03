import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { deleteHomepageBlock, HomepageBlock } from "@/integrations/supabase/queries/homepageBlocks";
import { toast } from "sonner";

interface DeleteHomepageBlockDialogProps {
  open: boolean;
  block: HomepageBlock | null;
  onClose: () => void;
  onSuccess: () => void;
}

const modalContentStyle: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 200,
  display: "grid",
  width: "100%",
  maxWidth: "400px",
  maxHeight: "90vh",
  overflowY: "auto",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
  color: "var(--admin-text, #ffffff)",
  border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
  borderRadius: "8px",
};

export default function DeleteHomepageBlockDialog({ open, block, onClose, onSuccess }: DeleteHomepageBlockDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!block) return;

    setIsDeleting(true);
    const { error } = await deleteHomepageBlock(block.id);

    if (error) {
      toast.error("Failed to delete block: " + error.message);
    } else {
      toast.success("Homepage block deleted successfully");
      onSuccess();
    }
    setIsDeleting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent style={modalContentStyle}>
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)", fontSize: "1.25rem", fontWeight: 600 }}>
            Delete Homepage Block
          </DialogTitle>
          <DialogDescription style={{ color: "var(--admin-text-muted)", marginTop: "0.5rem" }}>
            Are you sure you want to delete the block <strong>"{block?.key}"</strong>? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onClose} disabled={isDeleting}>
            Cancel
          </button>
          <button type="button" className="admin-btn admin-btn-destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
