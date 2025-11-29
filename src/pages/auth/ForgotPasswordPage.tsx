import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "@/styles/admin.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Password reset request:", { email });
    // Placeholder: no real email sending yet
    alert("Password reset functionality will be connected in the next phase.");
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
            />
          </div>
          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%" }}>
            Send Reset Link
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
