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

  const fetchSubscribers = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllSubscribers();
    if (error) {
      setError(error.message);
    } else {
      setSubscribers(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

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
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Newsletter Subscribers</h1>
            <p className="admin-page-description">View and manage newsletter subscriptions.</p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-loading-state">Loading subscribers...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Newsletter Subscribers</h1>
          <p className="admin-page-description">View and manage newsletter subscriptions.</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span className="admin-badge admin-badge-info">{subscribers.length} total</span>
          <span className="admin-badge admin-badge-success">
            {subscribers.filter((s) => s.status === "subscribed").length} active
          </span>
        </div>
      </div>

      {error && <div className="admin-alert admin-alert-error admin-alert-mb">{error}</div>}

      <DataTable
        columns={columns}
        rows={subscribers}
        emptyMessage="No newsletter subscribers yet."
        onEdit={(subscriber) => setEditSubscriber(subscriber)}
        onDelete={(subscriber) => setDeleteSubscriber(subscriber)}
      />

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
