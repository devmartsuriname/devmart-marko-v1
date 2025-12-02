import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllCaseStudies } from "@/integrations/supabase/queries/caseStudies";
import type { CaseStudy } from "@/integrations/supabase/queries/caseStudies";
import { AddCaseStudyModal } from "@/components/admin/projects/AddCaseStudyModal";
import { EditCaseStudyModal } from "@/components/admin/projects/EditCaseStudyModal";
import { DeleteCaseStudyDialog } from "@/components/admin/projects/DeleteCaseStudyDialog";

export default function ProjectsAdminPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);
  const [deletingCaseStudy, setDeletingCaseStudy] = useState<CaseStudy | null>(null);

  const fetchCaseStudies = async () => {
    setIsLoading(true);
    setError(null);

    const { data, error: fetchError } = await getAllCaseStudies();

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setCaseStudies(data || []);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const columns = [
    { key: "title", label: "Title" },
    {
      key: "client_name",
      label: "Client",
      render: (value: string | null) => value || "—",
    },
    {
      key: "tags",
      label: "Tags",
      render: (value: string[]) => value.join(", ") || "—",
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`admin-badge admin-badge-${
            value === "published" ? "success" : value === "draft" ? "warning" : "default"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "featured",
      label: "Featured",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "var(--admin-text-muted)" }}>
        <p>Loading case studies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem" }}>
        <div className="admin-alert admin-alert-error">
          <strong>Error loading case studies:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Projects / Case Studies</h2>
          <p className="admin-card-description">
            Manage portfolio projects and case studies. Backed by the 'case_studies' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={16} />
          Add Case Study
        </button>
      </div>
      <DataTable
        columns={columns}
        rows={caseStudies}
        emptyMessage="No case studies found. Create your first case study to get started."
        onEdit={(row) => setEditingCaseStudy(row as CaseStudy)}
        onDelete={(row) => setDeletingCaseStudy(row as CaseStudy)}
      />

      <AddCaseStudyModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchCaseStudies}
      />

      <EditCaseStudyModal
        open={!!editingCaseStudy}
        caseStudy={editingCaseStudy}
        onClose={() => setEditingCaseStudy(null)}
        onSuccess={fetchCaseStudies}
      />

      <DeleteCaseStudyDialog
        open={!!deletingCaseStudy}
        caseStudy={deletingCaseStudy}
        onClose={() => setDeletingCaseStudy(null)}
        onSuccess={fetchCaseStudies}
      />
    </div>
  );
}
