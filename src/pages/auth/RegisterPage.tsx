import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "@/styles/admin.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    console.log("Registration attempt:", formData);
    // Placeholder: no real registration yet
    alert("Registration functionality will be connected in the next phase. This page is reserved for internal use only.");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-description">
            Register for Devmart Admin access (Internal use only)
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="admin-form-input"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="admin-form-input"
              placeholder="admin@devmart.sr"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="admin-form-input"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="admin-form-input"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%" }}>
            Create Account
          </button>
        </form>
        <div className="auth-footer">
          <Link to="/auth/login" className="auth-link">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
