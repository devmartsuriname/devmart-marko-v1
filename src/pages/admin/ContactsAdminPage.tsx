import { useState, useEffect } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllContactSubmissions } from "@/integrations/supabase/queries/contactSubmissions";
import { AddContactModal } from "@/components/admin/contacts/AddContactModal";
import { EditContactModal } from "@/components/admin/contacts/EditContactModal";
import { DeleteContactDialog } from "@/components/admin/contacts/DeleteContactDialog";
import type { Tables } from "@/integrations/supabase/types";

export default function ContactsAdminPage() {
  const [submissions, setSubmissions] = useState<Tables<"contact_submissions">[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingSubmission, setEditingSubmission] = useState<Tables<"contact_submissions"> | null>(null);
  const [deletingSubmission, setDeletingSubmission] = useState<Tables<"contact_submissions"> | null>(null);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: fetchError } = await getAllContactSubmissions();
    setIsLoading(false);

    if (fetchError) {
      console.error("Error fetching submissions:", fetchError);
      setError("Failed to load contact submissions. Please try again.");
      return;
    }

    setSubmissions(data || []);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleEdit = (row: any) => {
    setEditingSubmission(row);
  };

  const handleDelete = (row: any) => {
    setDeletingSubmission(row);
  };

  const columns = [
    {
      key: "from",
      label: "From",
      render: (_: any, row: any) => (
        <div>
          <div style={{ fontWeight: 500 }}>
            {row.first_name} {row.last_name}
          </div>
          <div style={{ fontSize: "13px", color: "var(--admin-text-muted)" }}>{row.email}</div>
        </div>
      ),
    },
    { key: "subject", label: "Subject" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`admin-badge admin-badge-${
            value === "new" ? "info" : value === "read" ? "warning" : value === "responded" ? "success" : "default"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "created_at",
      label: "Created At",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Contact Submissions</h2>
            <p className="admin-card-description">Loading contact submissions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Contact Submissions</h2>
            <p className="admin-card-description" style={{ color: "var(--admin-error)" }}>
              {error}
            </p>
          </div>
        </div>
        <div className="admin-card">
          <button onClick={fetchSubmissions} className="admin-btn admin-btn-primary">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Contact Submissions</h2>
          <p className="admin-card-description">
            Manage contact form submissions from the website. Backed by the 'contact_submissions' table.
          </p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="admin-btn admin-btn-primary">
          + Add Contact
        </button>
      </div>
      <DataTable
        columns={columns}
        rows={submissions}
        emptyMessage="No contact submissions yet"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddContactModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSuccess={fetchSubmissions}
      />

      <EditContactModal
        open={!!editingSubmission}
        onOpenChange={(open) => !open && setEditingSubmission(null)}
        onSuccess={fetchSubmissions}
        contact={editingSubmission}
      />

      <DeleteContactDialog
        open={!!deletingSubmission}
        onOpenChange={(open) => !open && setDeletingSubmission(null)}
        onSuccess={fetchSubmissions}
        contact={deletingSubmission}
      />
    </div>
  );
}
