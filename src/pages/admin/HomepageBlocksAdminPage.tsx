import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllHomepageBlocks, HomepageBlock } from "@/integrations/supabase/queries/homepageBlocks";
import AddHomepageBlockModal from "@/components/admin/homepage/AddHomepageBlockModal";
import EditHomepageBlockModal from "@/components/admin/homepage/EditHomepageBlockModal";
import DeleteHomepageBlockDialog from "@/components/admin/homepage/DeleteHomepageBlockDialog";

const CORE_BLOCK_KEYS = ["hero", "cta"];

export default function HomepageBlocksAdminPage() {
  const [blocks, setBlocks] = useState<HomepageBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editBlock, setEditBlock] = useState<HomepageBlock | null>(null);
  const [deleteBlock, setDeleteBlock] = useState<HomepageBlock | null>(null);

  // Filter state
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  const fetchBlocks = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllHomepageBlocks();
    if (error) {
      console.error("[HomepageBlocksAdminPage] Failed to load blocks", error);
      setError(error.message);
    } else {
      setBlocks(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  // Filter logic
  const filteredBlocks = blocks.filter((block) => {
    return statusFilter === "all" || block.status === statusFilter;
  });

  const columns = [
    { 
      key: "key", 
      label: "Key",
      render: (value: string) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{value}</span>
          {CORE_BLOCK_KEYS.includes(value) && (
            <span className="admin-badge admin-badge-info">Core</span>
          )}
        </div>
      ),
    },
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
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Homepage Content Blocks</h2>
            <p className="admin-card-description" style={{ marginBottom: 0 }}>Manage dynamic content blocks for the homepage hero and CTA sections.</p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-table-empty">Loading homepage blocks...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Homepage Content Blocks</h2>
          <p className="admin-card-description" style={{ marginBottom: 0 }}>Manage dynamic content blocks for the homepage hero and CTA sections.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={16} />
          Add Block
        </button>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error admin-alert-mb">
          {error}
          <button 
            className="admin-btn admin-btn-sm admin-btn-ghost" 
            onClick={fetchBlocks} 
            style={{ marginLeft: '1rem' }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Toolbar: Filters */}
      <div className="admin-toolbar">
        <div className="admin-filter-pills">
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "all" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("all")}
          >
            All
          </button>
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "active" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("active")}
          >
            Active
          </button>
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "inactive" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Empty state when no blocks at all */}
      {filteredBlocks.length === 0 && blocks.length === 0 ? (
        <div className="admin-card">
          <div className="admin-empty-state">
            <h3>No homepage blocks configured</h3>
            <p>Add blocks or seed the standard hero and CTA blocks to manage homepage content.</p>
            <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
              Add Block
            </button>
          </div>
        </div>
      ) : filteredBlocks.length === 0 ? (
        <div className="admin-card">
          <div className="admin-table-empty">No blocks match your filter.</div>
        </div>
      ) : (
        <DataTable
          columns={columns}
          rows={filteredBlocks}
          emptyMessage="No homepage blocks found."
          onEdit={(block) => setEditBlock(block)}
          onDelete={(block) => setDeleteBlock(block)}
        />
      )}

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
