import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { deleteFaqItem } from "@/integrations/supabase/queries/faqItems";
import type { FaqItem } from "@/integrations/supabase/queries/faqItems";

interface DeleteFaqItemDialogProps {
  open: boolean;
  faq: FaqItem | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const DeleteFaqItemDialog = ({ open, faq, onClose, onSuccess }: DeleteFaqItemDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!faq) return;

    setIsDeleting(true);
    setError(null);

    const { error: deleteError } = await deleteFaqItem(faq.id);

    if (deleteError) {
      setError(deleteError.message);
      setIsDeleting(false);
      return;
    }

    setIsDeleting(false);
    onSuccess();
    onClose();
  };

  if (!faq) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          display: 'grid',
          width: '100%',
          maxWidth: '500px',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: 'var(--admin-bg-secondary, #1a1a2e)',
          color: 'var(--admin-text, #ffffff)',
          border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Delete FAQ Item</h2>
          <button
            onClick={onClose}
            disabled={isDeleting}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--admin-text, #ffffff)',
              cursor: isDeleting ? 'not-allowed' : 'pointer',
              padding: '0.25rem',
              opacity: isDeleting ? 0.5 : 1,
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {error && (
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '4px',
                color: '#ef4444',
                fontSize: '0.875rem',
              }}
            >
              {error}
            </div>
          )}

          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5' }}>
            Are you sure you want to delete the FAQ <strong>"{faq.question}"</strong>?
          </p>

          <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
            This will remove it from the public FAQ page. This action cannot be undone.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={onClose}
              disabled={isDeleting}
              className="admin-btn admin-btn-secondary"
              style={{ flex: 1 }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="admin-btn"
              style={{
                flex: 1,
                backgroundColor: '#ef4444',
                color: '#ffffff',
                border: 'none',
              }}
            >
              {isDeleting ? "Deleting..." : "Delete FAQ"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
