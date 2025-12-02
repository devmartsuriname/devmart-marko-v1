import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { updateFaqItem } from "@/integrations/supabase/queries/faqItems";
import type { FaqItem } from "@/integrations/supabase/queries/faqItems";
import type { TablesUpdate } from "@/integrations/supabase/types";

interface EditFaqItemModalProps {
  open: boolean;
  faq: FaqItem | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const EditFaqItemModal = ({ open, faq, onClose, onSuccess }: EditFaqItemModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
    sort_order: 0,
    status: "active" as "active" | "inactive",
    is_featured: false,
  });

  useEffect(() => {
    if (open && faq) {
      setFormData({
        question: faq.question || "",
        answer: faq.answer || "",
        category: faq.category || "",
        sort_order: faq.sort_order || 0,
        status: faq.status as "active" | "inactive",
        is_featured: faq.is_featured || false,
      });
      setError(null);
    }
  }, [open, faq]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!faq) return;
    
    setError(null);

    if (!formData.question.trim() || !formData.answer.trim()) {
      setError("Question and answer are required");
      return;
    }

    setIsSubmitting(true);

    const payload: TablesUpdate<"faq_items"> = {
      question: formData.question.trim(),
      answer: formData.answer.trim(),
      category: formData.category.trim() || null,
      sort_order: formData.sort_order,
      status: formData.status,
      is_featured: formData.is_featured,
    };

    const { error: submitError } = await updateFaqItem(faq.id, payload);

    if (submitError) {
      setError(submitError.message);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    onSuccess();
    onClose();
  };

  if (!faq) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          display: 'grid',
          width: '100%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflowY: 'auto',
          gap: '1rem',
          padding: '1.5rem',
          backgroundColor: 'var(--admin-bg-secondary)',
          color: 'var(--admin-text)',
          border: '1px solid var(--admin-border)',
          boxShadow: 'var(--admin-shadow-lg)',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Edit FAQ Item</h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--admin-text)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          {error && (
            <div className="admin-alert admin-alert-error">
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label className="admin-label">
              Question <span className="admin-required">*</span>
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
              className="admin-input"
            />
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label className="admin-label">
              Answer <span className="admin-required">*</span>
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              required
              rows={6}
              className="admin-textarea"
            />
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label className="admin-label">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., Services, Process, General"
              className="admin-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label className="admin-label">Sort Order</label>
              <input
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                className="admin-input"
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label className="admin-label">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "inactive" })}
                className="admin-select"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              id="is_featured"
              checked={formData.is_featured}
              onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
              style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            />
            <label htmlFor="is_featured" style={{ fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }}>
              Featured FAQ
            </label>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="admin-btn admin-btn-secondary"
              style={{ flex: 1 }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="admin-btn admin-btn-primary"
              style={{ flex: 1 }}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
