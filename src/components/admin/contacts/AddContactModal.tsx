import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createContactSubmission } from "@/integrations/supabase/queries/contactSubmissions";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const AddContactModal = ({ open, onOpenChange, onSuccess }: AddContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<TablesInsert<"contact_submissions">>>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    status: "new",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await createContactSubmission(formData as TablesInsert<"contact_submissions">);
    setIsSubmitting(false);

    if (error) {
      console.error("Error creating contact:", error);
      alert("Failed to create contact submission. Please try again.");
      return;
    }

    handleClose();
    onSuccess();
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        status: "new",
        notes: "",
      });
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          display: 'grid',
          width: '100%',
          maxWidth: "700px",
          maxHeight: "90vh",
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: "var(--admin-bg-secondary)",
          border: "1px solid var(--admin-border)",
          borderRadius: '0.5rem',
          boxShadow: 'var(--admin-shadow-lg)',
          color: "var(--admin-text)",
          overflowY: "auto",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "18px", fontWeight: 600 }}>Add Contact Submission</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
          <label className="admin-label">
            First Name <span style={{ color: "var(--admin-error)" }}>*</span>
          </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="admin-input"
                required
              />
            </div>
            <div>
          <label className="admin-label">
            Last Name <span style={{ color: "var(--admin-error)" }}>*</span>
          </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="admin-input"
                required
              />
            </div>
          </div>

          <div>
          <label className="admin-label">
            Email <span style={{ color: "var(--admin-error)" }}>*</span>
          </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="admin-input"
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label className="admin-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="admin-input"
              />
            </div>
          </div>

          <div>
          <label className="admin-label">
            Subject <span style={{ color: "var(--admin-error)" }}>*</span>
          </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="admin-input"
              required
            />
          </div>

          <div>
          <label className="admin-label">
            Message <span style={{ color: "var(--admin-error)" }}>*</span>
          </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="admin-input"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="admin-label">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="admin-input"
            >
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label className="admin-label">Internal Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="admin-input"
              rows={3}
              placeholder="Internal notes (not visible to the contact)"
            />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "0.5rem" }}>
            <button
              type="button"
              onClick={handleClose}
              className="admin-btn admin-btn-ghost"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Contact"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
