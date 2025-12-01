import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllTeamMembers } from "@/integrations/supabase/queries/teamMembers";
import type { TeamMember } from "@/integrations/supabase/queries/teamMembers";
import AddTeamMemberModal from "@/components/admin/team/AddTeamMemberModal";
import EditTeamMemberModal from "@/components/admin/team/EditTeamMemberModal";
import DeleteTeamMemberDialog from "@/components/admin/team/DeleteTeamMemberDialog";

export default function TeamAdminPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [deletingMember, setDeletingMember] = useState<TeamMember | null>(null);

  const fetchTeamMembers = async () => {
    setIsLoading(true);
    setError(null);

    const { data, error: fetchError } = await getAllTeamMembers();

    setIsLoading(false);

    if (fetchError) {
      setError(`Failed to load team members: ${fetchError.message}`);
      return;
    }

    setTeamMembers(data || []);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const columns = [
    { key: "full_name", label: "Name" },
    { key: "role", label: "Role" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          style={{
            display: "inline-block",
            padding: "0.25rem 0.5rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            borderRadius: "4px",
            backgroundColor: value === "active" ? "rgba(34, 197, 94, 0.1)" : "rgba(156, 163, 175, 0.1)",
            color: value === "active" ? "#22c55e" : "#9ca3af",
            border: `1px solid ${value === "active" ? "rgba(34, 197, 94, 0.2)" : "rgba(156, 163, 175, 0.2)"}`,
          }}
        >
          {value === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "is_featured",
      label: "Featured",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Team Members</h2>
            <p className="admin-card-description">
              Manage the people shown on the Team section of the site. Backed by the 'team_members' table.
            </p>
          </div>
        </div>
        <div style={{ padding: "2rem", textAlign: "center", color: "var(--admin-text-muted, #888)" }}>
          Loading team members...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Team Members</h2>
            <p className="admin-card-description">
              Manage the people shown on the Team section of the site. Backed by the 'team_members' table.
            </p>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "4px",
            color: "#f87171",
          }}
        >
          {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Team Members</h2>
          <p className="admin-card-description">
            Manage the people shown on the Team section of the site. Backed by the 'team_members' table.
          </p>
        </div>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={16} />
          Add Team Member
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={teamMembers}
        onEdit={(row) => setEditingMember(row as TeamMember)}
        onDelete={(row) => setDeletingMember(row as TeamMember)}
      />

      <AddTeamMemberModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchTeamMembers}
      />

      <EditTeamMemberModal
        open={!!editingMember}
        member={editingMember}
        onClose={() => setEditingMember(null)}
        onSuccess={fetchTeamMembers}
      />

      <DeleteTeamMemberDialog
        open={!!deletingMember}
        member={deletingMember}
        onClose={() => setDeletingMember(null)}
        onSuccess={fetchTeamMembers}
      />
    </div>
  );
}
