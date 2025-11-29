import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import "@/styles/admin.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <h1 className="auth-title">Reset Password</h1>
          <p className="auth-description">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ 
              padding: "12px", 
              marginBottom: "16px", 
              backgroundColor: "#fee", 
              color: "#c33", 
              borderRadius: "4px",
              fontSize: "14px"
            }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ 
              padding: "12px", 
              marginBottom: "16px", 
              backgroundColor: "#efe", 
              color: "#3a3", 
              borderRadius: "4px",
              fontSize: "14px"
            }}>
              Password reset link has been sent to your email!
            </div>
          )}
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="admin-form-input"
              placeholder="admin@devmart.sr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || success}
            />
          </div>
          <button 
            type="submit" 
            className="admin-btn admin-btn-primary" 
            style={{ width: "100%" }}
            disabled={loading || success}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <div className="auth-footer">
          <Link to="/auth/login" className="auth-link">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
