import { Link } from "react-router-dom";
import { ShieldX, Home, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/admin.css";

const UnauthorizedPage = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="admin-layout" style={{ alignItems: "center", justifyContent: "center" }}>
      <div 
        className="admin-card" 
        style={{ 
          maxWidth: "480px", 
          textAlign: "center",
          margin: "24px"
        }}
      >
        <div 
          style={{ 
            width: "80px", 
            height: "80px", 
            borderRadius: "50%", 
            backgroundColor: "var(--admin-error-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px"
          }}
        >
          <ShieldX 
            style={{ 
              width: "40px", 
              height: "40px", 
              color: "var(--admin-error)" 
            }} 
          />
        </div>

        <h1 
          style={{ 
            fontSize: "24px", 
            fontWeight: "700", 
            color: "var(--admin-text)",
            marginBottom: "12px"
          }}
        >
          Access Denied
        </h1>

        <p 
          style={{ 
            color: "var(--admin-text-muted)", 
            marginBottom: "32px",
            lineHeight: "1.6"
          }}
        >
          You don't have permission to access the admin area. 
          Please contact an administrator if you believe this is an error.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link 
            to="/" 
            className="admin-btn admin-btn-primary"
            style={{ textDecoration: "none" }}
          >
            <Home style={{ width: "16px", height: "16px" }} />
            Go to Homepage
          </Link>

          <button 
            onClick={handleSignOut}
            className="admin-btn admin-btn-secondary"
          >
            <LogOut style={{ width: "16px", height: "16px" }} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
