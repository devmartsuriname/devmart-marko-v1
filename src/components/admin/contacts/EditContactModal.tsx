import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { updateContactSubmission } from "@/integrations/supabase/queries/contactSubmissions";
import type { Tables, TablesUpdate } from "@/integrations/supabase/types";

interface EditContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  contact: Tables<"contact_submissions"> | null;
}

export const EditContactModal = ({ open, onOpenChange, onSuccess, contact }: EditContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<TablesUpdate<"contact_submissions">>>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    status: "new",
    notes: "",
    responded_at: null,
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone || "",
        company: contact.company || "",
        subject: contact.subject,
        message: contact.message,
        status: contact.status,
        notes: contact.notes || "",
        responded_at: contact.responded_at,
      });
    }
  }, [contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updates: any = { ...prev, [name]: value };
      
      // Auto-set responded_at when status changes to "responded"
      if (name === "status" && value === "responded" && !prev.responded_at) {
        updates.responded_at = new Date().toISOString();
      }
      
      return updates;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contact || !formData.first_name || !formData.last_name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await updateContactSubmission(contact.id, formData);
    setIsSubmitting(false);

    if (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact submission. Please try again.");
      return;
    }

    handleClose();
    onSuccess();
  };

  const handleClose = () => {
    if (!isSubmitting) {
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
          <DialogTitle style={{ fontSize: "18px", fontWeight: 600 }}>Edit Contact Submission</DialogTitle>
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
              className="admin-textarea"
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
              className="admin-select"
            >
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {formData.responded_at && (
            <div>
              <label className="admin-label">Responded At</label>
              <input
                type="text"
                value={new Date(formData.responded_at).toLocaleString()}
                className="admin-input"
                disabled
                style={{ backgroundColor: "var(--admin-bg-tertiary)", cursor: "not-allowed", opacity: 0.7 }}
              />
            </div>
          )}

          <div>
            <label className="admin-label">Internal Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="admin-textarea"
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
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};