import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "@/styles/admin.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Placeholder: no real authentication yet
    alert("Login functionality will be connected in the next phase.");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <h1 className="auth-title">Devmart Admin</h1>
          <p className="auth-description">
            Sign in to manage your Devmart content
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
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="admin-form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%" }}>
            Sign In
          </button>
        </form>
        <div className="auth-footer">
          <Link to="/auth/forgot-password" className="auth-link">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
