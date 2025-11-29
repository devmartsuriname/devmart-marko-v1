import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function TestimonialsAdminPage() {
  const columns = [
    { key: "client_name", label: "Client Name" },
    { key: "company", label: "Company" },
    { key: "rating", label: "Rating" },
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
  ];

  const rows = [
    {
      client_name: "Sarah Johnson",
      company: "Tech Startup Inc",
      rating: "5/5",
      status: "published",
      featured: true,
    },
    {
      client_name: "Michael Chen",
      company: "Global Enterprises",
      rating: "5/5",
      status: "published",
      featured: true,
    },
    {
      client_name: "Emily Rodriguez",
      company: "Local Business",
      rating: "4/5",
      status: "published",
      featured: false,
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Testimonials</h2>
          <p className="admin-card-description">
            Manage client reviews and testimonials. Backed by the 'testimonials' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Testimonial
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
