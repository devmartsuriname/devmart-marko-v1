import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllServices, type Service } from "@/integrations/supabase/queries/services";
import AddServiceModal from "@/components/admin/services/AddServiceModal";
import EditServiceModal from "@/components/admin/services/EditServiceModal";
import DeleteServiceDialog from "@/components/admin/services/DeleteServiceDialog";

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [deletingService, setDeletingService] = useState<Service | null>(null);

  const fetchServices = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllServices();
    if (error) {
      console.error("Failed to load services:", error);
      setError("Failed to load services. Please try again.");
    } else {
      setServices(data ?? []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "slug", label: "Slug" },
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
    { key: "updated_at", label: "Updated At" },
  ];

  const rows = services.map(service => ({
    ...service,
    updated_at: new Date(service.updated_at).toLocaleDateString()
  }));

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Services</h2>
            <p className="admin-card-description">
              Manage the services displayed on the Services and Home pages. Backed by the 'services' table.
            </p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-table-empty">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Services</h2>
          <p className="admin-card-description">
            Manage the services displayed on the Services and Home pages. Backed by the 'services' table.
          </p>
        </div>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={16} />
          Add Service
        </button>
      </div>
      {error && (
        <div className="admin-alert admin-alert-error admin-alert-mb">
          {error}
        </div>
      )}
      <DataTable 
        columns={columns} 
        rows={rows} 
        emptyMessage="No services found. Click 'Add Service' to create your first service."
        onEdit={(service) => setEditingService(service)}
        onDelete={(service) => setDeletingService(service)}
      />
      
      <AddServiceModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          fetchServices();
        }}
      />
      
      <EditServiceModal
        service={editingService}
        open={!!editingService}
        onClose={() => setEditingService(null)}
        onSuccess={() => {
          setEditingService(null);
          fetchServices();
        }}
      />

      <DeleteServiceDialog
        service={deletingService}
        open={!!deletingService}
        onClose={() => setDeletingService(null)}
        onSuccess={() => {
          setDeletingService(null);
          fetchServices();
        }}
      />
    </div>
  );
}
