import { useState, useEffect } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllSubscribers, NewsletterSubscriber } from "@/integrations/supabase/queries/newsletterSubscribers";
import EditSubscriberModal from "@/components/admin/newsletter/EditSubscriberModal";
import DeleteSubscriberDialog from "@/components/admin/newsletter/DeleteSubscriberDialog";

export default function NewsletterAdminPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editSubscriber, setEditSubscriber] = useState<NewsletterSubscriber | null>(null);
  const [deleteSubscriber, setDeleteSubscriber] = useState<NewsletterSubscriber | null>(null);

  // Filter & Search state
  const [statusFilter, setStatusFilter] = useState<"all" | "subscribed" | "unsubscribed">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSubscribers = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllSubscribers();
    if (error) {
      console.error("[NewsletterAdminPage] Failed to load subscribers", error);
      setError(error.message);
    } else {
      setSubscribers(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Filter logic
  const filteredSubscribers = subscribers.filter((sub) => {
    const matchesStatus = statusFilter === "all" || sub.status === statusFilter;
    const matchesSearch = sub.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const columns = [
    { key: "email", label: "Email" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge ${value === "subscribed" ? "admin-badge-success" : "admin-badge-warning"}`}>
          {value}
        </span>
      ),
    },
    {
      key: "subscribed_at",
      label: "Subscribed At",
      render: (value: string) => formatDate(value),
    },
    {
      key: "unsubscribed_at",
      label: "Unsubscribed At",
      render: (value: string | null) => (
        <span style={{ color: value ? "var(--admin-text)" : "var(--admin-text-muted)" }}>
          {formatDate(value)}
        </span>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Newsletter Subscribers</h2>
            <p className="admin-card-description" style={{ marginBottom: 0 }}>View and manage newsletter subscriptions.</p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-table-empty">Loading subscribers...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Newsletter Subscribers</h2>
          <p className="admin-card-description" style={{ marginBottom: 0 }}>View and manage newsletter subscriptions.</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span className="admin-badge admin-badge-info">{subscribers.length} total</span>
          <span className="admin-badge admin-badge-success">
            {subscribers.filter((s) => s.status === "subscribed").length} active
          </span>
        </div>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error admin-alert-mb">
          {error}
          <button 
            className="admin-btn admin-btn-sm admin-btn-ghost" 
            onClick={fetchSubscribers} 
            style={{ marginLeft: '1rem' }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Toolbar: Search & Filters */}
      <div className="admin-toolbar">
        <div className="admin-search">
          <input
            type="text"
            className="admin-input"
            placeholder="Search by email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="admin-filter-pills">
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "all" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("all")}
          >
            All
          </button>
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "subscribed" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("subscribed")}
          >
            Subscribed
          </button>
          <button 
            className={`admin-btn admin-btn-sm ${statusFilter === "unsubscribed" ? "admin-btn-primary" : "admin-btn-ghost"}`} 
            onClick={() => setStatusFilter("unsubscribed")}
          >
            Unsubscribed
          </button>
        </div>
      </div>

      {/* Empty state when no subscribers at all */}
      {filteredSubscribers.length === 0 && subscribers.length === 0 ? (
        <div className="admin-card">
          <div className="admin-empty-state">
            <h3>No subscribers yet</h3>
            <p>When visitors subscribe from your website, they will appear here.</p>
          </div>
        </div>
      ) : filteredSubscribers.length === 0 ? (
        <div className="admin-card">
          <div className="admin-table-empty">No subscribers match your filter.</div>
        </div>
      ) : (
        <DataTable
          columns={columns}
          rows={filteredSubscribers}
          emptyMessage="No newsletter subscribers yet."
          onEdit={(subscriber) => setEditSubscriber(subscriber)}
          onDelete={(subscriber) => setDeleteSubscriber(subscriber)}
        />
      )}

      <EditSubscriberModal
        open={!!editSubscriber}
        subscriber={editSubscriber}
        onClose={() => setEditSubscriber(null)}
        onSuccess={() => {
          setEditSubscriber(null);
          fetchSubscribers();
        }}
      />

      <DeleteSubscriberDialog
        open={!!deleteSubscriber}
        subscriber={deleteSubscriber}
        onClose={() => setDeleteSubscriber(null)}
        onSuccess={() => {
          setDeleteSubscriber(null);
          fetchSubscribers();
        }}
      />
    </div>
  );
}
