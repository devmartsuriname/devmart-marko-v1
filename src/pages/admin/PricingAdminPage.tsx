import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllPricingPlans, type PricingPlan } from "@/integrations/supabase/queries/pricingPlans";
import { AddPricingPlanModal } from "@/components/admin/pricing/AddPricingPlanModal";
import { EditPricingPlanModal } from "@/components/admin/pricing/EditPricingPlanModal";
import { DeletePricingPlanDialog } from "@/components/admin/pricing/DeletePricingPlanDialog";

export default function PricingAdminPage() {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPricingPlan, setEditingPricingPlan] = useState<PricingPlan | null>(null);
  const [deletingPricingPlan, setDeletingPricingPlan] = useState<PricingPlan | null>(null);

  const fetchPricingPlans = async () => {
    setIsLoading(true);
    setError(null);

    const { data, error: fetchError } = await getAllPricingPlans();

    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
      return;
    }

    setPricingPlans(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    {
      key: "price",
      label: "Price",
      render: (value: string, row: PricingPlan) => {
        const period = row.billing_period === "one-time" ? "one-time" : `/ ${row.billing_period}`;
        return `$${value} ${period}`;
      },
    },
    {
      key: "billing_period",
      label: "Billing",
      render: (value: string) => value.charAt(0).toUpperCase() + value.slice(1),
    },
    {
      key: "target_segment",
      label: "Target",
      render: (value: string | null) => value || "—",
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`admin-badge admin-badge-${
            value === "published" ? "success" : value === "draft" ? "default" : "outline"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "highlighted",
      label: "Highlighted",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    { key: "sort_order", label: "Sort" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Pricing Plans</h2>
            <p className="admin-card-description">
              Manage service packages and pricing tiers. Backed by the 'pricing_plans' table.
            </p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-table-empty">Loading pricing plans...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Pricing Plans</h2>
            <p className="admin-card-description">
              Manage service packages and pricing tiers. Backed by the 'pricing_plans' table.
            </p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-table-empty" style={{ color: "var(--admin-error)" }}>
            Error loading pricing plans: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Pricing Plans</h2>
          <p className="admin-card-description">
            Manage service packages and pricing tiers. Backed by the 'pricing_plans' table.
          </p>
        </div>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={16} />
          Add Pricing Plan
        </button>
      </div>
      <DataTable
        columns={columns}
        rows={pricingPlans}
        emptyMessage="No pricing plans found. Create your first plan to get started."
        onEdit={(row) => setEditingPricingPlan(row)}
        onDelete={(row) => setDeletingPricingPlan(row)}
      />

      <AddPricingPlanModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSuccess={fetchPricingPlans}
      />

      <EditPricingPlanModal
        open={!!editingPricingPlan}
        onOpenChange={(open) => !open && setEditingPricingPlan(null)}
        pricingPlan={editingPricingPlan}
        onSuccess={fetchPricingPlans}
      />

      <DeletePricingPlanDialog
        open={!!deletingPricingPlan}
        onOpenChange={(open) => !open && setDeletingPricingPlan(null)}
        pricingPlan={deletingPricingPlan}
        onSuccess={fetchPricingPlans}
      />
    </div>
  );
}
