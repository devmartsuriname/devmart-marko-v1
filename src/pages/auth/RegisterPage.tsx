import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import "@/styles/admin.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="admin-btn admin-btn-primary" 
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
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
