import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function FaqAdminPage() {
  const columns = [
    { key: "question", label: "Question" },
    { key: "category", label: "Category" },
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
      question: "What services does Devmart offer?",
      category: "Services",
      status: "published",
      sort_order: 1,
    },
    {
      question: "How long does a typical project take?",
      category: "Process",
      status: "published",
      sort_order: 2,
    },
    {
      question: "Do you offer ongoing support?",
      category: "Support",
      status: "published",
      sort_order: 3,
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">FAQ Items</h2>
          <p className="admin-card-description">
            Manage frequently asked questions. Backed by the 'faq_items' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add FAQ
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
