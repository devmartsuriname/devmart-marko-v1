import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function BlogAdminPage() {
  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "published" ? "success" : value === "draft" ? "warning" : "info"}`}>
          {value}
        </span>
      ),
    },
    { key: "published_at", label: "Published At" },
    { key: "updated_at", label: "Updated At" },
  ];

  const rows = [
    {
      title: "Building Scalable Web Applications",
      category: "Web Development",
      status: "published",
      published_at: "2025-01-15",
      updated_at: "2025-01-15",
    },
    {
      title: "Modern Government Portal Design",
      category: "Case Studies",
      status: "published",
      published_at: "2025-01-10",
      updated_at: "2025-01-12",
    },
    {
      title: "AI Integration Best Practices",
      category: "Technology",
      status: "draft",
      published_at: "—",
      updated_at: "2025-01-14",
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Blog Posts</h2>
          <p className="admin-card-description">
            Manage blog articles and content. Backed by the 'blog_posts' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Post
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
