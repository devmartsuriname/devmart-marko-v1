import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/admin.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await signIn(email, password);

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
          <img 
            src="/marko-digital-marketing-agency-html/image/devmart-logo.png" 
            alt="Devmart Admin" 
            className="auth-logo-img"
          />
          <p className="auth-description">
            Sign in to manage your Devmart content
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Signing in..." : "Sign In"}
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
