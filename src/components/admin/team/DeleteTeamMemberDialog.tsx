import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { deleteTeamMember } from "@/integrations/supabase/queries/teamMembers";
import type { TeamMember } from "@/integrations/supabase/queries/teamMembers";

interface DeleteTeamMemberDialogProps {
  open: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteTeamMemberDialog({
  open,
  member,
  onClose,
  onSuccess,
}: DeleteTeamMemberDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!member) return;

    setError(null);
    setIsDeleting(true);

    const { error: deleteError } = await deleteTeamMember(member.id);

    setIsDeleting(false);

    if (deleteError) {
      setError(`Failed to delete team member: ${deleteError.message}`);
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

  if (!member) return null;

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
          gap: "1rem",
          padding: "1.5rem",
          backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
          color: "var(--admin-text, #ffffff)",
          border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Delete Team Member
          </DialogTitle>
        </DialogHeader>

        <div style={{ display: "grid", gap: "1rem" }}>
          <p style={{ fontSize: "0.875rem", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
            Are you sure you want to remove <strong>{member.full_name}</strong> from the team list?
            This will remove them from the public Team section.
          </p>

          {error && (
            <div
              style={{
                padding: "0.75rem",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "4px",
                color: "#f87171",
                fontSize: "0.875rem",
              }}
            >
              {error}
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={isDeleting}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                border: "1px solid var(--admin-border, rgba(255,255,255,0.2))",
                borderRadius: "4px",
                color: "var(--admin-text, #ffffff)",
                fontSize: "0.875rem",
                cursor: isDeleting ? "not-allowed" : "pointer",
                opacity: isDeleting ? 0.5 : 1,
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#ef4444",
                border: "none",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: isDeleting ? "not-allowed" : "pointer",
                opacity: isDeleting ? 0.7 : 1,
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
