import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { updateSubscriberStatus, NewsletterSubscriber } from "@/integrations/supabase/queries/newsletterSubscribers";
import { toast } from "sonner";

interface EditSubscriberModalProps {
  open: boolean;
  subscriber: NewsletterSubscriber | null;
  onClose: () => void;
  onSuccess: () => void;
}

const modalContentStyle: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 200,
  display: "grid",
  width: "100%",
  maxWidth: "400px",
  maxHeight: "90vh",
  overflowY: "auto",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
  color: "var(--admin-text, #ffffff)",
  border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
  borderRadius: "8px",
};

export default function EditSubscriberModal({ open, subscriber, onClose, onSuccess }: EditSubscriberModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("subscribed");

  useEffect(() => {
    if (subscriber) {
      setStatus(subscriber.status);
    }
  }, [subscriber]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriber) return;

    setIsSubmitting(true);
    const { error } = await updateSubscriberStatus(subscriber.id, status);

    if (error) {
      toast.error("Failed to update subscriber: " + error.message);
    } else {
      toast.success("Subscriber updated successfully");
      onSuccess();
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent style={modalContentStyle}>
        <DialogHeader>
          <DialogTitle style={{ color: "var(--admin-text)", fontSize: "1.25rem", fontWeight: 600 }}>
            Edit Subscriber
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-label">Email</label>
            <input
              type="email"
              className="admin-input"
              value={subscriber?.email || ""}
              disabled
              style={{ opacity: 0.7 }}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Status</label>
            <select
              className="admin-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="subscribed">Subscribed</option>
              <option value="unsubscribed">Unsubscribed</option>
            </select>
          </div>
          <DialogFooter style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
            <button type="button" className="admin-btn admin-btn-ghost" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
