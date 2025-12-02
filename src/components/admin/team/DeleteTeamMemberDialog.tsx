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
          backgroundColor: "var(--admin-bg-secondary)",
          color: "var(--admin-text)",
          border: "1px solid var(--admin-border)",
          boxShadow: "var(--admin-shadow-lg)",
          borderRadius: "8px",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Delete Team Member
          </DialogTitle>
        </DialogHeader>

        <div style={{ display: "grid", gap: "1rem" }}>
          <p style={{ fontSize: "0.875rem", lineHeight: "1.5", color: "var(--admin-text-muted)" }}>
            Are you sure you want to remove <strong style={{ color: "var(--admin-text)" }}>{member.full_name}</strong> from the team list?
            This will remove them from the public Team section.
          </p>

          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button
              type="button"
              onClick={handleClose}
              disabled={isDeleting}
              className="admin-btn admin-btn-ghost"
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