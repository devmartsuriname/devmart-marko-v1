import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function TeamAdminPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "published" ? "success" : "warning"}`}>
          {value}
        </span>
      ),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  const rows = [
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      status: "published",
      sort_order: 1,
    },
    {
      name: "Maria Garcia",
      role: "UI/UX Designer",
      status: "published",
      sort_order: 2,
    },
    {
      name: "David Kim",
      role: "Backend Engineer",
      status: "published",
      sort_order: 3,
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Team Members</h2>
          <p className="admin-card-description">
            Manage company team member profiles. Backed by the 'team_members' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Member
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
