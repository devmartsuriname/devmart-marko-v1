import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { deleteBlogPost } from "@/integrations/supabase/queries/blogPosts";
import type { BlogPost } from "@/integrations/supabase/queries/blogPosts";

interface DeleteBlogDialogProps {
  open: boolean;
  post: BlogPost | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const DeleteBlogDialog = ({ open, post, onClose, onSuccess }: DeleteBlogDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!post) return;

    setError(null);
    setIsDeleting(true);

    const { error: deleteError } = await deleteBlogPost(post.id);

    if (deleteError) {
      setError(deleteError.message);
      setIsDeleting(false);
      return;
    }

    setIsDeleting(false);
    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (!isDeleting) {
      setError(null);
      onClose();
    }
  };

  if (!post) return null;

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
          <DialogTitle style={{ color: "var(--admin-text)" }}>Delete Blog Post</DialogTitle>
        </DialogHeader>

        <div style={{ marginTop: "20px" }}>
          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
            Are you sure you want to delete <strong>{post.title}</strong>? This action cannot be undone.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={handleClose}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              type="button"
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
