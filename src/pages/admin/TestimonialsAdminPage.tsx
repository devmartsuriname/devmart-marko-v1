import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllTestimonials, type Testimonial } from "@/integrations/supabase/queries/testimonials";
import { AddTestimonialModal } from "@/components/admin/testimonials/AddTestimonialModal";
import { EditTestimonialModal } from "@/components/admin/testimonials/EditTestimonialModal";
import { DeleteTestimonialDialog } from "@/components/admin/testimonials/DeleteTestimonialDialog";

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [deletingTestimonial, setDeletingTestimonial] = useState<Testimonial | null>(null);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    setError(null);

    const { data, error: fetchError } = await getAllTestimonials();

    setIsLoading(false);

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    setTestimonials(data || []);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEdit = (row: Testimonial) => {
    setEditingTestimonial(row);
  };

  const handleDelete = (row: Testimonial) => {
    setDeletingTestimonial(row);
  };

  const columns = [
    { key: "author_name", label: "Author" },
    {
      key: "author_title",
      label: "Title",
      render: (value: string | null) => value || "—",
    },
    {
      key: "company_name",
      label: "Company",
      render: (value: string | null) => value || "—",
    },
    {
      key: "rating",
      label: "Rating",
      render: (value: number | null) => (value ? `${value}/5` : "—"),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => {
        const badgeClass =
          value === "published"
            ? "admin-badge-success"
            : value === "draft"
            ? "admin-badge-secondary"
            : "admin-badge-outline";
        return <span className={`admin-badge ${badgeClass}`}>{value}</span>;
      },
    },
    {
      key: "featured",
      label: "Featured",
      render: (value: boolean) => (value ? "Yes" : "No"),
    },
    { key: "sort_order", label: "Sort Order" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Testimonials</h2>
            <p className="admin-card-description">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Testimonials</h2>
          <p className="admin-card-description">
            Manage client reviews and testimonials. Backed by the 'testimonials' table.
          </p>
        </div>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={16} />
          Add Testimonial
        </button>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error" style={{ marginBottom: "20px" }}>
          Failed to load testimonials: {error}
        </div>
      )}

      <DataTable
        columns={columns}
        rows={testimonials}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No testimonials found. Click 'Add Testimonial' to create one."
      />

      <AddTestimonialModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchTestimonials}
      />

      <EditTestimonialModal
        open={!!editingTestimonial}
        testimonial={editingTestimonial}
        onClose={() => setEditingTestimonial(null)}
        onSuccess={fetchTestimonials}
      />

      <DeleteTestimonialDialog
        open={!!deletingTestimonial}
        testimonial={deletingTestimonial}
        onClose={() => setDeletingTestimonial(null)}
        onSuccess={fetchTestimonials}
      />
    </div>
  );
}
