import { useState, useEffect } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllHomepageBlocks, HomepageBlock } from "@/integrations/supabase/queries/homepageBlocks";
import AddHomepageBlockModal from "@/components/admin/homepage/AddHomepageBlockModal";
import EditHomepageBlockModal from "@/components/admin/homepage/EditHomepageBlockModal";
import DeleteHomepageBlockDialog from "@/components/admin/homepage/DeleteHomepageBlockDialog";

export default function HomepageBlocksAdminPage() {
  const [blocks, setBlocks] = useState<HomepageBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editBlock, setEditBlock] = useState<HomepageBlock | null>(null);
  const [deleteBlock, setDeleteBlock] = useState<HomepageBlock | null>(null);

  const fetchBlocks = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllHomepageBlocks();
    if (error) {
      setError(error.message);
    } else {
      setBlocks(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  const columns = [
    { key: "key", label: "Key" },
    {
      key: "block_type",
      label: "Block Type",
      render: (value: string) => (
        <span className="admin-badge admin-badge-outline">{value}</span>
      ),
    },
    {
      key: "title",
      label: "Title",
      render: (value: string | null) => value || <span style={{ color: "var(--admin-text-muted)" }}>—</span>,
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge ${value === "active" ? "admin-badge-success" : "admin-badge-warning"}`}>
          {value}
        </span>
      ),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  if (isLoading) {
    return (
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Homepage Content Blocks</h1>
            <p className="admin-page-description">Manage dynamic content blocks for the homepage (backend only - not yet wired to frontend).</p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-loading-state">Loading homepage blocks...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Homepage Content Blocks</h1>
          <p className="admin-page-description">Manage dynamic content blocks for the homepage (backend only - not yet wired to frontend).</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
          Add Block
        </button>
      </div>

      {error && <div className="admin-alert admin-alert-error admin-alert-mb">{error}</div>}

      <DataTable
        columns={columns}
        rows={blocks}
        emptyMessage="No homepage blocks found. Add your first block!"
        onEdit={(block) => setEditBlock(block)}
        onDelete={(block) => setDeleteBlock(block)}
      />

      <AddHomepageBlockModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setIsAddModalOpen(false);
          fetchBlocks();
        }}
      />

      <EditHomepageBlockModal
        open={!!editBlock}
        block={editBlock}
        onClose={() => setEditBlock(null)}
        onSuccess={() => {
          setEditBlock(null);
          fetchBlocks();
        }}
      />

      <DeleteHomepageBlockDialog
        open={!!deleteBlock}
        block={deleteBlock}
        onClose={() => setDeleteBlock(null)}
        onSuccess={() => {
          setDeleteBlock(null);
          fetchBlocks();
        }}
      />
    </div>
  );
}
