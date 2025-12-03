import { useState, useEffect } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllPartnerLogos, PartnerLogo } from "@/integrations/supabase/queries/partnerLogos";
import AddPartnerLogoModal from "@/components/admin/partners/AddPartnerLogoModal";
import EditPartnerLogoModal from "@/components/admin/partners/EditPartnerLogoModal";
import DeletePartnerLogoDialog from "@/components/admin/partners/DeletePartnerLogoDialog";

export default function PartnersAdminPage() {
  const [partners, setPartners] = useState<PartnerLogo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editPartner, setEditPartner] = useState<PartnerLogo | null>(null);
  const [deletePartner, setDeletePartner] = useState<PartnerLogo | null>(null);

  const fetchPartners = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await getAllPartnerLogos();
    if (error) {
      setError(error.message);
    } else {
      setPartners(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const columns = [
    {
      key: "logo_url",
      label: "Logo",
      render: (value: string) => (
        <img
          src={value}
          alt="Partner logo"
          style={{ width: 60, height: 40, objectFit: "contain", background: "var(--admin-bg-tertiary)", borderRadius: 4 }}
        />
      ),
    },
    { key: "name", label: "Name" },
    {
      key: "website_url",
      label: "Website",
      render: (value: string | null) =>
        value ? (
          <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: "var(--admin-accent)" }}>
            {value}
          </a>
        ) : (
          <span style={{ color: "var(--admin-text-muted)" }}>—</span>
        ),
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
            <h1 className="admin-page-title">Partner Logos</h1>
            <p className="admin-page-description">Manage partner and client logos displayed on the marketing site.</p>
          </div>
        </div>
        <div className="admin-card">
          <div className="admin-loading-state">Loading partner logos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Partner Logos</h1>
          <p className="admin-page-description">Manage partner and client logos displayed on the marketing site.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
          Add Partner
        </button>
      </div>

      {error && <div className="admin-alert admin-alert-error admin-alert-mb">{error}</div>}

      <DataTable
        columns={columns}
        rows={partners}
        emptyMessage="No partner logos found. Add your first partner!"
        onEdit={(partner) => setEditPartner(partner)}
        onDelete={(partner) => setDeletePartner(partner)}
      />

      <AddPartnerLogoModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setIsAddModalOpen(false);
          fetchPartners();
        }}
      />

      <EditPartnerLogoModal
        open={!!editPartner}
        partner={editPartner}
        onClose={() => setEditPartner(null)}
        onSuccess={() => {
          setEditPartner(null);
          fetchPartners();
        }}
      />

      <DeletePartnerLogoDialog
        open={!!deletePartner}
        partner={deletePartner}
        onClose={() => setDeletePartner(null)}
        onSuccess={() => {
          setDeletePartner(null);
          fetchPartners();
        }}
      />
    </div>
  );
}
