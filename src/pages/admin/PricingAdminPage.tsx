import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";

export default function PricingAdminPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "price", label: "Price" },
    { key: "billing_period", label: "Billing" },
    {
      key: "is_highlighted",
      label: "Highlighted",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "published" ? "success" : "warning"}`}>
          {value}
        </span>
      ),
    },
  ];

  const rows = [
    {
      name: "Starter Website",
      price: "$99",
      billing_period: "monthly",
      is_highlighted: false,
      status: "published",
    },
    {
      name: "Professional Web App",
      price: "$299",
      billing_period: "monthly",
      is_highlighted: true,
      status: "published",
    },
    {
      name: "Enterprise Solution",
      price: "$399",
      billing_period: "monthly",
      is_highlighted: false,
      status: "published",
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Pricing Plans</h2>
          <p className="admin-card-description">
            Manage service packages and pricing tiers. Backed by the 'pricing_plans' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary">
          <Plus size={16} />
          Add Plan
        </button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
