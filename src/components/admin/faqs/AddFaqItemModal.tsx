import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { createFaqItem } from "@/integrations/supabase/queries/faqItems";
import type { TablesInsert } from "@/integrations/supabase/types";

interface AddFaqItemModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AddFaqItemModal = ({ open, onClose, onSuccess }: AddFaqItemModalProps) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.question.trim() || !formData.answer.trim()) {
      setError("Question and answer are required");
      return;
    }

    setIsSubmitting(true);

    const payload: TablesInsert<"faq_items"> = {
      question: formData.question.trim(),
      answer: formData.answer.trim(),
      category: formData.category.trim() || null,
      sort_order: formData.sort_order,
      status: formData.status,
      is_featured: formData.is_featured,
    };

    const { error: submitError } = await createFaqItem(payload);

    if (submitError) {
      setError(submitError.message);
      setIsSubmitting(false);
      return;
    }

    setFormData({
      question: "",
      answer: "",
      category: "",
      sort_order: 0,
      status: "active",
      is_featured: false,
    });
    setIsSubmitting(false);
    onSuccess();
    onClose();
  };

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
          backgroundColor: 'var(--admin-bg-secondary, #1a1a2e)',
          color: 'var(--admin-text, #ffffff)',
          border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Add FAQ Item</h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--admin-text, #ffffff)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          {error && (
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '4px',
                color: '#ef4444',
                fontSize: '0.875rem',
              }}
            >
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>
              Question <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                backgroundColor: 'var(--admin-bg-tertiary, #0f0f1e)',
                border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
                borderRadius: '4px',
                color: 'var(--admin-text, #ffffff)',
                fontSize: '0.875rem',
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>
              Answer <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              required
              rows={6}
              style={{
                width: '100%',
                padding: '0.5rem',
                backgroundColor: 'var(--admin-bg-tertiary, #0f0f1e)',
                border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
                borderRadius: '4px',
                color: 'var(--admin-text, #ffffff)',
                fontSize: '0.875rem',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., Services, Process, General"
              style={{
                width: '100%',
                padding: '0.5rem',
                backgroundColor: 'var(--admin-bg-tertiary, #0f0f1e)',
                border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
                borderRadius: '4px',
                color: 'var(--admin-text, #ffffff)',
                fontSize: '0.875rem',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Sort Order</label>
              <input
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: 'var(--admin-bg-tertiary, #0f0f1e)',
                  border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
                  borderRadius: '4px',
                  color: 'var(--admin-text, #ffffff)',
                  fontSize: '0.875rem',
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "inactive" })}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: 'var(--admin-bg-tertiary, #0f0f1e)',
                  border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
                  borderRadius: '4px',
                  color: 'var(--admin-text, #ffffff)',
                  fontSize: '0.875rem',
                }}
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
              {isSubmitting ? "Creating..." : "Create FAQ"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
