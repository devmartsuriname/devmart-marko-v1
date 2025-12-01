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
          maxWidth: "500px",
          backgroundColor: "var(--admin-bg-secondary)",
          border: "1px solid var(--admin-border)",
          color: "var(--admin-text)",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)" }}>Delete Blog Post</DialogTitle>
        </DialogHeader>

        <div style={{ marginTop: "20px" }}>
          {error && (
            <div
              style={{
                padding: "12px",
                marginBottom: "20px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "6px",
                color: "#ef4444",
              }}
            >
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
              className="admin-btn"
              onClick={handleDelete}
              disabled={isDeleting}
              style={{
                backgroundColor: "#ef4444",
                color: "#ffffff",
                border: "1px solid #dc2626",
              }}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
