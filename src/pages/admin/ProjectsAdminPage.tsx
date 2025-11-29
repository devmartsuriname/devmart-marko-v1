import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function ProjectsAdminPage() {
  const columns = [
    { key: "title", label: "Title" },
    { key: "client", label: "Client" },
    { key: "tags", label: "Tags" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "published" ? "success" : "warning"}`}>
          {value}
        </span>
      ),
    },
    {
      key: "featured",
      label: "Featured",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    { key: "updated_at", label: "Updated At" },
  ];

  const rows = [
    {
      title: "Government Ministry Portal",
      client: "Public Sector",
      tags: "Web Development, Portal",
      status: "published",
      featured: true,
      updated_at: "2025-01-15",
    },
    {
      title: "Enterprise Resource Planning System",
      client: "Corporate Client",
      tags: "ERP, Integration",
      status: "published",
      featured: true,
      updated_at: "2025-01-12",
    },
    {
      title: "E-Commerce Platform",
      client: "Retail Business",
      tags: "E-Commerce, Web App",
      status: "published",
      featured: false,
      updated_at: "2025-01-10",
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Projects / Case Studies</h2>
          <p className="admin-card-description">
            Manage portfolio projects and case studies. Backed by the 'case_studies' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Project
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
