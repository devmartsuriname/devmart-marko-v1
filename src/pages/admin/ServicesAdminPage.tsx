import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function ServicesAdminPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "slug", label: "Slug" },
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
      name: "Custom Web Applications",
      slug: "custom-web-applications",
      status: "published",
      featured: true,
      updated_at: "2025-01-15",
    },
    {
      name: "Government Portal Development",
      slug: "government-portal-development",
      status: "published",
      featured: true,
      updated_at: "2025-01-14",
    },
    {
      name: "Enterprise System Integration",
      slug: "enterprise-system-integration",
      status: "published",
      featured: false,
      updated_at: "2025-01-13",
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Services</h2>
          <p className="admin-card-description">
            Manage the services displayed on the Services and Home pages. Backed by the 'services' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Service
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
