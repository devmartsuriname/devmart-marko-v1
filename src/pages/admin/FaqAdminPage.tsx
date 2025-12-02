import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllFaqItems } from "@/integrations/supabase/queries/faqItems";
import type { FaqItem } from "@/integrations/supabase/queries/faqItems";
import { AddFaqItemModal } from "@/components/admin/faqs/AddFaqItemModal";
import { EditFaqItemModal } from "@/components/admin/faqs/EditFaqItemModal";
import { DeleteFaqItemDialog } from "@/components/admin/faqs/DeleteFaqItemDialog";

export default function FaqAdminPage() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [deletingFaq, setDeletingFaq] = useState<FaqItem | null>(null);

  const fetchFaqItems = async () => {
    setIsLoading(true);
    setError(null);

    const { data, error: fetchError } = await getAllFaqItems();

    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
      return;
    }

    setFaqItems(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFaqItems();
  }, []);

  const handleEdit = (row: FaqItem) => {
    setEditingFaq(row);
  };

  const handleDelete = (row: FaqItem) => {
    setDeletingFaq(row);
  };

  const columns = [
    { key: "question", label: "Question" },
    { 
      key: "category", 
      label: "Category",
      render: (value: string | null) => value || "—"
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "active" ? "success" : "default"}`}>
          {value}
        </span>
      ),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">FAQ Items</h2>
            <p className="admin-card-description">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">FAQ Items</h2>
          <p className="admin-card-description">
            Manage frequently asked questions. Backed by the 'faq_items' table.
          </p>
        </div>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={16} />
          Add FAQ Item
        </button>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error">
          Error loading FAQ items: {error}
        </div>
      )}

      <DataTable 
        columns={columns} 
        rows={faqItems}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddFaqItemModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchFaqItems}
      />

      <EditFaqItemModal
        open={!!editingFaq}
        faq={editingFaq}
        onClose={() => setEditingFaq(null)}
        onSuccess={fetchFaqItems}
      />

      <DeleteFaqItemDialog
        open={!!deletingFaq}
        faq={deletingFaq}
        onClose={() => setDeletingFaq(null)}
        onSuccess={fetchFaqItems}
      />
    </div>
  );
}
